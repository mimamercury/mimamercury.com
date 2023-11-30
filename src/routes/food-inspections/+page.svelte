<script>
    import { format_date } from '$lib/utils/format.js'
    import { DataHandler, DataTable, Th, ThFilter } from '$lib/components/tables/index.js'

    export let data;
    const { food_inspections_table: table } = data

    const columns = [
        { key: 'establishment', label: 'Establishment' },
        { key: 'total_points', label: 'Total Points' },
        { key: 'inspection_date', label: 'Inspection Date' },
        { key: 'partial_address', label: 'Location' },
    ]

    const handler = new DataHandler(table.rows, { rowsPerPage: 50 })
    const rows = handler.getRows()
    handler.sortDesc('total_points')
</script>

<div class="prose dark:prose-invert mb-10">
    <h1>Food safety inspections</h1>
    <p>Inspections from the last 90 days in Thurston County. You can search, sort and filter to see locations with high or low total points or find your favorite restaurant. Click a row to see more details.</p>
    <p>A lower score is better. Zero points is the goal.</p>
</div>

<div class="font-sans text-xs">Last updated: {format_date(table.metadata.date)}</div>
<DataTable {handler}>
    <table class="font-sans border mm_border_color">
        <thead class="font-semibold">
            <tr>
                {#each columns as column}
                    {#if column.key === 'inspection_date'}
                    <Th {handler} orderBy="{(row) => new Date(row.inspection_date).getTime()}">{column.label}</Th>
                    {:else}
                    <Th {handler} orderBy="{column.key}">{column.label}</Th>
                    {/if}
                {/each}
            </tr>
            <tr>
                {#each columns as column}
                    <ThFilter {handler} filterBy="{column.key}" />
                {/each}
            </tr>
        </thead>
        <tbody>
            {#each $rows as row}
                <tr class="hover:bg-surface-100 dark:hover:bg-surface-800">
                    {#each columns as column}
                        <td class="border mm_border_color h-full">
                            <a href="/food-inspections/{row.id}" class="block w-full h-full p-2">
                                {row[column.key]}
                            </a>
                        </td>
                    {/each}
                </tr>
            {/each}
        </tbody>
    </table>
</DataTable>
<p class="not-prose text-sm mt-10">
    <a href="https://www.co.thurston.wa.us/apps/eh-food-inspections/index.asp">
        Data Source: Thurston County Public Health & Social Services Department
    </a>
</p>
