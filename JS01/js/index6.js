console.log($(".box").width());
console.log($(".box").innerWidth());
console.log($(".box").outerWidth());
console.log($(".box").outerWidth(true));
console.log($(".box").position().left);
console.log($(".box").offset());

var gap = [];
$(".page").each(function (i) {
    gap[i] = $(this).position().top;
});
console.log(gap);

$(".navs > li").click(function () {
    var n = $(this).data("page")
    $("html, body").stop().animate({"scrollTop": gap[n]+"px"}, 1000);
});

