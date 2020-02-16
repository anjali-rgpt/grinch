<script>
import Field from '../components/Field.svelte'
import Addquestion from '../components/Addquestion.svelte'
</script>

<style>
.buttons {
	margin-top: 1rem;
}
</style>

<svelte:head>
	<title>Quiz App</title>
</svelte:head>

<div class="level">
	<div class="level-item">
		<button class="button is-dark is-rounded is-medium">+ Create quiz</button>
	</div>
</div>

<Field question="Who is a good bol?" optionone="Me" optiontwo="Anjali" optionthree="Anjalebi" optionfour="Anjay" points=2 correct=4/>
<Addquestion/> 
<div class="level">
	<div class="level-item">
		<div class="buttons">
			<button class="button is-dark is-rounded is-medium">+ Add question</button>
			<button class="button is-black is-rounded is-medium">Done</button>
		</div>
	</div>
</div>