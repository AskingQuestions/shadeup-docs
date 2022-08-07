---
title: Shadeup Home
---

<script>
	import Logo from "./img/logo.svg"
	import Link from "$lib/link.svelte"
	import Icon from "$lib/icon.svelte"
</script>

<div class="hero-wrap">
<div class="splash-main">
	<div>
		<Logo style="margin-left: 160px; margin-bottom: 20px; max-height: 100px; max-width: 100px" class="hero-logo"></Logo>
		<h1 class="main-h1" style="color: var(--primary); font-size: 6rem">SHADEUP</h1>
		<h2 style="color: var(--primary); font-size: 2.1rem">More shaders less boilerplate</h2>
		<p>Shadeup is a CLI-based scaffolding tool for rapidly whipping up shaders in Unreal Engine</p>
    </div>
	<div class="splash-instructions" style="margin-left: 10rem;">
		<h3 class="m-0 mb-2">1. Install</h3>
		<pre class="code-block m-0 mb-6"><span style="color: var(--primary)">$</span> npm i shadeup -g</pre>

    	<h3 class="m-0 mb-2">2. Generate</h3>
    	<pre class="code-block m-0 mb-6"><span style="color: var(--primary)">$</span> cd my-unreal-engine-project

<span style="color: var(--primary)">$</span> shadeup

<i style="opacity: 0.4">? Which plugin do you want to use</i>
<i style="opacity: 0.4">> ShadeupTestPlugin</i> </pre>

    	<h3 class="m-0 mb-2">3. Learn</h3>
    	<a href="/docs" class="btn">Go to the docs <Icon>chevron_right</Icon></a>

</div>

</div>

</div>

<style>
	.code-block {
		overflow: auto;
		max-width: calc(100vw - 97px);
	}

	.m-0 {
		margin: 0;
	}

	.mb-2 {
		margin-bottom: 0.5rem;
	}

	.mb-6 {
		margin-bottom: 2rem;
	}

	.splash-main {
		max-width: 70rem;
		margin: auto;
		display: grid;
		grid-template-columns: 1fr 1fr;
	}

	.hero-wrap {
		height: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	@media (max-width: 1100px) {
		.splash-main {
			grid-template-columns: 1fr;
			grid-template-rows: 1fr 1fr;
		}

		.splash-instructions {
			margin: 0 !important;
		}
	}

	@media (max-width: 484px) {
		.main-h1 {
			font-size: 4rem !important;
		}

		:global(.hero-logo) {
			margin: 0 !important;
		}
	}

	:global(.hero-logo) {
		
	}

	.link-row-scroller {
		overflow-x: auto;
		flex-wrap: none;
	}
</style>
