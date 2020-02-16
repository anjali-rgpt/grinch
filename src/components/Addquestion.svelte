<script>
  export let question, points, optionone, optiontwo, optionthree, optionfour, correct;
</script>

<style>
  .card {
    margin-top: 1rem;
  }

  .checkbox {
    margin-right: 1.5rem;
  }
</style>

<div class="card">
  <div class="card-header">
    <p class="card-header-title">{question}<input type="text"></p>
    <div class="card-header-icon">
      {points} <input type="number">
    </div>
  </div>
  <div class="card-content">

    <div class="level">
      <div class="level-item">
        <label class="checkbox">
          <input type="checkbox" value="{optionone}">
          {optionone}<input type="text">
        </label>
      </div>
      <div class="level-item">
        <label class="checkbox">
          <input type="checkbox" value="{optiontwo}">
          {optiontwo}<input type="text">
        </label>
      </div>
      <div class="level-item">
        <label class="checkbox">
          <input type="checkbox" value="{optionthree}">
          {optionthree}<input type="text">
        </label>
      </div>
      <div class="level-item">
        <label class="checkbox">
          <input type="checkbox" value="{optionfour}">
          {optionfour}<input type="text">
        </label>
      </div>
    </div>

  </div>
</div>