var parse = require('csv-parse/lib/sync');
function checkval(aVal) {
    parseInt(aVal);
    if (aVal < 0 || aVal > 255) {
        throw true;
    }
}

function parseBG(input) {
    var header = "red,green,blue\n";
    var records = parse(header + input, {
        auto_parse: true,
        columns: true,
        trim: true
    });
    checkval(records[0].red);
    checkval(records[0].green);
    checkval(records[0].blue);
    return records[0];

}

function parseAll(input) {
    var header = "red,green,blue,value\n";
    var records = parse(header + input, {
        auto_parse: true,
        columns: true,
        trim: true
    });
    checkval(records[0].red);
    checkval(records[0].green);
    checkval(records[0].blue);
    return records[0];

}

function makeDialString(defaults, payload) {
    var msgRed = defaults.red;
    var msgGreen = defaults.green;
    var msgBlue = defaults.blue;
    var msgVal = 0;

    try {
        var parsedVals = parseAll(payload);
        msgRed = parsedVals.red;
        msgGreen = parsedVals.green;
        msgBlue = parsedVals.blue;
        msgVal = parsedVals.value;
    } catch (err) {
        if (!isNaN(parseInt(payload))) {
            msgVal = parseInt(payload);
        }
    }
    return 'dial/' + msgRed + "/" + msgGreen + "/" + msgBlue + "/" + msgVal;

}

module.exports.parseBG = parseBG;
module.exports.makeDialString = makeDialString;


//records.should.eql([{ key_1: 'value 1', key_2: 'value 2' }]);
