
export default {
  get: page => (
    fetch(`http://resttest.bench.co/transactions/${page}.json`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.json()
        }
        return response.json().then((err) => { console.log(err) })
      })
      .catch((error) => { console.log(error) })
  ),
}