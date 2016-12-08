buf = new Buffer(26);
for (var i = 0 ; i < 26 ; i++) {
    buf[i] = i + 97;
}

console.log( buf.toString('ascii'));       // outputs: abcdefghijklmnopqrstuvwxyz
console.log( buf.toString('ascii',0,5));   // outputs: abcde
console.log( buf.toString('utf8',0,5));    // outputs: abcde
console.log( buf.toString(undefined,0,5)); // encoding defaults to 'utf8', outputs abcde

var json = buf.toJSON(buf);

console.log(json);

var buffer1 = new Buffer('TutorialsPoint ');
var buffer2 = new Buffer('Simply Easy Learning');
var buffer3 = Buffer.concat([buffer1,buffer2]);
console.log("buffer3 content: " + buffer3.toString());

var buffer4 = new Buffer('ABC');
var buffer5 = new Buffer('ABCD');
var result = buffer1.compare(buffer2);

if(result < 0) {
    console.log(buffer4 +" comes before " + buffer5);
}else if(result == 0){
    console.log(buffer4 +" is same as " + buffer5);
}else {
    console.log(buffer4 +" comes after " + buffer5);
}

var buffer6 = new Buffer(3);
buffer1.copy(buffer6);
console.log("buffer6 content: " + buffer6.toString());

var buffer7 = new Buffer('TutorialsPoint');

//slicing a buffer
var buffer8 = buffer7.slice(0,9);
console.log("buffer8 content: " + buffer8.toString())

var buffer = new Buffer('TutorialsPoint');

//length of the buffer
console.log("buffer length: " + buffer.length);;