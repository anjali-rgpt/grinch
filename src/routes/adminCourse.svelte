<script>
    import {
        onMount
    } from 'svelte';

    let semesters = []

    onMount(async () => {
        await db.collection('course-by-sem').get()
            .then(doc => {
                semesters = []
                doc.forEach(element => {
                    semesters.push(element.data())
                    semesters = semesters
                });
                semesters = semesters
            });
    })
</script>


<svelte:head>
    <title>Admin: Add Course</title>
</svelte:head>

<select name="semester">
    {#each semesters as semester,i}
<option name={semester['Semester']}>{semester['Semester']}</option>
{/each}
</select>