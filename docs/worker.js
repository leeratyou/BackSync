let i = 0
const int = setInterval(() => {
  if (i === 10) clearInterval(int)
  console.log('--- worker.js ->  -> ', 'working', i)
  fetch(`https://europe-west2-shining-reality-250420.cloudfunctions.net/function-1?event=worker_${i}`).catch(e => console.log('worker error', e))
  i++
}, 1000)
