<script>
	import Map from './Map.svelte';
</script>

<svelte:head>
	<meta name="description" content="Svelte demo app" />
	<script
		src="//dapi.kakao.com/v2/maps/sdk.js?appkey=dbec7e19bbbe4a9e21a7b64b16dd537c&libraries=services"
	></script>
</svelte:head>

<section>
	<Map />
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
	}
</style>
