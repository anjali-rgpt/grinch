<script>
    export let courseName, credits, semester, courseCode;

    const deleteCourse = () => {
        if (confirm("Are you sure you want to delete?")) {
            db.collection("course-by-sem").doc(String(semester)).collection("courselist").doc(courseCode).delete()
                .then(doc => {
                    console.log('Course deleted :(')
                });
        } else {
            console.log("Öperation aborted")
        }

    }
</script>

<div class="card">
    <header class="card-header">
        <p class="card-header-title">
            {'Course Code: ' + courseCode}
        </p>
    </header>
    <div class="card-content">
        <p>
            {'Course Name: ' + courseName}
        </p>
        <p>
            {'Credits: ' + credits}
        </p>
    </div>
    <footer class="card-footer">
        <a class="card-footer-item">Edit</a>
        <a class="card-footer-item" on:click={deleteCourse}>Delete</a>
    </footer>
</div>

<style>
    .card {
        width: 100%;
        margin-top: 1rem;
        margin-bottom: 1rem;
    }
</style>