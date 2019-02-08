//var : ES5    ES5 문법  둘다 자바스크립트인데 버전이 다른 것
//let : ES6    ES6 문법

// var a = 6;
// var a = 7; 반복해서 선언 가능
// let a = 6;
// let a = 7; 반복해서 선언 불가능
const log = console.log;
var Man = {
    weight: 75,
    height: 175,
    name: "홍길동",
    gender: "M",
    run: function () {
        log("뛴다");
    },
    eat: function () {
        log("먹는다");
    }

};

Man.name = "홍길순"
log(Man.name); //홍길동을 불러오면 이름이니까
Man.run(); //뛴다.

function b() {
    log("B!");
}

b();

(function b() {
    log("B!");
}()); //즉시실행


var Human = (function () {
    function Human(_name) {
        this.name = _name;
    }
    Human.prototype.eat = function (food) {
        log(this.name + "이(가) " + food + "을(를) 먹습니다.");
    }
    return Human;
}());
//var Human 객체를 만들겠습니다(선언). = 그안에 함수를 넣었습니다. (function()그함수를 실행하겠습니다.{}());
//function Human() {} 객체 생성자를 넣는다. 생성자 안에서 속성 설정

// ES6
/*
class Human {
    constructor() {

    }
    function eat() {

    }
}
*/

var hong = new Human("홍길동");
log(hong);
log(hong.name);
hong.eat("양꼬치");

var kilsun = new Human("홍길순");
log(kilsun);
log(kilsun.name);
kilsun.eat("회");

/* jQuery를 쓰는 이유
1. 선택자가 편하다.
2. animate, fadeIn, fadeOutt, slideDown, slideUp, hide, show
*/


// $("#bt1").click(function(){

// });
// document.querySelector("#bt1").addEventListener

// $("#box1").click(function () {
//     $(this).animate({
//         "width": "100%", "height":"100%"
//     }, 2000);
// });

$("#box1").click(function () {
    $(this).animate({
        "width": "100%"
    }, 2000, function () {
        $(this).animate({
            "height": "100%"
        }, 1000);

    });
});

// var n = 0;
// var interval = window.setInterval(function () {
//     log(n++);
// }, 500);

// $("#music > li").each(function () {
//     var li = $(this);
//     var interval = setInterval(function () {
//         var per = Math.floor(Math.random() * 70) + 30;
//         li.css({
//             "height": per + "%"
//         });
//     }, 100);

// });


var Equalizer = (function () {
    function Equalizer(parent, bgColor, size) {
        var obj = this;
        var html = '<ul>'
        for (var i = 1; i <= 5; i++) html += '<li></li>';
        html += '</ul>';
        // var html = `
        // <ul>
        // <li>1</li>
        // <li>2</li>
        // <li>3</li>
        // <li>4</li>
        // <li>5</li>
        // </ul>
        // `;
        this.parent = parent;
        this.bgColor = bgColor;
        this.size = size;
        this.parent.append(html);
        this.ul = this.parent.chilren("ul");
        this.li = this.ul.chilren("li");
        this.ul.css({
            "width":this.size+"px",
            "height":this.size+"px",
            "position":"relative"
        });
        this.li.css({
            "background-color":this.bgColor,
            "width":"20%",
            "position":"absolute",
            "bottom":"0"

        });
        //this.li[0].style.backgroundColor = this.bgColor; 자바스크립트로 쓸 때
        // $(".eq").append()
        // $(".eq")[0].innerHTML 
        //     document.getElementsByClassName("eq").innerHTML 
    }
    return Equalizer;
});

var eq = new Equalizer($(".eq"), "#f90", 200);

// <
// ul id = "music"
// class = "clear" >
//     <
//     li > < /li> <
//     li > < /li> <
//     li > < /li> <
//     li > < /li> <
//     li > < /li> <
//     /ul>