<script>
    export let semester;
    let courseName, courseCode, credits;

    const letters = /^[ A-Za-z]+$/
    const courseCodeFormat = /^[1][59][A-Z]{3}[1-4][0-9]{2}/
    const submitCourse = () => {
        if (courseCode == null || courseName == null || credits == null) {
            alert("Form incomplete")
        } else if (!courseName.match(letters)) {
            alert("Course name can only contain letters")
        } else if (!courseCode.match(courseCodeFormat)) {
            alert("Course Code Format is invalid")
        } else if (credits < 1 || credits > 4) {
            alert("Enter a proper credit amount")
        } else {
            db.collection("course-by-sem").doc(String(semester)).collection("courselist").doc(courseCode).set({
                    CourseCode: courseCode,
                    CourseName: courseName,
                    Credits: credits
                })
                .then(function (doc) {
                    console.log('Course added!')
                    courseCode = null, courseName = null, credits = null
                });
        }
    }
</script>

<style>
    .card {
        width: 100%;
        margin-top: 1rem;
        border-radius: 7px;
        padding: 1.5rem;

    }

    .input {
        margin-right: 0.5rem;
        margin-bottom: 0.5rem;
    }
</style>

<div class="card">
    <div class="card-level">
        <div class="card-level-item">
            <p>
                Course Code
                <input type="text" placeholder="Course Code" id="coursecode" class="input" bind:value={courseCode}
                    required />
            </p>
        </div>

        <div class="card-level-item">
            Course Name:
            <input type="text" placeholder="Course Name" id="coursename" class="input" bind:value={courseName}
                required />
        </div>

        <div class="card-level-item">
            Credits:
            <input type="number" placeholder="Credits" id="credits" class="input" bind:value={credits} required />
        </div>
    </div>

    <div class="card-footer">
        <div class="card-footer-item">
            <div class="button is-rounded" id="donebutton" on:click={submitCourse}>Done</div>
        </div>

    </div>
</div>