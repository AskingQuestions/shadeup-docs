---
title: Calculate PI | Compute | Shadeup
description: Example how-to that calculates PI in parallel using a compute shader in Unreal Engine 5.
---

<script>
	import GetCode from "@/get-code.svelte";
</script>

![Pink and blue PI symbol](img/compute/compute-pi.jpg)

![Unreal Blueprint graph calling a compute shader](img/compute/compute-pi-shot.png)

<div style="display: none;">

#### Calculate PI

</div>

# Calculate PI via compute in UE5

This example approximates PI in parallel using the Monte Carlo method.
When running you're only going to be able to get about 2-3 decimal places of accuracy.

<GetCode path={["[COMPUTE] Compute Shader", "PI"]} target="ComputeShader_pi" />

## Usage

1. Generate or download the template using the instructions above
2. Rebuild your project
3. Create or navigate to an existing Blueprint
4. Right-click and add the node called _"Execute PICompute Shader"_

## Notes

- The mechanism used for detecting when the results are ready on the CPU is for example purposes _(see `F[NAME]Interface::DispatchRenderThread - RunnerFunc`)_. A better strategy would be to queue and check a list of buffers per tick in an external singleton.

## Helpful reading

- [Using Compute Shaders in Unreal Engine 4](https://medium.com/realities-io/using-compute-shaders-in-unreal-engine-4-f64bac65a907)
- [Overview of Shaders in Plugins](https://docs.unrealengine.com/5.0/en-US/overview-of-shaders-in-plugins-unreal-engine/)
- [UE4ShaderPluginDemo](https://github.com/Temaran/UE4ShaderPluginDemo)
- [Render Dependency Graph](https://docs.unrealengine.com/5.0/en-US/render-dependency-graph-in-unreal-engine/)

---

## Sample snippet

```hlsl
// pi.usf

#include "/Engine/Public/Platform.ush"

// Calculate π using the monte carlo method
// https://en.wikipedia.org/wiki/Monte_Carlo_method

// Output has 1 element: [numInCircle]
RWBuffer<uint> Output;

// Seed the random number generator
float Seed = 0.0f;

float random( float2 p )
{
    float2 r = float2(
        23.14069263277926,
         2.665144142690225
    );
    return frac( cos( dot(p,r) ) * 12345.6789 );
}

[numthreads(THREADS_X, THREADS_Y, THREADS_Z)]
void PIExample(
	uint3 DispatchThreadId : SV_DispatchThreadID,
	uint GroupIndex : SV_GroupIndex )
{
	float2 RandomPosition = float2(
		random(float2(GroupIndex * THREADS_X + DispatchThreadId.x, 10 + Seed)),
		random(float2(GroupIndex * THREADS_X + DispatchThreadId.x, 20 * Seed))
	);
	float Dist = length(RandomPosition);

	if (Dist < 1.0f) {
		uint Dummy;
		InterlockedAdd(Output[0], 1, Dummy);
	}
}
```
