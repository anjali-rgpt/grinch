<script>
	import Field from '../components/Field.svelte'
	import AddQuestion from '../components/AddQuestion.svelte'

	import {
		onMount
	} from 'svelte';

	let id = []
	let questions = []
	let quizname = 'loading...'
	let flag = false

	

	onMount(async () => {
		await db.collection('course-by-sem').doc('6').collection('courselist').doc('15CSE311').collection('quizzes').doc('quiz1').get()
		.then(doc =>
		quizname=doc.data()['QuizName'])
		await db.collection('course-by-sem').doc('6').collection('courselist').doc('15CSE311').collection('quizzes').doc('quiz1').collection("questions")
			.onSnapshot(querySnapshot => {
				//quizname = querySnapshot.data()['QuizName']
				id = []
				questions = []
				querySnapshot.forEach(doc => {
					id.push(doc.id)
					id = id
					questions.push(doc.data())
					questions = questions
				});
				questions = questions
			});
		flag = true
	})
</script>

<style>
	.buttons {
		margin-top: 1rem;
	}

	.bottom {
		margin-top: 2rem;
	}

	.pad-top {
		margin-top: 2rem
	}
</style>

<svelte:head>
	<title>Quiz App</title>
</svelte:head>


<div class="card">
	<header></header>
	<div class="card-body">

	</div>
</div>

<h1 class="title has-text-centered is-size-1">
	Quiz - {quizname}
</h1>

<h1 class="is-size-3 has-text-centered pad-top">Add questions:</h1>
<AddQuestion semester={6} courseCode={"15CSE311"} quizName={"quiz1"}/>

<hr>

{#if questions.length>0}
<h1 class="is-size-3 has-text-centered pad-top is-italic">Preview:</h1>
{/if}

{#if flag}

<div class="columns is-multiline">

{#each questions as question, i}
<div class="column is-half">
	<Field question={question['Question']} optionone={question['OptionA']} optiontwo={question['OptionB']} optionthree={question['OptionC']} optionfour={question['OptionD']}
		points={question['Points']} correct={question['Correct']} idn={id[i]}/>
</div>
{/each}

</div>

{/if}


<!-- <Field question="Who is a good bol?" optionone="Me" optiontwo="Anjali" optionthree="Anjalebi" optionfour="Anjay"
	points=2 correct=4 /> -->



<div class="level bottom">
	<div class="level-item">
		<div class="buttons">
			<button class="button is-success is-rounded is-medium">Done</button>
		</div>
	</div>
</div>