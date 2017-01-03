**Node.js - Console**

Node.js console is a global object and is used to print different levels of messages to stdout and stderr. There are built-in methods to be used for printing informational, warning, and error messages.

It is used in synchronous way when the destination is a file or a terminal and in asynchronous way when the destination is a pipe.

**Console Methods**
Following is a list of methods available with the console global object.

S.No.	Method & Description
1 console.log([data][, ...])

Prints to stdout with newline. This function can take multiple arguments in a printf()-like way.

2 console.info([data][, ...])

Prints to stdout with newline. This function can take multiple arguments in a printf()-like way.

3 console.error([data][, ...])

Prints to stderr with newline. This function can take multiple arguments in a printf()-like way.

4 console.warn([data][, ...])

Prints to stderr with newline. This function can take multiple arguments in a printf()-like way

5 console.dir(obj[, options])

Uses util.inspect on obj and prints resulting string to stdout.

6 console.time(label)

Mark a time.

7 console.timeEnd(label)

Finish timer, record output.

8 console.trace(message[, ...])

Print to stderr 'Trace :', followed by the formatted message and stack trace to the current position.

9 console.assert(value[, message][, ...])

Similar to assert.ok(), but the error message is formatted as util.format(message...).

**Example**
Let us create a js file named main.js with the following code −
```javascript
console.info("Program Started");

var counter = 10;
console.log("Counter: %d", counter);

console.time("Getting data");
//
// Do some processing here...
//
console.timeEnd('Getting data');

console.info("Program Ended")
```

Now run the main.js to see the result −
```
node main.js
```

Verify the Output.
```
Program Started
Counter: 10
Getting data: 0ms
Program Ended
```
