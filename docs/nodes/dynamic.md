---
title: Dynamic material node | Nodes | Shadeup
---

<script>
	import GetCode from "@/get-code.svelte";
</script>

![Material graph node](img/nodes/nodes-dynamic.jpg)

![Unreal material expression](img/nodes/nodes-dynamic-shot.png)

# Dynamic material node

Allows the user to define a variable number of outputs with names in the node details panel.

---

<GetCode path={["[MATERIAL] Custom Material Nodes", "Dynamic Outputs"]} target="MaterialNodeOutput_dynamic" />

## Usage

1. Generate the template: `shadeup` -> `[MATERIAL] Custom Material Nodes` -> `Dynamic Outputs`
2. Rebuild your project
3. Add the node in a material graph
