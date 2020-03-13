<script>
export let semester, courseCode;
let quizName,startTime,endTime,quizpass

const submitQuiz= ()=>{
    let start=new Date(startTime)
    let end=new Date(endTime)

    db.collection("course-by-sem").doc(String(semester)).collection("courselist").doc(courseCode).collection('quizzes').add({
                    QuizName:quizName,
                    StartTime:start,
                    EndTime:end,
                    Password:quizpass
                    

                })
                .then(function (doc) {
                    console.log('Quiz added!')
                    quizNameCode = null, startTime = null, endTime = null,quizpass=null
                });
}


</script>

<label for="quizname" class="label">Quiz Name</label>
<input type="text" placeholder="Quiz Name" id="quizname" class="input" bind:value={quizName} required />

<label for="starttime" class="label">Start Time</label>
<input type="datetime-local" placeholder="Start Time" id="starttime" class="input" bind:value={startTime} required />

<label for="endtime" class="label">End Time</label>
<input type="datetime-local" placeholder="End Time" id="endtime" class="input" bind:value={endTime} required />

<label for="quizpass" class="label">Quiz Password</label>
<input type="text" placeholder="Quiz Password" id="quizpass" class="input" bind:value={quizpass} required />

<div class="button is-rounded is-medium is-outlined" id="quizsubmit" on:click={submitQuiz}>Add Quiz</div>