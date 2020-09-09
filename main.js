test3 = setInterval(() => {
  let today = new Date()
  let h = today.getHours()
  let m = today.getMinutes()
  let s = today.getSeconds()
  m = checkTime(m)
  s = checkTime(s)
  h = militaryTime(h)
  document.getElementById("clock").innerHTML = `${h} : ${m} : ${s}`
}, 1000)

function checkTime(i) {
  if (i < 10) {
    i = "0" + i
  }
  return i
}

function militaryTime(a) {
  if (a > 12) {
    a = a - 12
  }
  return a
}
// SOL1

// const today = new Date()
// const h = today.getHours()
// const m = today.getMinutes(function (a) {
//   isSingle = a < 10
//   console.log(a)

//   if (isSingle) {
//     return (a = "0" + a)
//   }
// })
// let s = today.getSeconds()

// mTime = `${h} : ${m} : ${s}`

// const currentTime = setInterval(() => {
//   document.getElementById("clock").innerHTML = mTime
// }, 1000)

// SOL1

// function startTime() {
//   const today = new Date()
//   let h = today.getHours()
//   let m = today.getMinutes()
//   let s = today.getSeconds()
//   m = checkTime(m)
//   s = checkTime(s)
//   document.getElementById("clock").innerHTML = `${h}:${m}:${s}`
//   let t = setTimeout(startTime, 500)
// }

// function checkTime(i) {
//   if (i < 10) {
//     i = "0" + i
//   }
//   return i
// }
