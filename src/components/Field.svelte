<script>
  export let question, points, optionone, optiontwo, optionthree, optionfour, correct;
</script>

<div class="card">
  <div class="card-header">
    <p class="card-header-title">{question}</p>
  </div>
  <div class="card-content">
    
    <label class="checkbox">
      <input type="checkbox" value="{optionone}">
      {optionone}
    </label>
    <label class="checkbox">
      <input type="checkbox" value="{optiontwo}">
      {optiontwo}
    </label>
    <label class="checkbox">
      <input type="checkbox" value="{optionthree}">
      {optionthree}
    </label>
    <label class="checkbox">
      <input type="checkbox" value="{optionfour}">
      {optionfour}
    </label>
  </div>
</div>