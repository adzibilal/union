// format time to readeble for human
import moment from 'moment'

export function diffForHumans(inpdate: string): string {
    const date = new Date(inpdate)
    const now = moment()
    const diff = moment.duration(now.diff(date))

    const seconds = diff.asSeconds()
    const minutes = diff.asMinutes()
    const hours = diff.asHours()
    const days = diff.asDays()

    if (seconds < 60) {
        return `${Math.floor(seconds)} seconds ${seconds > 1 ? 'ago' : ''}`
    } else if (minutes < 60) {
        return `${Math.floor(minutes)} minutes ${minutes > 1 ? 'ago' : ''}`
    } else if (hours < 24) {
        return `${Math.floor(hours)} hours ${hours > 1 ? 'ago' : ''}`
    } else if (days < 1) {
        return `${Math.floor(days)} days ${days > 1 ? 'ago' : ''}`
    } else {
        // format = Tuesday, April 23 2024
        return moment(date).format('dddd, MMMM DD YYYY')
    }
}

// remove tag html from string
export function removeTagHTML(str: string): string {
    return str.replace(/(<([^>]+)>)/gi, '')
}
