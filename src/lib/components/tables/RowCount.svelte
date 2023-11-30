<script>
    export let handler;
    export let small = false
    const rowCount = handler.getRowCount()
</script>

<aside class={$$props.class ?? ''}>
    {#if small}
        {#if $rowCount.total > 0}
            <b>{$rowCount.start}</b>-
            <b>{$rowCount.end}</b>/
            <b>{$rowCount.total}</b>
        {:else}
            {handler.i18n.noRows}
        {/if}
    {:else if $rowCount.total > 0}
        {@html handler.i18n.rowCount
            .replace('{start}', `<b>${$rowCount.start}</b>`)
            .replace('{end}', `<b>${$rowCount.end}</b>`)
            .replace('{total}', `<b>${$rowCount.total}</b>`)}
    {:else}
        {handler.i18n.noRows}
    {/if}
</aside>

<style>
    aside {
        line-height: 32px;
    }
</style>
