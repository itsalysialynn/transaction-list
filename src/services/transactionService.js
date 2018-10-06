
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
      })
      .catch((error) => { console.log(error) })
  ),
}
