<script>

</script>

<style>
main {
    min-height: 100vh;
}
.is-half {
    height: 50vh;
}
.center {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
}
</style>

<main>

<div class="columns is-multiline">
    <div class="column has-background-primary is-half">
        <div class="center">
            <button class="button is-large is-dark is-rounded">New Quiz</button>
        </div>
        
    </div>
    <div class="column has-background-dark is-half">
    <div class="center">
            <button class="button is-large is-primary is-rounded">Manage Quizzes</button>
        </div>
        
    </div>
    <div class="column has-background-dark is-half">
        <div class="center">
            <button class="button is-large is-primary is-rounded">Performance Reports</button>
        </div>
    </div>
    <div class="column has-background-primary is-half">
        <div class="center">
           <a href="/adminCourse"> <button class="button is-large is-dark is-rounded">Admin</button></a>
        </div>
    </div>
</div>

</main>