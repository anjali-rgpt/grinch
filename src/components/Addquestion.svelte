<script>
  export let semester, courseCode, quiz;
  let question, points, optiona, optionb, optionc, optiond, correct

  const adder = () => {
    if (correct == null || question == null || optiona == null || optionb == null || optionc == null || optiond ==
      null) {
      alert("Form not complete");
    } else if (correct != optiona && correct != optionb && correct != optionc && correct != optiond) {
      alert("Correct answer doesn't match any of the options");
    } else if (points < 1.0) {
      alert("Invalid points.");
    } else {
      db.collection('course-by-sem').doc(String(semester)).collection('courselist').doc(courseCode).collection(
          'quizzes').doc(quiz).collection('questions').add({
          Question: question,
          Points: toString(points),
          Correct: correct,
          OptionA: optiona,
          OptionB: optionb,
          OptionC: optionc,
          OptionD: optiond,
        })
        .then(function (doc) {
          console.log('Question added!')
          question = null, points = null, optiona = null, optionb = null, optionc = null, optiond = null, correct =
            null
        });
    }
  }
</script>

<style>
  .card {
    margin-top: 1rem;
    border-radius: 7px;
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
      <input bind:value={question} class="input" id="question" type="text">
    </p>
    <div class="card-header-icon">
      Points:<input class="input" id="points" bind:value={points} type="number">
    </div>
  </div>

  <div class="card-content">
    <div class="level">
      <div class="level-item">
        <input class="input" bind:value={optiona} id="optiona" placeholder="Option 1" type="text">
      </div>
      <div class="level-item">
        <input class="input" bind:value={optionb} id="optionb" placeholder="Option 2" type="text">
      </div>
      <div class="level-item">
        <input class="input" bind:value={optionc} id="optionc" placeholder="Option 3" type="text">
      </div>
      <div class="level-item">
        <input class="input" bind:value={optiond} id="optiond" placeholder="Option 4" type="text">
      </div>
    </div>
  </div>
  <div class="card-footer">
    <div class="card-footer-item">
      <input type="text" bind:value={correct} id="correct" class="input is-rounded constrict"
        placeholder="Correct answer">
      <div class="button is-rounded" id="addbutton" on:click={adder}>Add</div>
    </div>
  </div>
</div>