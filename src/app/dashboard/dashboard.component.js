import dashboard from './dashboard.component.html';
import style from './dashboard.component.scss';

$("app-dashboard").replaceWith('<div id="dashboard">' + dashboard + '</div>');
var html = '<style>' + style + '</style>';
$("#dashboard").append(html);
