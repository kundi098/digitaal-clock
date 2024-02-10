// let clearInterval;
 function date()
  {
    let d = new Date();
// let tarik = $(".clock_area").html(d);
let h = d.getMonth() + 1;
$(".month").html(h);
let year = d.getFullYear();
$(".year").html(year);
let dat = d.getDate();
$(".days").html(dat);
  }

  function time(){

      let j = new Date();
      let i =new Date();


      let live = j.toLocaleTimeString();
let string = live.split(":");
let live_2 = i.toLocaleTimeString().split(' ');


// let zero = live[0]; //
let minutes = live[1]; //:
// let seconds = live[2];  //1
// let first = live[3];   //2
let second= live[4];   //:
// let third = live[6];    //3        
// let forth = live[7];   //4

let timeComponents = live_2[0].split(':');
let hour = timeComponents[0];   //12
let min = timeComponents[1];
let sec = timeComponents[2];
let ampm = live_2[1];//am/pm

// $(".zero").html(zero);
$(".hour").html(hour);
$(".first").html(minutes);
// $(".minutes").html(seconds);

$(".minutes").html(min);

// $(".second").html(first);
$(".third").html(second);
// $(".seconds").html(third);    

$(".seconds").html(sec)

// $(".forth").html(forth);
$(".fifth").html(ampm);


 

// success 
// this code can also print time but without " : "
// u just need to comment zero call can add year class where hour class is present 
// let timeComponents = live_2[0].split(':');
//     let hour = timeComponents[0];
//     let minutes = timeComponents[1];
//     let seconds = timeComponents[2];
//     let ampm = live_2[1];

//     // $(".zero").html(zero);
//     $(".hour").html(hour);
//     $(".minutes").html(minutes);
//     $(".seconds").html(seconds);
//     $(".fifth").html(ampm);
}


$(".toggle").click(function(){
    $(".hidden").toggleClass("hide");
    $(".year,.month,.days").toggleClass("hide");
    // $(".year").show("year");
    // $(".month").show("month");
    // $(".days").show("days");

  
    if($(".hidden").hasClass("hide")){
        $(".invisible").toggleClass("invis")
        date();
        clearInterval(timeInterval);
    }
    else{
     timeInterval=setInterval(time , 1000);
        time();
    }
});






$(".analog").click(function(){
    if($(".gayab").toggleClass("gayab_hoja").hasClass("gayab_hoja")){
        
        $(".invisi").removeClass("invisible");
    }
    else {
        $(".invisi").addClass("invisible");

    };
});
let hours = $(".hours");
let minute = $(".min");
let second = $(".sec");

function analog(){
    let date = new Date();
    let hr = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();

    let hh = 30*hr + min/2 ;
    let mm = 6*min;
    let ss = 6*sec;

   
    hours.css("transform", `rotate(${hh}deg)`)
    minute.css("transform",`rotate(${mm}deg)`); 
    second.css("transform",`rotate(${ss}deg)`); 
}

setInterval(analog, 1000);