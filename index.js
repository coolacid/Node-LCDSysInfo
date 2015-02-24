var lcdsysinfo = require("./lcdsysinfo.js")

lcdsysinfo.init();
// lcdsysinfo.dd();
lcdsysinfo.clear_lines(lcdsysinfo.TextLines.ALL,lcdsysinfo.BackColours.BLACK);
lcdsysinfo.text_on_line(1, "Jason was here.", lcdsysinfo.TextColours.GREY);
