 function date()
  {
    let d = new Date();
    let mon = d.getMonth() + 1;
    let year = d.getFullYear();
    let datee = d.getDate();

    $(".days").html(datee);
    $(".month").html(mon);
    $(".year").html(year);
  }

  function time(){
    let t = new Date();
    let hr = t.getHours();
    let min = t.getMinutes();
    let mins = `${min <10 ?  "0" : ""}${min}`;
    
    let sec = t.getSeconds();
    let secs = `${sec <10 ?  "0" : ""}${sec}`;
    
    let ampm = '';
    
    if (hr < 12) {
        ampm = 'AM';
    }
    else {
        ampm = 'PM';
    }
    
    let semi_colon = ':';
    
    $(".hour").html(hr);
    $(".minutes").html(mins);
    $(".seconds").html(secs);
    $(".ampm").html(ampm);
    $(".colon").html(semi_colon);

 

}


$(".toggle").click(function(){
    $(".hidden").toggleClass("hide");
    $(".year,.month,.days").toggleClass("hide");
  
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