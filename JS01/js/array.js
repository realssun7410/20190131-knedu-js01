//배열 - array

var num = new Array();
num[0] = 10;
num[1] = 16;
num[2] = 18;
num[3] = 22;
num[4] = 24;
num[5] = 32;

var num2 = [10, 16, 18, 22, 24, 32];
var num3 = new Array(10, 16, 18, 22, 24, 32);
var num3 = new Array(10, 16, function () {}, 22, 24, 32);

for (var i = 0; i < num.length; i++) {
    console.log(num[i]);
}

for (var i in num) {
    console.log(num[i]);
}

// for(var i=0; i<100; i++) {
//     $("#boxes").append('<div id="box'+i+'"></div>');
//     //console.log($('<div id="box'+i+'"></div>').appendTo("#boxes"));
//     //앞에 놈을 뒤에 붙일 때는 appednTO
// }


var box = [];
for (var i = 0; i < 100; i++) {
    box[i] = $('<div id="box' + i + '">' + i + '</div>').appendTo("#boxes");
}

for (var i in box) {
    box[i].click(function () {
        $(this).css({
            "width": "100px",
            "height": "100px",
            "font-size": "50px",
            "background-color":"pink"
        });
    });
}

for (var i = 0; i < 100; i++) {
    $("#boxes").append('<div class="box">' + i + '번</div>');
}
$("box").click(function () {
    $(this).css({
        "width": "100px",
        "height": "100px",
        "font-size": "50px"
    });
});




//void형 : return값이 없는
function a() {
    console.log("hi~");
}

// return
function b() {
    console.log("hi2~");
    return "OK";
}

a();
b();

console.log(a());
console.log(b());