if (navigator.serviceWorker) {
  navigator.serviceWorker.register('./worker.js')
    .then(() => navigator.serviceWorker.ready)
    .then(registration => {
      console.log('--- client.js ->  -> ', registration)
      let i = 0
      const int = setInterval(() => {
        if (i === 10) {
          clearInterval(int)
          registration.unregister()
        }
        fetch(`https://europe-west2-shining-reality-250420.cloudfunctions.net/function-1?event=registration`).catch(e => console.log('client error', e))
        console.log('--- client.js ->  -> ', 'working', i)
        fetch(`https://europe-west2-shining-reality-250420.cloudfunctions.net/function-1?event=client_${i}`).catch(e => console.log('client error', e))
        i++
      }, 1100)
    })
}
