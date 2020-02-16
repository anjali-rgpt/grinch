<script>
import Field from '../components/Field.svelte'
</script>

<svelte:head>
	<title>Quiz App</title>
</svelte:head>


<button class="button is-dark is-rounded is-medium">+ Create quiz</button>

<Field question="Who is a good bol?" optionone="Me" optiontwo="Anjali" optionthree="Anjalebi" optionfour="Anjay" points=2 correct=4/>