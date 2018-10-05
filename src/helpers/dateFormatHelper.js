import moment from 'moment'

const formattedDate = (date, format) => (date ? moment(date).format(format) : '')

const dateFormatHelper = {
  default: date => formattedDate(date, 'MMM Do, YYYY'),
}
export default dateFormatHelper