<script>
    import Newsletter from "$components/Newsletter.svelte"
</script>

<slot />

<hr class="divider w-72 mx-auto border-surface-200 dark:border-surface-700 my-12">

<div class="prose dark:prose-invert text-center">
    <h3 class="font-bold">Not yet subscribed to the newsletter?</h3>
    <Newsletter label={false} />
</div>

