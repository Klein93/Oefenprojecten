
$(".dropdownbtn").click(function () {
    $(".dropdown-content").toggleClass("dropdown-content-visible")
});

$(".heading-menu-item").hover(function () {
    $(this).css("color", "grey");

},
    function () {
        $(this).css("color", "black");
    });