**Node.js - Process**

The process object is a global object and can be accessed from anywhere. There are several methods available in a process object.

**Process Events**
The process object is an instance of EventEmitter and emits the following events −

S.No.	Event & Description
1	exit

Emitted when the process is about to exit. There is no way to prevent the exiting of the event loop at this point, and once all exit listeners have finished running, the process will exit.

2	beforeExit

This event is emitted when node empties its event loop and has nothing else to schedule. Normally, the node exits when there is no work scheduled, but a listener for 'beforeExit' can make asynchronous calls, and cause the node to continue.

3	uncaughtException

Emitted when an exception bubbles all the way back to the event loop. If a listener is added for this exception, the default action (which is to print a stack trace and exit) will not occur.

4	Signal Events

Emitted when the processes receives a signal such as SIGINT, SIGHUP, etc.

**Example**
Create a js file named main.js with the following code for listening for exit event −
```javascript
process.on('exit', function(code) {

   // Following code will never execute.
   setTimeout(function() {
      console.log("This will not run");
   }, 0);

   console.log('About to exit with code:', code);
});
console.log("Program Ended");
```

Now run the main.js to see the result −
```
$ node main.js
```

Verify the Output.
```
Program Ended
About to exit with code: 0
```

**Exit Codes**

Node normally exits with a 0 status code when no more async operations are pending. There are other exit codes which are described below −

Code	Name & Description
1 Uncaught Fatal Exception

There was an uncaught exception, and it was not handled by a domain or an uncaughtException event handler.

2 Unused

reserved by Bash for built in misuse.

3 Internal JavaScript Parse Error

The JavaScript source code internal in Node's bootstrapping process caused a parse error. This is extremely rare, and generally can only happen during the development of Node itself.

4 Internal JavaScript Evaluation Failure

The JavaScript source code internal in Node's bootstrapping process failed to return a function value when evaluated. This is extremely rare, and generally can only happen during the development of Node itself.

5 Fatal Error

There was a fatal unrecoverable error in V8. Typically, a message will be printed to stderr with the prefix FATAL ERROR.

6 Non-function Internal Exception Handler

There was an uncaught exception, but the internal fatal exception handler function was somehow set to a non-function, and could not be called.

7 Internal Exception Handler Run-Time Failure

There was an uncaught exception, and the internal fatal exception handler function itself threw an error while attempting to handle it.

8 Unused

9 Invalid Argument

Either an unknown option was specified, or an option requiring a value was provided without a value.

10 Internal JavaScript Run-Time Failure

The JavaScript source code internal in Node's bootstrapping process threw an error when the bootstrapping function was called. This is extremely rare, and generally can only happen during the development of Node itself.

11 Invalid Debug Argument

The --debug and/or --debug-brk options were set, but an invalid port number was chosen.
```
>128
Signal Exits
```

If Node receives a fatal signal such as SIGKILL or SIGHUP, then its exit code will be 128 plus the value of the signal code. This is a standard Unix practice, since exit codes are defined to be 7-bit integers, and signal exits set the high-order bit, and then contain the value of the signal code.

**Process Properties**
Process provides many useful properties to get better control over system interactions.

S.No.	Property & Description
1 stdout

A Writable Stream to stdout.

2 stderr

A Writable Stream to stderr.

3 stdin

A Writable Stream to stdin.

4 argv

An array containing the command line arguments. The first element will be 'node', the second element will be the name of the JavaScript file. The next elements will be any additional command line arguments.

5 execPath

This is the absolute pathname of the executable that started the process.

6 execArgv

This is the set of node-specific command line options from the executable that started the process.

7 env

An object containing the user environment.

8 exitCode

A number which will be the process exit code, when the process either exits gracefully, or is exited via process.exit() without specifying a code.

9 version

A compiled-in property that exposes NODE_VERSION.

10 versions

A property exposing the version strings of node and its dependencies.

11 config

An Object containing the JavaScript representation of the configure options that were used to compile the current node executable. This is the same as the "config.gypi" file that was produced when running the ./configure script.

12 pid

The PID of the process.

13 title

Getter/setter to set what is displayed in 'ps'.

14 arch

What processor architecture you're running on: 'arm', 'ia32', or 'x64'.

