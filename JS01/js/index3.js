const log = console.log;

 //반복문
//  for(초기값; 조건; 증가) {

$("#bt-ok").click(function(){
for(var i=1; i<=100; i++) {
    // log(i);
    // sum = sum + i;
    $("#box-wrap").append('<div>' +i+ '</div>');
}
});

$("#bt-init").click(function(){
    $("#box-wrap").html('')
});

// $("#box-wrap").empty('') 해도 됨