/********run Number */
function animateNumber(finalNumber, duration = 5000, startNumber = 0, callback) {
    let currentNumber = startNumber
    const interval = window.setInterval(updateNumber, 17)
    function updateNumber() {
      if (currentNumber >= finalNumber) {
        clearInterval(interval)
      } else {
        let inc = Math.ceil(finalNumber / (duration / 17))
        if (currentNumber + inc > finalNumber) {
          currentNumber = finalNumber
          clearInterval(interval)
        } else {
          currentNumber += inc
        }
        callback(currentNumber)
      }
    }
}
//1
animateNumber(230, 8000, 0, function (number) {
    const formattedNumber = number.toLocaleString()
    document.getElementById('count-number1').innerText = formattedNumber
})
//2
animateNumber(789, 6000, 0, function (number) {
    const formattedNumber = number.toLocaleString()
    document.getElementById('count-number2').innerText = formattedNumber
})
//3
animateNumber(580, 6000, 0, function (number) {
    const formattedNumber = number.toLocaleString()
    document.getElementById('count-number3').innerText = formattedNumber
})
//4
animateNumber(129, 9000, 0, function (number) {
    const formattedNumber = number.toLocaleString()
    document.getElementById('count-number4').innerText = formattedNumber
})
