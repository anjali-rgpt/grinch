<script>
	import Nav from '../components/Nav.svelte';

	export let segment;
</script>

<style>
main {
	padding-top: 2rem;
	padding-bottom: 2rem;
}
</style>

<Nav {segment}/>

<main class="container is-fluid">
	<slot></slot>
</main>