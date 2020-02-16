<script>
  export let question, points, optionone, optiontwo, optionthree, optionfour, correct, idn;

  const remove = (idn) => {
    db.collection("course").doc('15CSE313').collection('quizzes').doc('q1').collection('questions').doc(idn).delete()
    .then(() => {
      console.log("Question successfully deleted!");
    }).catch(error => {
      console.error("Error removing question: ", error);
    });
  }
</script>

<style>
  .card {
    margin-top: 1rem;
    border-radius: 7px;
  }

  .checkbox {
    margin-right: 1.5rem;
  }
</style>

<div class="card">
  <div class="card-header">
    <p class="card-header-title">{question}</p>
    <div class="card-header-icon">
      {points} mark(s)
    </div>
  </div>
  <div class="card-content">

    <div class="level">
      <div class="level-item">
        <label class="checkbox">
          <input type="checkbox" value="{optionone}">
          {optionone}
        </label>
      </div>
      <div class="level-item">
        <label class="checkbox">
          <input type="checkbox" value="{optiontwo}">
          {optiontwo}
        </label>
      </div>
      <div class="level-item">
        <label class="checkbox">
          <input type="checkbox" value="{optionthree}">
          {optionthree}
        </label>
      </div>
      <div class="level-item">
        <label class="checkbox">
          <input type="checkbox" value="{optionfour}">
          {optionfour}
        </label>
      </div>
    </div>

  </div>

  <div class="card-footer">
    <div class="card-footer-item">

      <div class="buttons">
        <div class="button is-outlined is-rounded is-warning">Edit</div>
        <div class="button is-outlined is-rounded is-danger" on:click={remove(idn)}>Delete</div>
      </div>

    </div>

  </div>
</div>