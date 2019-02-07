/*
Method(동작)
 alert("문자열");
 focus(""); 내가 지정한 객체에 포커스를 준다
 submit();
 if()
 for()
Propertie
 value
 var val = obj(객체).value : 값을 받아온다.
 obj.value = 10 : 값을 대입한다.
 length
*/

const log = console.log;

function sendForm() {
    var f = document.join_form;  
    // var f = document.getElementsByName("join-form") 이때는 문자열로 들어가는 거라서 - 상관없음
    // var uid = docuent.join_form.uid; 아래와 같은 말
    var uid = f.uid;
    var pw1 = f.pw1;
    var pw2 = f.pw2;
    var uname = f.uname;
    var email1 = f.email1;
    var email2 = f.email2;
    var tel1 = f.tel1;
    var tel2 = f.tel2;
    var tel3 = f.tel3;
    var gender = f.gender;
    var favorite = f.favorite;
    var mystory = f.mystory;

// log(uid.value);

    if(uid.value == "") {
        alert("아이디를 입력하세요.");
        uid.focus();
        return;
    }
    
    if(uid.value.length < 8) {
        alert("아이디는 8글자 이상이어야 합니다.");
        uid.focus();
        return;
    }
    if(pw1.value == "" || pw2.value == "") {
        alert("패스워드를 입력하세요.");
        pw1.focus();
        return;
    }
    if(pw1.value != pw2.value) {
        alert("패스워드가 일치하지 않습니다.")
        pw1.value = "";
        pw2.value = "";
        pw1.focus();
        return;
    }
    if(uname.value == "") {
        alert("이름을 입력하세요");
        uname.focus();
        return;
    }
    f.submit();
    
}