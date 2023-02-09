---
title: Indirect Instancing | Shadeup
hero: false
canonical: https://unreal.shadeup.dev/docs/instancing
---

<script>
	import Link from "$lib/link.svelte";
</script>

![Picture of many spheres making the shape of a layered sine wave](img/instancing.jpg)

<div style="display: none;">

#### Indirect Instancing

</div>

# Indirect Instancing in UE5

Indirect instancing is like normal instancing, but it allows for the GPU to drive instance count. One of the most notable uses of this is in GPU-driven particle systems; where particles can spawn, simulate, and die all without expensive CPU calls.

You'll need both a compute shader and a proxy/vertex factory when setting up indirect instancing _(the templates below provide this)_. In most examples the compute and vertex shaders share some buffers:

1. The compute shader will store instance data in arbitrary buffers(s) and increment the indirect args instance count.
2. While the vertex factory will read from these instance buffer(s) and handle any material data passthrough/vertex interpolation.

## Templates

<div class="container link-multi-line">
	<Link href="/docs/instancing/base"></Link>
	<Link href="/docs/instancing/inst"></Link>
	<Link href="/docs/instancing/grid"></Link>
</div>
