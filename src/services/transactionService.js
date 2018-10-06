import { toast } from 'react-toastify'

export default {
  get: page => (
    fetch(`http://resttest.bench.co/transactions/${page}.json`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => {
        if (response.ok && response.status >= 200 && response.status < 300) {
          return response.json()
        }
        toast(response.statusText || response.status)
      })
      .catch((error) => { toast(error) })
  ),
}
