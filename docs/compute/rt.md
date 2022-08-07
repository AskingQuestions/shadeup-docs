---
title: Writing to a render target | Compute | Shadeup
description: Example how-to for drawing into a render target using a compute shader in Unreal Engine 5.
---

<script>
	import GetCode from "@/get-code.svelte";
</script>

![Pink numbers in a bounding box](img/compute/compute-rt.jpg)

![Unreal Blueprint graph calling a compute shader](img/compute/compute-rt-shot.png)

# Writing to a render target

Drawing to render targets from compute shaders is an extremely useful method to render all sorts of things that need multiple passes or expensive calculations cached.

<GetCode path={["[COMPUTE] Compute Shader", "Render Target"]} target="ComputeShader_rt" />

## Applications

-   2d simulations _(water, game of life, etc)_
-   Complex/procedural texture baking
-   Custom rendering that doesn't need to be run every frame

## Usage

1. Generate or download the template using the instructions above
2. Rebuild your project
3. Create or navigate to an existing Blueprint
4. Right-click and add the node called _"Execute RTCompute Shader"_

## Notes

-   The render target you use should be a multiple of 32. If not the sampler might go over the edge and wrap back around _(depending on your settings)_.

## Helpful reading

-   [Render Dependency Graph](https://docs.unrealengine.com/5.0/en-US/render-dependency-graph-in-unreal-engine/)

---

## Sample snippet

```hlsl
// rt.usf

#include "/Engine/Generated/Material.ush"
#include "/Engine/Public/Platform.ush"

RWTexture2D<float3> RenderTarget;

[numthreads(THREADS_X, THREADS_Y, THREADS_Z)]
void RTExample(
	uint3 DispatchThreadId : SV_DispatchThreadID,
	uint GroupIndex : SV_GroupIndex )
{
	// Simple checkerboard
	int x = floor(DispatchThreadId.x / 16.f);
	int y = floor(DispatchThreadId.y / 16.f);
	int c = (x + y % 2) % 2;

	RenderTarget[DispatchThreadId.xy] = float3(c, c, c);
}
```
