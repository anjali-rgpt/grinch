<script>
export let title, content, actions;

</script>

<div class="card">
    <header class="card-header">
        <p class="card-header-title">
            {title}
        </p>
    </header>
    <div class="card-content">
        {content}
    </div>
    <footer class="card-footer">
        {#each actions as action}
            <a class="card-footer-item" href="#!">{action}</a>
        {/each}
    </footer>
</div>

<style>
.card {
    width: 100%;
    margin-top: 1rem;
    margin-bottom: 1rem;
}
</style>