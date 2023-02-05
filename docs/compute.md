---
title: Compute Shaders | Shadeup
hero: false
---

<script>
	import Link from "$lib/link.svelte";
</script>

![Compute shader](img/compute.jpg)

<div style="display: none;">

#### Compute Shaders

</div>

# Compute Shaders in UE5

Compute shaders are the most powerful tool at your disposal on the GPU . They can generate data (filling buffers), enqueue draw calls (dynamic/indirect instancing), and do massively parallel reductions (summation, filtering) at speeds fit for real-time rendering.

Shadeup offers several templates to help you get started with the basics, while more advanced usage is demonstrated in the [instancing templates](instancing.md).

## Templates

<div class="container link-multi-line">
	<Link href="/docs/compute/base"></Link>
	<Link href="/docs/compute/basemat"></Link>
	<Link href="/docs/compute/pi"></Link>
	<Link href="/docs/compute/rt"></Link>
	<Link href="/docs/compute/mat"></Link>
</div>
