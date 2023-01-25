//the below function is pulling the current date and time from the dayjs library.
setInterval(function () {
  let dateAndTime = dayjs().format('dddd, MMMM D YYYY, h:mm:ss a')
  $('#todaysDate').text(dateAndTime) //selecting id and filling in the current date and time.
}, 1000)

$('li').addClass('d-flex justify-content-between') //each li will have the bootstrap classes attahced.

//below function gives the save button abiblity to save what the user types in the input box.

$('.saveEntryBtn').on('click', function () {
  let inputValue = $(this).prev().val() //stores typed value into var
  let indexList = $(this).closest('li').index() //finds the closest li
  localStorage.setItem(indexList, inputValue)

  if (inputValue) {
    let time = $(this).closest('li').find('.timeHour').text()
    let hour = parseInt(time.substring(0, 2))
    let currentHour = dayjs().hour()
    let inputBox = $(this).prev()

    if (hour < currentHour) {
      inputBox.addClass('past')
    } else if (hour == currentHour) {
      inputBox.addClass('present')
    } else {
      inputBox.addClass('future')
    }
  }
})

// when the save button is double clicked the text inside input box, and local storage will be deleted.

$('.saveEntryBtn').on('dblclick', function () {
  let inputBox = $(this).prev()
  inputBox.removeClass('past present future')
  inputBox.val('')
  localStorage.removeItem($(this).closest('li').index())
})

// the below funtion grabs the value stored in the local storage and applies it to the corresponding input field, also it uses the hour (i.e 13(1PM)) of the input and current time to add the past, present, and future classes to the input field background.

$(document).ready(function () {
  $('.plannerList li').each(function (indexList) {
    let storedValue = localStorage.getItem(indexList)
    let inputBox = $(this).find('.plannerEntry')
    inputBox.val(storedValue)

    if (storedValue) {
      let time = $(this).find('.timeHour').text()
      let hour = parseInt(time.substring(0, 2))
      let currentTime = dayjs()
      let enteredTime = dayjs().set('hour', hour)

      if (hour < currentTime.hour()) {
        inputBox.addClass('past')
      } else if (hour == currentTime.hour()) {
        inputBox.addClass('present')
      } else {
        inputBox.addClass('future')
      }
    }
  })
})
