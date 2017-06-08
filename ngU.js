var x;
var i;
var MinAns;
var MaxAns;
var aveage;
var befi;
function reset(m){
    MinAns = 1;
    MaxAns = m;
    var exp = 0;
    average = 0;
    for (var s = 1; s <= MaxAns; s++){
      average += (1/s);
    }
    exp = (MaxAns - MinAns + 1) / average;
    i = Math.round(exp);
    befi = i;
}
function bid() {
    if (i > befi){
      MinAns = i;
    }else{
      MaxAns = i;
    }
    var exp = 0;
    average = 0;
    for (var s = MinAns; s <= MaxAns; s++){
      average += (1/s);
    }
    exp = (MaxAns - MinAns + 1) / average;
    i = Math.round(exp);
    befi = i;
    return i;
}
function notify(k,r) {
    if (r == 1) {
        i--;
    } else if (r == -1) {
        i++;
    } else { // r == 0
    }
}
function id() {
    return "7989303491";
}
