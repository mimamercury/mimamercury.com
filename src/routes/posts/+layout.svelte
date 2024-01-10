<script>
    import Newsletter from "$components/Newsletter.svelte";
</script>

<div class="prose dark:prose-invert"><slot /></div>

<hr class="divider w-72 mx-auto border-surface-200 dark:border-surface-700 my-12">

<div class="prose dark:prose-invert text-center">
    <h2 class="font-bold">Get local news that matters.</h2>
    <p class="italic">Join our weekly newsletter.</p>
    <Newsletter label={false} />
    <p class="text-sm italic"><a href="/newsletter">Read recent issues of the newsletter.</a></p>
</div>
