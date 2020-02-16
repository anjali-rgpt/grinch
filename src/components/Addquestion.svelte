<script>
  let question, points, optiona, optionb, optionc, optiond, correct

  const adder = () => {
    db.collection("course").doc('15CSE313').collection('quizzes').doc('q1').collection('questions').add({
        Question: question,
        Points: points,
        Correct: correct,
        OptionA: optiona,
        OptionB: optionb,
        OptionC: optionc,
        OptionD: optiond,
      })
      .then(function (doc) {
        console.log('Question added!')
        question = null, points = null, optiona = null, optionb = null, optionc = null, optiond = null, correct = null
      });
  }
</script>

<style>
  .card {
    margin-top: 1rem;
  }

  .input {
    margin-right: 0.5rem;
    margin-left: 0.5rem;
  }

  .constrict {
    max-width: 150px;
  }
</style>

<div class="card">
  <div class="card-header">
    <p class="card-header-title">
      Question:
      <input bind:value={question} class="input" type="text">
    </p>
    <div class="card-header-icon">
      Points:<input class="input" bind:value={points} type="number">
    </div>
  </div>

  <div class="card-content">
    <div class="level">
      <div class="level-item">
        <input class="input" bind:value={optiona} placeholder="Option 1" type="text">
      </div>
      <div class="level-item">
        <input class="input" bind:value={optionb} placeholder="Option 2" type="text">
      </div>
      <div class="level-item">
        <input class="input" bind:value={optionc} placeholder="Option 3" type="text">
      </div>
      <div class="level-item">
        <input class="input" bind:value={optiond} placeholder="Option 4" type="text">
      </div>
    </div>
  </div>
  <div class="card-footer">
    <div class="card-footer-item">
      <input type="text" bind:value={correct} name="correct" class="input is-rounded constrict"
        placeholder="Correct answer">
      <div class="button is-rounded" on:click={adder}>Add</div>
    </div>
  </div>
</div>