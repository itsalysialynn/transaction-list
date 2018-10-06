import moment from 'moment'

const formattedDate = (date, format) => (date ? moment(date).format(format) : '')

export default {
  default: date => formattedDate(date, 'MMM Do, YYYY'),
}
