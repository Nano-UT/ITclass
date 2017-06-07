function decide(k,n) {
    if (k>n) {
	return 1;
    } else if (k<n) {
	return -1;
    } else {
	return 0;
    }
}
var distr = false;
var accum = false;
var sum = 0.0;
function generate(max) {
    if (distr == false) {
	distr = new Array(max+1);
	accum = new Array(max+1);
	accum[0] = 0.0
	for (var i=1; i<=max; i++) {
	    sum += (distr[i] = 1.0/i);
	    accum[i] = sum;
	}
    }
    var x = sum*Math.random();
    for(var i = 1; i<=max; i++)	if (x <= accum[i]) return i;
}
function go() {
    var max = 666; // 1からmaxまでから当てる
    var times = max+1; // 繰り返しの最大数
    var n = generate(max);
    var count = 0; // チェックの回数
    reset(max); // maxを知らせる
    for(var i = 1; i<=times; i++) {
	var k = bid(); count++; // kはpのチェック
	var r = decide(k,n); // どちら側か決定
	if (r == 0) return count; // 当たった場合
	notify(k,r); // 結果を知らせる。
    }
    return count; // 見つけられず
}
function test() {
    var url="http://lecture.ecc.u-tokyo.ac.jp/~yamaguch/cgibin/numberGuess2Register.cgi?comment="
    var result=id();
    var total = 0; // チェック数の総計
    var count = 1000; // 対戦数
    for (var i = 1; i <= count; i++) {
	var g = go(); // 一回の実行
	total += g;
    }
    result = result+" <2> "+total/count;
    window.open(url+result,'_result2');
    document.open();
    document.write(result+"<br>");
    document.close();
}
