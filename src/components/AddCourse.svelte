<script>
  export let semester;
  let courseName, courseCode, credits;

const letters= /^[A-Za-z]+$/
const courseCodeFormat=/^[1][59][A-Z]{3}[1-4]{3}/
  const submitCourse=() =>{
if (!courseName.match(letters)){
    alert("Course name can only contain letters")
}

else if(!courseCode.match(courseCodeFormat)){
    alert("Course Code Format is invalid")
}

else{
    db.collection("course-by-sem").doc(String(semester)).collection("courselist").doc(courseCode).set({
        CourseCode:courseCode,
        CourseName:courseName,
        Credits:credits
    })
    .then(function (doc) {
        console.log('Course added!')
        courseCode=null,courseName=null,credits=null
      });
}
  }
</script>

<div class="card">
<div class="card-level">
  <div class="card-level-item">
    <p>
      Course Code
      <input
        type="text"
        placeholder="Course Code"
        id="coursecode"
        class="input"
        bind:value={courseCode} />
    </p>
  </div>

  <div class="card-level-item">
    Course Name:
    <input
      type="text"
      placeholder="Course Name"
      id="coursename"
      class="input"
      bind:value={courseName} />
  </div>

  <div class="card-level-item">
    Credits:
    <input
      type="number"
      placeholder="Credits"
      min="1"
      max="4"
      id="credits"
      class="input"
      bind:value={credits} />
  </div>
  </div>

  <div class="card-footer">
  <div class="card-footer-item">
  <div class="button is-rounded" id="donebutton" on:click={submitCourse}>Done</div>
  </div>

  </div>
</div>