15 platform

What platform you're running on: 'darwin', 'freebsd', 'linux', 'sunos' or 'win32'

16 mainModule

Alternate way to retrieve require.main. The difference is that if the main module changes at runtime, require.main might still refer to the original main module in modules that were required before the change occurred. Generally it's safe to assume that the two refer to the same module.

**Example**
Create a js file named main.js with the following code −
```javascript
// Printing to console
process.stdout.write("Hello World!" + "\n");

// Reading passed parameter
process.argv.forEach(function(val, index, array) {
   console.log(index + ': ' + val);
});

// Getting executable path
console.log(process.execPath);

// Platform Information
console.log(process.platform);
```

Now run the main.js to see the result −
```
$ node main.js
```

Verify the Output while running your program on Linux machine −
```
Hello World!
0: node
1: /web/com/1427106219_25089/main.js
/usr/bin/node
linux
```

**Methods Reference**
Process provides many useful methods to get better control over system interactions.

S.No	Method & Description
1 abort()

It causes the node to emit an abort. It causes the node to exit and generate a core file.

2 chdir(directory)

Changes the current working directory of the process or throws an exception if that fails.

3 cwd()

Returns the current working directory of the process.

4 exit([code])

Ends the process with the specified code. If omitted, exit uses the 'success' code 0.

5 getgid()

Gets the group identity of the process. This is the numerical group id, not the group name.This function is available only POSIX platforms (i.e. not Windows, Android).

6 setgid(id)

Sets the group identity of the process. (See setgid(2)). It accepts either a numerical ID or a groupname string. If a groupname is specified, this method blocks while resolving it to a numerical ID.This function is available only POSIX platforms (i.e. not Windows, Android).

7 getuid()

Gets the user identity of the process. This is the numerical id, not the username.This function is only available on POSIX platforms (i.e. not Windows, Android).

8 setuid(id)

Sets the user identity of the process (See setgid(2)). It accepts either a numerical ID or a username string. If a username is specified, this method blocks while resolving it to a numerical ID.This function is available only POSIX platforms (i.e. not Windows, Android).

9 getgroups()

Returns an array with the supplementary group IDs. POSIX leaves it unspecified if the effective group ID is included, but node.js ensures it always is. This function is available only on POSIX platforms (i.e. not Windows, Android).

10 setgroups(groups)

Sets the supplementary group IDs. This is a privileged operation, which implies that you have to be at the root or have the CAP_SETGID capability. This function is available only on POSIX platforms (i.e. not Windows, Android).

11 initgroups(user, extra_group)

Reads /etc/group and initializes the group access list, using all the groups of which the user is a member. This is a privileged operation, which implies that you have to be at the root or have the CAP_SETGID capability. This function is available only on POSIX platforms (i.e. not Windows, Android).

12 kill(pid[, signal])

Send a signal to a process. pid is the process id and signal is the string describing the signal to send. Signal names are strings like 'SIGINT' or 'SIGHUP'. If omitted, the signal will be 'SIGTERM'.

13 memoryUsage()

Returns an object describing the memory usage of the Node process measured in bytes.

14 nextTick(callback)

Once the current event loop turn runs to completion, call the callback function.

15 umask([mask])

Sets or reads the process's file mode creation mask. Child processes inherit the mask from the parent process. Returns the old mask if mask argument is given, otherwise returns the current mask.

16 uptime()

Number of seconds Node has been running.

17 hrtime()

Returns the current high-resolution real time in a [seconds, nanoseconds] tuple Array. It is relative to an arbitrary time in the past. It is not related to the time of day and therefore not subject to clock drift. The primary use is for measuring performance between intervals.

**Example**

Create a js file named main.js with the following code −
```javascript
// Print the current directory
console.log('Current directory: ' + process.cwd());

// Print the process version
console.log('Current version: ' + process.version);

// Print the memory usage
console.log(process.memoryUsage());
```

Now run the main.js to see the result −
```
$ node main.js
```

Verify the Output while running your program on Linux machine −
```
Current directory: /web/com/1427106219_25089
Current version: v0.10.33
{ rss: 11505664, heapTotal: 4083456, heapUsed: 2157704 }
```
