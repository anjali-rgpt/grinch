<script>
import { onMount } from "svelte";
  import AddQuizDetails from "../components/AddQuizDetails.svelte";
  import Field from "../components/Field.svelte";
  import AddQuestion from "../components/AddQuestion.svelte";
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
      });
    await getCourses();
  });

  const getCourses = () => {
    console.log(sem);
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
        console.log(courselist);
        courselist = courselist;
      });
  };
</script>

<h4>Panel to select semester and course for which quiz is to be created</h4>

<select name="semester" bind:value={sem} on:change={getCourses}>
  {#each semesters as semester}
    <option value={semester['Semester']} name={semester['Semester']}>
      {'Semester ' + (semester['Semester'] || 'loading...')}
    </option>
  {/each}
</select>


<select name="coursecode" bind:value={courseCode}>
{#each courselist as course}
    <option value={course['CourseCode']} name={course['CourseCode']}>
      {(course['CourseCode'] || 'loading...')}
    </option>
  {/each}
</select>

<AddQuizDetails semester={sem} courseCode={courseCode}/>