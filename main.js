test3 = setInterval(function () {
  let today = new Date()
  let h = today.getHours()
  let m = today.getMinutes()
  let s = today.getSeconds()
  m = checkTime(m)
  s = checkTime(s)
  h = militaryTime(h)
  h = checkTime(h)
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

rgb = [0, 1, 2]
rgb.map((item) => item + 2)

// let r = 0
// let g = 0
// let b = 0
// for (r = 0; r <= 255; r++) {
//   for (g = 0; g <= 255; g++) {
//     for (b = 0; b <= 255; b++) {
//       console.log(r, g, b)
//     }
//   }
// }

// let timerId = setInterval(() => alert("tick"), 2000)

//make interval that +5 every second on array

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
//
