---
title: Custom Nodes | Shadeup
hero: false
---

<script>
	import Link from "$lib/link.svelte";
</script>

![Material graph with a node titled: custom](img/custom.jpg)

# Custom Nodes

Custom nodes _(not to be confused with [Custom Material Expressions](https://docs.unrealengine.com/5.0/en-US/custom-material-expressions-in-unreal-engine/))_ are usable material nodes that you can define in C++ and access through vertex factories or compute shaders. They're great for exposing additional outputs to material graphs or for providing complex inputs that read from parameters used in a compute shader. Examples of this in-engine are the [Landscape Grass Output](https://docs.unrealengine.com/4.27/en-US/BuildingWorlds/OpenWorldTools/Grass/QuickStart/#4-landscapematerialsandthegrasstool), and the [Volumetric Advanced Output](https://docs.unrealengine.com/5.0/en-US/volumetric-cloud-component-properties-in-unreal-engine/#volumetricadvancedmaterialoutputexpression).

## Templates

<div class="container link-multi-line">
	<Link href="/docs/nodes/fn"></Link>
	<Link href="/docs/nodes/input"></Link>
	<Link href="/docs/nodes/output"></Link>
	<Link href="/docs/nodes/dynamic"></Link>
</div>
