<script>
  import { onMount } from "svelte";

  import CourseCard from "../components/CourseCard.svelte";

  let semesters = ["loading..."];
  let courselist = ["loading..."];

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
      });
  });

  const getCourses = sem => {
    db.collection("course-by-sem")
      .doc(String(sem))
      .collection("courselist")
      .get()
      .then(doc => {
        courselist = [];
        doc.forEach(element => {
          courselist.push(element.data());
          courselist = courselist;
        });
        courselist = courselist;
      });
  };
</script>

<style>
  .column {
    display: flex;
    flex-direction: column;
  }

  .left-pane,
  .right-pane {
    align-items: center;
    justify-content: center;
  }
</style>

<svelte:head>
  <title>Admin: Add Course</title>
</svelte:head>

<div class="hero is-fullheight">
  <h1 class="has-text-centered is-size-1 title">Admin Panel</h1>
  <h4 class="has-text-centered is-size-5 subtitle">
    Use this panel to add / remove / modify courses
  </h4>
  <div class="columns hero-body">
    <div class="column is-one-quarter left-pane">
      <div class="field">
        <label for="sem" class="label">Choose semester:</label>
        <div class="control">
          <div id="sem" class="select">
            <select name="semester">
              {#each semesters as semester}
                <option name={semester['Semester']} on:click={getCourses(semester['Semester'])}>
                  {'Semester ' + (semester['Semester'] || 'loading...')}
                </option>
              {/each}
            </select>
          </div>
        </div>
      </div>
      <button class="button is-rounded is-success is-medium">
        + Add new course
      </button>
    </div>
    <div class="column right-pane">
      <!-- course details here -->
      <CourseCard
        title="Course Code"
        content="Course Details"
        actions={['edit', 'delete']} />

    </div>
  </div>
</div>
