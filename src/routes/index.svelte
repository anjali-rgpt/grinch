<script>
import Field from '../components/Field.svelte'
</script>

<svelte:head>
	<title>Quiz App</title>
</svelte:head>


<button class="button is-dark is-rounded is-medium">+ Create quiz</button>

<Field question="Hello world" optionone="a" optiontwo="b" optionthree="c" optionfour="d" points=2 correct=4/>