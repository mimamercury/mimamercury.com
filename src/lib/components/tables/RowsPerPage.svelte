<script>
    export let handler;
    export let small = false

    const rowsPerPage = handler.getRowsPerPage()

    const options = [5, 10, 20, 50, 100]
</script>

<aside class="text-xs dark:text-white {$$props.class ?? ''}">
    {#if !small}
        <span>{handler.i18n.show}</span>
    {/if}
    <select bind:value={$rowsPerPage} on:change={() => handler.setPage(1)} class="m-2 h-8 p-1 pl-2 pr-6 text-xs text-black dark:text-white dark:bg-surface-900 select-text bg-inherit">
        {#each options as option}
            <option value={option}>
                {option}
            </option>
        {/each}
    </select>
    {#if !small}
        <span>{handler.i18n.entries}</span>
    {/if}
</aside>

<style>
    aside {
        display: flex;
        /* justify-content: flex-start; */
        align-items: center;
        /* height: 20px; */
    }
</style>
