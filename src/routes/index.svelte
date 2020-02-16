<script>
	import Field from '../components/Field.svelte'
	import Addquestion from '../components/Addquestion.svelte'

	import {
		onMount
	} from 'svelte';

	let data = []
	let quizname = 'loading...'

	onMount(() => {
		db.collection("course").doc('15CSE313').collection('quizzes').doc('q1').get()
		.then(function (doc) {
			quizname = doc.data()['QuizName']
		});
		db.collection("course").doc('15CSE313').collection('quizzes').doc('q1').collection('questions').get()
		.then(function (querySnapshot) {
			querySnapshot.forEach(function (doc) {
				console.log(doc.id, " => ", doc.data());
			});
		});
	})
</script>

<style>
	.buttons {
		margin-top: 1rem;
	}

	.bottom {
		margin-top: 2rem;
	}
</style>

<svelte:head>
	<title>Quiz App</title>
</svelte:head>

<div class="level">
	<div class="level-item">
		<button class="button is-primary is-rounded is-medium">+ Create quiz</button>
	</div>
</div>

<p class="content">
	{quizname}
</p>

<Field question="Who is a good bol?" optionone="Me" optiontwo="Anjali" optionthree="Anjalebi" optionfour="Anjay"
	points=2 correct=4 />

<Addquestion />

<div class="level bottom">
	<div class="level-item">
		<div class="buttons">
			<button class="button is-primary is-outlined is-rounded is-medium">+ Add question</button>
			<button class="button is-success is-rounded is-medium">Done</button>
		</div>
	</div>
</div>