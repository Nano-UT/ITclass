document.write('10進数の15は2進数ではのチェック結果：');if(document.getElementById('q3_1').textContent == '1111') {document.write('OK');} else {document.write('NG');}document.write('<br>');
document.write('10進数の33は2進数ではのチェック結果：');if(document.getElementById('q3_2').textContent == '100001') {document.write('OK');} else {document.write('NG');}document.write('<br>');
document.write('2進数では1100 + 0101 =のチェック結果：');if(document.getElementById('q3_3').textContent == '10001') {document.write('OK');} else {document.write('NG');}document.write('<br>');
document.write('2進数では1111 + 1000 =のチェック結果：');if(document.getElementById('q3_4').textContent == '10111') {document.write('OK');} else {document.write('NG');}document.write('<br>');
document.write('2進数の0110111100000101は16進数ではのチェック結果：');if(document.getElementById('q3_5').textContent.toLowerCase() == '6f05') {document.write('OK');} else {document.write('NG');}document.write('<br>');
document.write('2進数の0010111111100100は16進数ではのチェック結果：');if(document.getElementById('q3_6').textContent.toLowerCase() == '2fe4') {document.write('OK');} else {document.write('NG');}document.write('<br>');
document.write('16進数のCAFEは10進数ではのチェック結果：');if(document.getElementById('q3_7').textContent == '51966') {document.write('OK');} else {document.write('NG');}document.write('<br>');

var text_encoder = new TextEncoder();
var name = document.getElementById('q3_8_name').textContent;
document.write(name+'の文字コードのチェック<br>');
var ary_u8 = text_encoder.encode(name);
var strs = document.getElementById('q3_8_utf8').textContent.split(" ");
console.log(strs);
var strnum = [];
for(var i=0;i<strs.length;i++) strnum.push(parseInt(strs[i],16));
console.log(strnum);
var ok = true;
if(strnum.length == ary_u8.length) {
 console.log("length ok");
 for(var i=0;i<strs.length;i++) if (strnum[i] != ary_u8[i]) ok = false;
 if(ok) document.write("utf8はOK<br>"); else document.write("utf8のコードが不一致<br>");
} else if (strnum.length < ary_u8.length) {
 console.log("short");
 for(var i=0;i<strs.length;i++) if (strnum[i] != ary_u8[i]) ok = false;
 if(ok) document.write("utf8は短いが途中は一致<br>"); else document.write("utf8は短く途中も不一致<br>");
} else document.write("utf8は長い<br>");
