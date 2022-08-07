---
title: Bare-bones setup | Compute | Shadeup
description: Example how-to for writing and dispatching Compute Shaders in Unreal Engine 5.
---

<script>
	import GetCode from "@/get-code.svelte";
</script>

![Line with pink and purple gradient](img/compute/compute-base.jpg)

![Unreal Blueprint graph calling a compute shader](img/compute/compute-base-shot.png)

# Bare-bones setup

A minimal compute-shader scaffold. Great as a starting point for new shaders or for learning the basics of how shaders are defined in Unreal.

<GetCode path={["[COMPUTE] Compute Shader", "Base"]} target="ComputeShader_base" />

## Usage

1. Generate or download the template using the instructions above
2. Rebuild your project
3. Create or navigate to an existing Blueprint
4. Right-click and add the node called _"Execute Base Compute Shader"_

## Notes

-   The mechanism used for detecting when the results are ready on the CPU is for example purposes _(see `F[NAME]Interface::DispatchRenderThread - RunnerFunc`)_. A better strategy would be to queue and check a list of buffers per tick in an external singleton.

## Helpful reading

-   [Using Compute Shaders in Unreal Engine 4](https://medium.com/realities-io/using-compute-shaders-in-unreal-engine-4-f64bac65a907)
-   [Overview of Shaders in Plugins](https://docs.unrealengine.com/5.0/en-US/overview-of-shaders-in-plugins-unreal-engine/)
-   [UE4ShaderPluginDemo](https://github.com/Temaran/UE4ShaderPluginDemo)
-   [Render Dependency Graph](https://docs.unrealengine.com/5.0/en-US/render-dependency-graph-in-unreal-engine/)

---

## Sample snippet

```hlsl
// base.usf

#include "/Engine/Public/Platform.ush"

Buffer<int> Input;
RWBuffer<int> Output;

[numthreads(THREADS_X, THREADS_Y, THREADS_Z)]
void BaseExample(
	uint3 DispatchThreadId : SV_DispatchThreadID,
	uint GroupIndex : SV_GroupIndex )
{
	// Outputs one number
	Output[0] = Input[0] * Input[1];
}
```
