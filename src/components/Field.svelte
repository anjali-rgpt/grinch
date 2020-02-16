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
    <p class="card-header-title">{question}</p>
    <div class="card-header-icon">
      {points} marks
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
      <div class="button is-outlined is-rounded is-danger">Delete</div>
    </div>
  
  </div>
    
  </div>
</div>