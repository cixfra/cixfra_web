<svelte:head>
	<title>Whoops &gtw&lt</title>
</svelte:head>

<script>
	import { page } from "$app/stores";
	function fuckGoBack() { history.back() }
</script>

<div id="content">
	<h1>OwO what's this?!</h1>
	<p>Looks like you got yourself into a problem ({$page.status}: {$page.error?.message})</p>
	<button on:click={fuckGoBack}>Take me back pwease &gtw&lt</button>
</div>

<style>
	@import "./error.css";
</style>
