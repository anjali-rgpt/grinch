<script>
    export let quizName,  semester, courseCode, startTime, endTime, password,duration;

    const deleteQuiz = () => {
        if (confirm("Are you sure you want to delete?")) {
            db.collection("course-by-sem").doc(String(semester)).collection("courselist").doc(courseCode).collection("quizzes").doc(quizName).delete()
                .then(doc => {
                    console.log('Quiz deleted :(')
                });
        } else {
            console.log("Operation aborted")
        }

    }
</script>

<div class="card">
    <header class="card-header">
        <p class="card-header-title">
            {'Quiz Name :' + quizName}
        </p>
        <p>
            {'Password: ' + password}
        </p>
    </header>
    <div class="card-content">
        <p>
            {'Duration: ' + duration}
        </p>
        <p>
            {'Start Time: ' + startTime}
        </p>
        <p>
            {'End Time: ' + endTime}
        </p>
    </div>
    <footer class="card-footer">
        <a class="card-footer-item">Edit</a>
        <a class="card-footer-item" on:click={deleteQuiz}>Delete</a>
    </footer>
</div>

<style>
    .card {
        width: 100%;
        margin-top: 1rem;
        margin-bottom: 1rem;
    }
</style>