import app from './app.component.html';
import style from './app.component.scss';

$("app-root").replaceWith('<div id="app">' + app + '</div>');
var html = '<style>' + style + '</style>';
$("#app").append(html);

$(document).ready(function () {
    $("#app #outlet>div").hide();
    $("#dashboard").show();
});

$("#app .sidebar ul li a").click(function () {
    $("#app #outlet>div").hide();
    $("#app .sidebar ul li a").removeClass("active");
    $(this).addClass("active");
    switch ($(this).find("p").text().trim()) {
        case "Dashboard":
            $("#dashboard").show();
            break;
        case "Manage Customers":
            $("#manage-customers").show();
            break;
        case "Manage Items":
            $("#manage-items").show();
            break;
    }
});
