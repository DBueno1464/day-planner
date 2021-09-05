const timeDisplayEl = $('#time-display');
const midBlockEl = $('.mid-block');



const displayTime = () => {
    let rightNow = moment().format('MMM DD, YYYY [at] hh:mm:ss a');
    timeDisplayEl.text(rightNow);
};

const colorCodeTimeBlocks = () => {

    const arrayOfTimeBlocks =
        ["#9-am-block",
            "#10-am-block",
            "#11-am-block",
            "#12-pm-block",
            "#1-pm-block",
            "#2-pm-block",
            "#3-pm-block",
            "#4-pm-block",
            "#5-pm-block"
        ];

    var now = new Date();
    var nowHours = now.getHours();

    for (var i = 0; i < nowHours - 9; i++) {
        let red = $(arrayOfTimeBlocks[i]).addClass("pastBlocks").removeClass("upcomingBlocks currentBlock");
    };

    for (var j = nowHours - 9; j < nowHours - 8; j++) {
        let neutral = $(arrayOfTimeBlocks[j]).addClass("currentBlock").removeClass("upcomingBlocks pastBlocks");
    };

    for (var k = nowHours - 8; k < arrayOfTimeBlocks.length; k++) {
        let green = $(arrayOfTimeBlocks[k]).addClass("upcomingBlocks").removeClass("pastBlocks currentBlock");
    };

};

$('.btn').on("click", function addEntry () {

    // Go from button to textarea
    let entryText = $(this).siblings('.description').val();
    // from button to id of whole card
    let time = $(this).siblings('.mid-block').attr('id');

    setTimeout(console.log(time, entryText), 3000);

    localStorage.setItem(time, entryText);

});

$("#9am .description").val(localStorage.getItem("9-am-block"));
$("#10am .description").val(localStorage.getItem("10-am-block"));
$("#11am .description").val(localStorage.getItem("11-am-block"));
$("#12pm .description").val(localStorage.getItem("12-pm-block"));
$("#1pm .description").val(localStorage.getItem("1-pm-block"));
$("#2pm .description").val(localStorage.getItem("2-pm-block"));
$("#3pm .description").val(localStorage.getItem("3-pm-block"));
$("#4pm .description").val(localStorage.getItem("4-pm-block"));
$("#5pm .description").val(localStorage.getItem("5-pm-block"));

colorCodeTimeBlocks();

setInterval(displayTime, 1000);
