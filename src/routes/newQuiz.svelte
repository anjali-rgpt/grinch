<script>
  import {
    onMount
  } from "svelte";
  import AddQuizDetails from "../components/AddQuizDetails.svelte";

  let sem, courseCode;

  let semesters = [];
  let courselist = [];

  onMount(async () => {
    await db
      .collection("course-by-sem")
      .get()
      .then(doc => {
        semesters = [];
        doc.forEach(element => {
          semesters.push(element.data());
          semesters = semesters;
        });
        semesters = semesters;
        sem = 1
      });
    await getCourses();
    
  });

  const getCourses = () => {
    //addNew = false;
    db.collection("course-by-sem")
      .doc(String(sem))
      .collection("courselist")
      .onSnapshot(doc => {
        courselist = [];
        doc.forEach(element => {
          courselist.push(element.data());
          courselist = courselist;
        });
        courselist = courselist;
        courseCode = courselist[0].CourseCode
      });
  };
</script>

<div class="hero is-fullheight">
  <h4 class="is-size-3 has-text-centered">Panel to select semester and course for which quiz is to be created</h4>
  <div class="hero-body">

    <div class="container">

      <div class="field is-grouped">

        <div class="control">
          <div class="select">
            <select name="semester" bind:value={sem} on:change={getCourses}>
              {#each semesters as semester}
                <option value={semester['Semester']} name={semester['Semester']}>
                  {'Semester ' + (semester['Semester'] || 'loading...')}
                </option>
              {/each}
            </select>
          </div>
        </div>

        <div class="control">
          <div class="select">
            <select name="coursecode" bind:value={courseCode}>
              {#each courselist as course}
                  <option value={course['CourseCode']} name={course['CourseCode']}>
                    {(course['CourseCode'] || 'loading...')}
                  </option>
                {/each}
            </select>
          </div>
        </div>

      </div>
      <AddQuizDetails semester={sem} courseCode={courseCode} />
    </div>

  </div>
</div>