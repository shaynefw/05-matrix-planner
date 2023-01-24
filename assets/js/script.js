setInterval(function(){
    let dateAndTime = dayjs().format('dddd, MMMM D YYYY, h:mm:ss a');
    $('#todaysDate').text(dateAndTime);
  }, 1000);

  $("li").addClass("d-flex justify-content-between");
