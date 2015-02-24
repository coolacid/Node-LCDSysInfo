var lcdsysinfo = require("./lcdsysinfo.js")

lcdsysinfo.init();
// lcdsysinfo.dd();
lcdsysinfo.clear_lines(lcdsysinfo.TextLines.ALL,lcdsysinfo.BackColours.BLACK);
//lcdsysinfo.text_bk_colour(lcdsysinfo.BackColours.BLACK);
lcdsysinfo.text_on_line(1, "Jason  ", lcdsysinfo.TextColours.GREY);
//lcdsysinfo.text_bk_colour(lcdsysinfo.BackColours.GREEN);
lcdsysinfo.text_on_line(2, "was here.", lcdsysinfo.TextColours.GREY);;
