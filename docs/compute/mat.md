---
title: Material graph to render target via compute in UE5 | Compute | Shadeup
description: Example how-to for drawing material graphs to render targets in Unreal Engine 5 compute shaders.
canonical: https://unreal.shadeup.dev/docs/compute/mat
---

<script>
	import GetCode from "@/get-code.svelte";
</script>

![Pink and blue rectangle with bounding box](img/compute/compute-mat.jpg)

![Unreal Blueprint graph calling a compute shader](img/compute/compute-mat-shot.png)

<div style="display: none;">

#### Material graph to render target

</div>

# Material graph to render target via compute in UE5

This is similar to the [`Draw Material to Render Target`](https://docs.unrealengine.com/4.27/en-US/BlueprintAPI/Rendering/DrawMaterialtoRenderTarget/) node provided by Unreal but executed through compute.

<GetCode path={["[COMPUTE] Compute Shader", "Material Evaluation Render Target"]} target="ComputeShader_mat" />

## Usage

1. Generate or download the template using the instructions above
2. Rebuild your project
3. Create or navigate to an existing Blueprint
4. Right-click and add the node called _"Execute Material RTCompute Shader"_

## Notes

- The render target you use should be a multiple of 32. If not the sampler might go over the edge and wrap back around _(depending on your settings)_.

## Helpful reading

- [Render Dependency Graph](https://docs.unrealengine.com/5.0/en-US/render-dependency-graph-in-unreal-engine/)

---

## Sample snippet

```hlsl
// rtmat.usf

#include "/Engine/Generated/Material.ush"
#include "/Engine/Public/Platform.ush"

RWTexture2D<float3> RenderTarget;

[numthreads(THREADS_X, THREADS_Y, THREADS_Z)]
void RTMatExample(
	uint3 DispatchThreadId : SV_DispatchThreadID,
	uint GroupIndex : SV_GroupIndex )
{
	float4 SvPosition = float4(DispatchThreadId.xy, 0, 0);

	FMaterialPixelParameters MaterialParameters = MakeInitializedMaterialPixelParameters();

	// There are various inputs we can provide to the material graph via FMaterialPixelParameters
	// See: https://github.com/EpicGames/UnrealEngine/blob/release/Engine/Shaders/Private/MaterialTemplate.ush#L262

	MaterialParameters.VertexColor = half4(1, 1, 0, 1);

	FPixelMaterialInputs PixelMaterialInputs = (FPixelMaterialInputs)0;

	// This is the call to the material graph
	CalcMaterialParameters(MaterialParameters, PixelMaterialInputs, SvPosition, true);

	// PixelMaterialInputs is a struct that contains the outputs of the material graph
	// Use the provided helper methods ( GetMaterialXYZ(...) ) to access the outputs
	// See: https://github.com/chendi-YU/UnrealEngine/blob/master/Engine/Shaders/MaterialTemplate.usf#L1298

	RenderTarget[DispatchThreadId.xy] = GetMaterialBaseColor(PixelMaterialInputs);
}
```
