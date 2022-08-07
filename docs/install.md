---
title: Installing Shadeup
---

![Down arrow icon](img/install.jpg)

# Installation

## 1. Prerequisites

You'll need node.js in order to install and run the Shadeup CLI

1. [Node.js](https://nodejs.org/en/) (includes `npm` used below)
2. [Unreal Engine](https://www.unrealengine.com/en-US)

## 2. Install the CLI

```shell
$ npm i shadeup -g
```

## 3. Verify your installation

After installation, you should have the `shadeup` command available in your path.
When running you should get an error (assuming your `cwd` is not a UE project):

```shell
$ shadeup

Shadeup v0.1.0
Error: No unreal project found in this folder.
```

> You may need to restart your terminal for the `shadeup` command to appear

[Next up](->/docs/cli)
