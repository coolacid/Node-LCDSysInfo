var usb = require('usb')
var dev

// A lot of this is modified from https://github.com/dangardner/pylcdsysinfo/blob/master/pylcdsysinfo.py

pub_TextColours = {
    GREEN       : 1,
    YELLOW      : 2,
    RED         : 3,
    WHITE       : 5,
    CYAN        : 6,
    GREY        : 7,
    BLACK       : 13,
    BROWN       : 15,
    BRICK_RED   : 16,
    DARK_BLUE   : 17,
    LIGHT_BLUE  : 18,
    ORANGE      : 21,
    PURPLE      : 22,
    PINK        : 23,
    PEACH       : 24,
    GOLD        : 25,
    LAVENDER    : 26,
    ORANGE_RED  : 27,
    MAGENTA     : 28,
    NAVY        : 30,
    LIGHT_GREEN : 31
}

pub_BackColours = {
    BLACK       : 0x0000,
    BLUE        : 0x001f,
    GREEN       : 0x07e0,
    CYAN        : 0x07ff,
    BROWN       : 0x79e0,
    DARK_GREY   : 0x7bef,
    LIGHT_GREY  : 0xbdf7,
    RED         : 0xf800,
    PURPLE      : 0xf81f,
    ORANGE      : 0xfbe0,
    GOLD        : 0xfd20,
    YELLOW      : 0xffe0,
    WHITE       : 0xffff
}

pub_TextLines = {
    LINE_1      : 0x01,
    LINE_2      : 0x02,
    LINE_3      : 0x04,
    LINE_4      : 0x08,
    LINE_5      : 0x10,
    LINE_6      : 0x20,
    ALL         : 0x3f
}

function pub_init() {
    dev = usb.findByIds(0x16c0, 0x05dc)
    if (dev == undefined) {
        console.log("USB Device not found")
        return 0
    }
    dev.open();
}

function pub_debug() {
    console.log(dev)
}

function pub_text_on_line(line, text_string, colour) {
    text_length = text_string.length;
    dev.controlTransfer(0x40, 24, text_length, (line - 1) * 256 + colour, new Buffer(text_string + String.fromCharCode(0)))
}

function pub_clear_lines(lines, colour) {
    dev.controlTransfer(0x40, 26, lines, colour, new Buffer(""))
}

module.exports = {
    init: function init() {
        pub_init();
    },
    dd: function dd() {
        pub_debug();
    },
    text_on_line: function text_on_line(line, text, colour) {
        pub_text_on_line(line, text, colour);
    },
    clear_lines: function clear_lines(lines, colour) {
        pub_clear_lines(lines, colour);
    },
    TextColours: pub_TextColours, BackColours: pub_BackColours, TextLines: pub_TextLines
};



