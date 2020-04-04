$(document).ready(function () {
    displayBlocks()
    var todayDate = moment().format('dddd' + ", " + 'LL');
    document.getElementById("currentDay").innerHTML = todayDate;
    var saveComment = localStorage.getItem('9AM')
    $("#9AM").val(saveComment)
})
// add rows/hr/text/button to page
var times = ["9AM", "10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM"];
function displayBlocks() {
    times.forEach(function (time) {
        var $row = $(`<div class="row time-block"></div>`)
        var $hour = $("<div>").addClass("hour").text(`${time}`)
        var $text = $(`<textarea id='${time}'class = 'description col-9'>`)
        var $saveBtn = $("<button>").addClass("saveBtn col-1")
        $row.append($hour)
        .append($text)
        .append($saveBtn
            .append($("<i class='fas fa-save'>")))
            $(".container").append($row)
        })
        markTimes();
    }
    function markTimes() {
        let hours = $(".time-block")
        console.log(hours)
        hours.each(function (i, timeBlock) {
            //console.log(timeBlock)// this thing is html element
            decideTime($(this))// $(this) is the jquery element
        })
    }
    const now = 13
    function decideTime(tB) {
        const htmlELEM = tB.children(".hour")[0]
        const hourNow = htmlELEM.innerHTML.split("")[0]
        console.log(hourNow)
        let temporality;
        if (hourNow < now) {
            temporality = "past"
        } else if (hourNow > now) {
        temporality = "future"
    } else {
        temporality = "present"
    }
    (tB.children("textarea")[0].classList.add(temporality))
}
// show hours in different times (past,present and future)
$(document).on("click", ".saveBtn", function () {
    var comment = $(this).siblings('.description')
    localStorage.setItem('9AM', comment.val())
});


// click fuction for save btn 
//save info to local storage:
//JSON.parse/stringify