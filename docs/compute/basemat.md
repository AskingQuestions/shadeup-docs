---
title: Bare-bones material graph evaluation via Compute Shader in UE5 | Compute | Shadeup
description: Example how-to for executing material graphs from within Unreal Engine 5 compute shaders.
canonical: https://unreal.shadeup.dev/docs/compute/basemat
---

<script>
	import GetCode from "@/get-code.svelte";
</script>

![Pink and blue material ball](img/compute/compute-basemat.jpg)

![Unreal Blueprint graph calling a compute shader](img/compute/compute-basemat-shot.png)

<div style="display: none;">

#### Bare-bones material graph evaluation

</div>

# Bare-bones material graph evaluation via Compute Shader in UE5

This template provides an example of linking a custom compute shader to any material defined in the editor. Allowing you to input/output parameters from material graphs defined by developers or artists.

<GetCode path={["[COMPUTE] Compute Shader", "Base with material"]} target="ComputeShader_basemat" />

## Applications

- Drive indirect instancing from a texture sampled in a material graph.
- Sample and find the average color of a material on the GPU.
- Generate & derive height-maps/normals using user-defined graphs.

This workflow opens up a world of possibilities and is one of the coolest features of the Unreal shader pipeline.

## Usage

1. Generate or download the template using the instructions above
2. Rebuild your project
3. Create or navigate to an existing Blueprint
4. Right-click and add the node called _"Execute Base Material Compute Shader"_

## Helpful reading

- [Render Dependency Graph](https://docs.unrealengine.com/5.0/en-US/render-dependency-graph-in-unreal-engine/)

---

## Sample snippet

```hlsl
// basemat.usf

#include "/Engine/Generated/Material.ush"
#include "/Engine/Public/Platform.ush"

float2 Position;
RWBuffer<float4> OutputColor;

[numthreads(THREADS_X, THREADS_Y, THREADS_Z)]
void BaseMatExample(
	uint3 DispatchThreadId : SV_DispatchThreadID,
	uint GroupIndex : SV_GroupIndex )
{
	float4 SvPosition = float4(Position.xy, 0, 0);

	FMaterialPixelParameters MaterialParameters = MakeInitializedMaterialPixelParameters();

	// There are various inputs we can provide to the material graph via FMaterialPixelParameters
	// See: https://github.com/EpicGames/UnrealEngine/blob/5.0/Engine/Shaders/Private/MaterialTemplate.ush#L262

	MaterialParameters.VertexColor = half4(1, 1, 0, 1);

	FPixelMaterialInputs PixelMaterialInputs = (FPixelMaterialInputs)0;

	// This is the call to the material graph
	CalcMaterialParameters(MaterialParameters, PixelMaterialInputs, SvPosition, true);

	// PixelMaterialInputs is a struct that contains the outputs of the material graph
	// Use the provided helper methods ( GetMaterialXYZ(...) ) to access the outputs
	// See: https://github.com/EpicGames/UnrealEngine/blob/5.0/Engine/Shaders/Private/MaterialTemplate.ush#L2485

	OutputColor[0] = float4(GetMaterialBaseColor(PixelMaterialInputs), 0);

	// You can also access custom output nodes via their respective names
	// e.g. GetMyCustomMaterialOutput0(MaterialParameters)
	// See: Custom node example
}
```
