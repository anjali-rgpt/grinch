<script>
  
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
      <input class="input" type="text">
    </p>
    <div class="card-header-icon">
      Points:<input class="input" type="number">
    </div>
  </div>

  <div class="card-content">
    <div class="level">
      <div class="level-item">
        <input class="input" placeholder="Option 1" type="text">
      </div>
      <div class="level-item">
        <input class="input" placeholder="Option 2" type="text">
      </div>
      <div class="level-item">
        <input class="input" placeholder="Option 3" type="text">
      </div>
      <div class="level-item">
        <input class="input" placeholder="Option 4" type="text">
      </div>
    </div>
  </div>
  <div class="card-footer">
    <div class="card-footer-item">
      <input type="text" name="correct" class="input is-rounded constrict" placeholder="Correct answer" >
      <div class="button is-rounded">Add</div>
    </div>
  </div>
</div>