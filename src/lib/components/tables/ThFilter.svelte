<script>
    export let handler;
    export let filterBy;
    export let align = 'left'
    export let comparator = null

    let value = ''

    handler.on('clearFilters', () => value = '')
</script>

<th class="border-r mm_border_color {$$props.class ?? ''}">
    <input
        style:text-align={align}
        type="text"
        placeholder={handler.i18n.filter}
        class="px-2"
        spellcheck="false"
        bind:value
        on:input={() => handler.filter(value, filterBy, comparator)}
    />
</th>

<style>
    input {
        width: 100%;
        height: 24px;
        border: none;
        text-align: left;
        background: inherit;
        outline: none;
        border-radius: 0;
        font-size: 14px;
        font-family: Arial, Helvetica, sans-serif;
    }
    input::placeholder {
        /* color: #bdbdbd; */
        font-style: italic;
        font-size: 12px;
    }
    input:focus {
        outline: none;
        border: none;
    }
</style>
