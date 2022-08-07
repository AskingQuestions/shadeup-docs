<script>
	import Icon from "$lib/icon.svelte";

	export let path = "";
	export let target = "";
	export let noTitle = false;
</script>

{#if !noTitle} <h2 style="margin-top: 4rem;">Get the code</h2> {/if}
<div
	class="article-block get-code grid rounded-md border-gray-light"
	style="margin-bottom: 4rem; border-width: 1px;"
>
	<div class="px-1 py-1 pb-8 lg:px-8 lg:py-10 max-w-full overflow-auto">
		<!-- <h4 class="text-center">CLI</h4> -->
		<pre class="language-shell max-w-full" style="margin: 0"><code
				class="language-shell"
				><span class="token keyword">$</span> shadeup<br
				/>{#each path as p, i}&nbsp;<span class="token keyword">></span
					> {p}<br />{/each}</code
			></pre>
	</div>
	<div class="flex items-center justify-center bg-gray-light">
		<span class="bg-gray">OR</span>
	</div>
	<div
		class="flex items-center justify-center px-1 py-4 pt-8 lg:px-8 lg:py-10"
	>
		<!-- <h4 class="text-center">Download</h4> -->
		<a class="btn" download="" href={`/${target}.zip`}>Download archive</a>
	</div>
</div>

<style lang="less">
	.article-block {
		grid-template-columns: 1.5fr 1px 1fr;
	}

	@media (max-width: 1100px) {
		.article-block {
			grid-template-columns: 1fr;
			grid-template-rows: auto 1px auto;
		}
	}
</style>
