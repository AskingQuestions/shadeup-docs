---
title: Shadeup CLI
canonical: https://unreal.shadeup.dev/docs/cli
---

![CLI](img/cli.jpg)

# CLI Usage

The `shadeup-unreal` command is very simple, there are no options or sub-commands. Just execute it in an Unreal Engine project folder and you're ready to go.

```shell
$ cd my-ue-project-folder
$ shadeup-unreal
```

## 1. Select a plugin

It's recommended that you create a new plugin to house your shaders. If you don't know how to, follow [this guide](https://docs.unrealengine.com/5.0/en-US/plugins-in-unreal-engine/#creatingnewplugins).

```shell
Shadeup v0.1.0
? Which plugin do you want to use (To create a new one use the unreal engine editor) (Use arrow keys)
> MyCoolPlugin
  OtherPlugin
```

## 2. Select a module

After selecting a plugin you'll need to choose a module to place your shaders in. Modules can be used to group like-shaders together.

**DO NOT** use the default module provided with your plugin _(it has the same name as your plugin)_. Modules containing shaders need a special loading phase configured, this loading phase is not included in the default module.

Go ahead and create a new module and name it appropriately _(something to do with shaders)_.

```shell
? Which module do you want to use (Warning: Don't use the default module for shaders, it will cause errors, please
create a new one instead)
  MyCoolPlugin
> Create New
```

## 3. Choosing a template

Now for the fun part!

<pre class="language-shell">
<span style="color: green">?</span> Template:
<span style="color: dodgerblue">></span> <span style="color: red">[INSTANCING]</span> <span style="color: dodgerblue">Indirect Instancing</span>
  <span style="color: green">[MATERIAL]</span> Custom Material Nodes
  <span style="color: #5555ff">[COMPONENT]</span> SceneProxy/VertexFactory
  <span style="color: purple">[COMPUTE]</span> Compute Shader
</pre>

As you can see, there are a few different categories and even more templates to choose from.

I would recommend starting with compute shaders if you're new to UE shaders. They're fairly isolated and should give you a good idea of how parameters map to HLSL and how you can dispatch work to the GPU.

## 4. Learning from the code

Comments are applied liberally throughout the code and try to target a beginner level _(i.e. someone who knows what shaders are and what the various GPU terms are)_. A good starting point is the `readme.md` generated alongside each template, as they contain explanations for notable abstractions and a high-level file overview.

See the [recommended learning resources](/docs/learning) for helpful links.

[Next up](->/docs/compute)
