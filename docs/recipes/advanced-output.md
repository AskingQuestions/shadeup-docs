---
title: UE5 Advanced Custom output with Compute Shaders | Shadeup
---

![Material graph node](img/recipes/advanced-output-material-shot.png)

<script>
	import GetCode from "@/get-code.svelte";
</script>

# Making a custom Advanced Output material expression accessible from Compute Shaders in Unreal Engine 5

That title is a mouthful, but in short, this recipe provides ways to:

- Expose more fine-grained control of backend systems to artists via material graphs.
- Drive/read back gameplay-critical values from material graphs to the CPU.

---

## 1. Setup

#### 1.1 Scaffold a material compute shader:

<GetCode noTitle={true} path={["[COMPUTE] Compute Shader", "Base with material"]} target="ComputeShader_basemat" />

#### 1.2 Scaffold an output-only material node:

<GetCode noTitle={true} path={["[MATERIAL] Custom Material Nodes", "Base Final Output"]} target="MaterialNodeOutput_output" />

> If you don't have the `shadeup` command installed [follow this](/docs/install) to get it.

---

## 2. Reduce permutations

First we'll need to change a few parts of our compute shader, we can start by reducing the number of permutations that are compiled with:

<pre class="file-name">AdvancedOutputComputeShader.cpp:70</pre>

```cpp
const bool bIsCompatible =
	Parameters.MaterialParameters.MaterialDomain == MD_Surface
	&& Parameters.MaterialParameters.BlendMode == BLEND_Opaque
	&& Parameters.MaterialParameters.ShadingModels == MSM_DefaultLit
	&& Parameters.MaterialParameters.bIsUsedWithLidarPointCloud; // Add this line here
```

By adding a check for `bIsUsedWithLidarPointCloud` we can greatly reduce the number of materials that need to be compiled against our compute shader. Of course, this means that any shaders you do want to use will need to have the `UseWithLidarPointCloud` check box ticked off in the material editor details panel.

Unfortunately, this is a hack and makes this a bit unintuitive because you now need to remember to check that box off. (We'll fix this next)

> You can find a list of all the available `bIsUsedWithXYZ` flags [here](https://docs.unrealengine.com/5.0/en-US/API/Runtime/Engine/FMaterialShaderParameters/)

---

## 3. Permutation error message

We should add an error message when the user attempts to call a material that doesn't have the `bIsUsedWithLidarPointCloud`.

Add this block right after line 130:

<pre class="file-name spaced">AdvancedOutputComputeShader.cpp:130</pre>

```cpp
...
bool bIsShaderValid = ComputeShader.IsValid();

// START Add this block
if (MaterialRenderProxy && !MaterialRenderProxy->GetMaterialInterface()->CheckMaterialUsage_Concurrent(MATUSAGE_LidarPointCloud)) {
	#if WITH_EDITOR
	GEngine->AddOnScreenDebugMessage((uint64) 5643264352356, 6.f, FColor::Red, FString(TEXT("Can't use the specified material because it has not been compiled with bUsedWithLidarPointCloud.")));
	#endif

	bIsShaderValid = false;
}
// END Add this block

if (bIsShaderValid) {
...
```

---

## 4. Get values in the shader

Next we'll add a call to `GetShadeupAdvancedMaterialOutput` to the shader side.

Replace the line:

<pre class="file-name">AdvancedOutputComputeShader.usf:30</pre>

```hlsl
OutputColor[0] = float4(GetMaterialBaseColor(PixelMaterialInputs), 0);
```

with:

<pre class="file-name">AdvancedOutputComputeShader.usf:30</pre>

```hlsl
float num1 = 0;
float num2 = 0;

#ifdef NUM_MATERIAL_OUTPUTS_GETSHADEUPADVANCEDMATERIALOUTPUT
	#if NUM_MATERIAL_OUTPUTS_GETSHADEUPADVANCEDMATERIALOUTPUT > 0
		num1 = GetShadeupAdvancedMaterialOutput0(MaterialParameters);
		num2 = GetShadeupAdvancedMaterialOutput1(MaterialParameters);
	#endif
#endif

OutputColor[0] = float4(num1, num2, 0, 0);
```

This will make sure the output node exists and that we don't have a compilation error when it doesn't.

---

## 5. Usage

Now we can build and launch the editor to begin playing with our new custom node!

#### 5.1 Create a material

Add the `Shadeup Advanced Output Node` and hook up some inputs:

<pre class="image-overlay"><a target="_blank" href="https://blueprintue.com/blueprint/54-fvbg1/">bpue/54-fvbg1</a></pre>

![UE5 Material graph](img/recipes/advanced-output-material.png)

#### 5.2 Enable the permutation

Tick off the `Used with Lidar Point Cloud` checkbox in the material details panel

![UE5 Material details panel](img/recipes/advanced-output-details.png)

#### 5.3 Call from BP

Open up a level blueprint or create a new actor BP and insert the following nodes:

<pre class="image-overlay"><a target="_blank" href="https://blueprintue.com/blueprint/zlvmtoyq/">bpue/zlvmtoyq</a></pre>

![UE5 blueprint editor](img/recipes/advanced-output-bp.png)

---

# 6. All done!

You should now have values coming from a material graph, into a compute shader, over to BP, and finally landing on your screen.

![Video of results](img/recipes/advanced-output-results.gif)
