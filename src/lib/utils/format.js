import format from 'date-fns/format/index.js'

export function format_time (date) {
    return format(new Date(date), 'h:mm a')
}

export function format_date (date) {
    return format(new Date(date), 'MMMM d, yyyy')
}
