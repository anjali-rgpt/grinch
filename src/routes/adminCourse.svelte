<script>

let semesters=[]

onMount(async() => {
    await db.collection('course-by-sem').get()
    .then(doc =>{
        semesters=[]
        //id=[]
        doc.array.forEach(element => {

            semesters.push(element.data())
            semesters=semesters
            
        });

        semesters=semesters
    });
}
)
</script>


<svelte:head>
	<title>Admin: Add Course</title>
</svelte:head>

<select name="semester">
<option></option>
</select>

