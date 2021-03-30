let countPrimeNumbers = _ => {
  let num = 0

  for (let i = 2; i <= 100; i++) {
      let prime = true

      for (let j = 2; j < i; j++) {
          if (i % j === 0) {
              prime = false
          }
      }
      if (prime) {
          num += 1
      }
  }
  return num
}

let now = performance.now()

for (let time = 0; time < 100; time++) {
  countPrimeNumbers()
}

let finish = performance.now()
console.log(`Execution time of printing countPrimeNumbers was ${finish - now} milliseconds.`)
