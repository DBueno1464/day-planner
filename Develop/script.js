const timeDisplayEl = $('#time-display');
const midBlockEl = $('.mid-block');
const timeBlockIDs = ["9-am-block", "10-am-block", "11-am-block", "12-pm-block", "1-pm-block", "2-pm-block", "3-pm-block", "4-pm-block", "5-pm-block"]
const nineAM = $('9-am-block');
const tenAM = $('10-am-block');
const elevenAM = $('11-am-block');
const twelveAM = $('12-pm-block');
const onePM = $('1-pm-block');
const twoPM = $('2-pm-block');
const threePM = $('3-pm-block');
const fourPM = $('4-pm-block');
const fivePM = $('5-pm-block');


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
    console.log(nowHours);

    for ( var i = 0; i < nowHours - 9; i++){
        let red = $(arrayOfTimeBlocks[i]).addClass("pastBlocks").removeClass("upcomingBlocks currentBlock");
        console.log(i, arrayOfTimeBlocks[i],"for loop 1", red);
    };

    for ( var j = nowHours - 9; j < nowHours - 8; j++) {
        let neutral = $(arrayOfTimeBlocks[j]).addClass("currentBlock").removeClass("upcomingBlocks pastBlocks");
        console.log(j, arrayOfTimeBlocks[j],"for loop 2", neutral);
    };

    for ( var k = nowHours - 8; k < arrayOfTimeBlocks.length; k++){
        let green = $(arrayOfTimeBlocks[k]).addClass("upcomingBlocks").removeClass("pastBlocks currentBlock");
        console.log(k, arrayOfTimeBlocks[k],"for loop 3", green);
    };

};

colorCodeTimeBlocks();

setInterval(displayTime, 1000);
