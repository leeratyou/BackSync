
if(navigator.serviceWorker) {
  navigator.serviceWorker.register('./worker.js')
    .then(() => navigator.serviceWorker.ready)
    .then(registration => {
      fetch('https://europe-west2-shining-reality-250420.cloudfunctions.net/function-1?event=registartion')
    })
}
// let i = 0
// let interval = setInterval(() => {
//   if (i === 20) clearInterval(interval)
//   fetch('https://192.168.88.8:3000/?event=registartion')
//   i++
// },1000)

// console.log('--- client.js ->  -> ', navigator)
