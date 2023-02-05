---
title: Advanced output node | Nodes | Shadeup
---

<script>
	import GetCode from "@/get-code.svelte";
</script>

![Material graph node](img/nodes/nodes-output.jpg)

![Unreal material expression](img/nodes/nodes-output-shot.png)

<div style="display: none;">

#### Advanced output node

</div>

# Custom advanced output material node in UE5

Simple output node accessible from vertex factories, compute shaders, etc.

---

<GetCode path={["[MATERIAL] Custom Material Nodes", "Base Final Output"]} target="MaterialNodeOutput_output" />

## Usage

1. Generate the template: `shadeup` -> `[MATERIAL] Custom Material Nodes` -> `Base Final Output`
2. Rebuild your project
3. Add the node in a material graph
