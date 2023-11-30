<script>
    export let handler;
    export let orderBy;
    export let align = 'left'

    const identifier = orderBy?.toString()
    const sort = handler.getSort()
</script>

<th
    on:click={() => handler.sort(orderBy)}
    class:sortable={orderBy}
    class:active={$sort.identifier === identifier}
    class="{$$props.class ?? ''} px-2 text-sm"
>
    <div
        class="flex"
        style:justify-content={align === 'left' ? 'flex-start' : align === 'right' ? 'flex-end' : 'center'}
    >
            <slot />
        <span class:asc={$sort.direction === 'asc'} class:desc={$sort.direction === 'desc'} />
    </div>
</th>

<style>
    th {
        /* background: inherit; */
        white-space: nowrap;
        user-select: none;
        border-bottom: 1px solid #e0e0e0;
    }
    th.sortable {
        cursor: pointer;
    }
    th strong {
        white-space: pre-wrap;
        font-size: 13.5px;
        line-height: 16px;
    }
    th.sortable div.flex {
        padding: 0;
        display: flex;
        align-items: center;
        height: 100%;
    }
    th.sortable span {
        padding-left: 8px;
    }
    th.sortable span:before,
    th.sortable span:after {
        border: 4px solid transparent;
        content: '';
        display: block;
        height: 0;
        width: 0;
    }
    th.sortable span:before {
        border-bottom-color: #e0e0e0;
        margin-top: 2px;
    }
    th.sortable span:after {
        border-top-color: #e0e0e0;
        margin-top: 2px;
    }
    th.active.sortable span.asc:before {
        border-bottom-color: #9e9e9e;
    }
    th.active.sortable span.desc:after {
        border-top-color: #9e9e9e;
    }
    th:not(.sortable) span {
        visibility: hidden;
    }
</style>
