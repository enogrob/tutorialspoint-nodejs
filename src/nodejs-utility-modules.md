**Node.js - Utility Modules**

There are several utility modules available in Node.js module library. These modules are very common and are frequently used while developing any Node based application.

S.No.	Module Name & Description

**1	    OS Module**
Provides basic operating-system related utility functions.
Node.js os module provides a few basic operating-system related utility functions. This module can be imported using the following syntax.
```javascript
var os = require("os")
```

*Methods*
```
S.No.	Method & Description
1	    os.tmpdir()

Returns the operating system's default directory for temp files.

2	    os.endianness()

Returns the endianness of the CPU. Possible values are "BE" or "LE".

3	    os.hostname()

Returns the hostname of the operating system.

4	    os.type()

Returns the operating system name.

5     os.platform()

Returns the operating system platform.

6     os.arch()

Returns the operating system CPU architecture. Possible values are "x64", "arm" and "ia32".

7     os.release()

Returns the operating system release.

8     os.uptime()

Returns the system uptime in seconds.

9     os.loadavg()

Returns an array containing the 1, 5, and 15 minute load averages.

10    os.totalmem()

Returns the total amount of system memory in bytes.

11    os.freemem()

Returns the amount of free system memory in bytes.

12    os.cpus()

Returns an array of objects containing information about each CPU/core installed: model, speed (in MHz), and times (an object containing the number of milliseconds the CPU/core spent in: user, nice, sys, idle, and irq).

13    os.networkInterfaces()

Get a list of network interfaces.
```

*Properties*
```
S.No.	Property & Description
1     os.EOL

A constant defining the appropriate End-of-line marker for the operating system.
```

Example
The following example demonstrates a few OS methods. Create a js file named main.js with the following code.
```javascript
var os = require("os");

// Endianness
console.log('endianness : ' + os.endianness());

// OS type
console.log('type : ' + os.type());

// OS platform
console.log('platform : ' + os.platform());

// Total system memory
console.log('total memory : ' + os.totalmem() + " bytes.");

// Total free memory
console.log('free memory : ' + os.freemem() + " bytes.");
```

Now run the main.js to see the result −
```
$ node main.js
```

Verify the Output.
```
endianness : LE
type : Linux
platform : linux
total memory : 25103400960 bytes.
free memory : 20676710400 bytes.
```

**2	    Path Module**
Provides utilities for handling and transforming file paths.

Node.js path module is used for handling and transforming file paths. This module can be imported using the following syntax.
```javascript
var path = require("path")
```

*Methods*
```
S.No.	Method & Description
1     path.normalize(p)

Normalize a string path, taking care of '..' and '.' parts.

2     path.join([path1][, path2][, ...])

Join all the arguments together and normalize the resulting path.

3     path.resolve([from ...], to)

Resolves to an absolute path.

4     path.isAbsolute(path)

Determines whether the path is an absolute path. An absolute path will always resolve to the same location, regardless of the working directory.

5     path.relative(from, to)

Solve the relative path from from to to.

6     path.dirname(p)

Return the directory name of a path. Similar to the Unix dirname command.

7     path.basename(p[, ext])

Return the last portion of a path. Similar to the Unix basename command.

8     path.extname(p)

Return the extension of the path, from the last '.' to end of string in the last portion of the path. If there is no '.' in the last portion of the path or the first character of it is '.', then it returns an empty string.

9     path.parse(pathString)

Returns an object from a path string.

10    path.format(pathObject)

Returns a path string from an object, the opposite of path.parse above.
```

*Properties*
```
S.No.	Property & Description
1     path.sep

The platform-specific file separator. '\\' or '/'.

2     path.delimiter

The platform-specific path delimiter, ; or ':'.

3     path.posix

Provide access to aforementioned path methods but always interact in a posix compatible way.

4     path.win32

Provide access to aforementioned path methods but always interact in a win32 compatible way.
```

Example
Create a js file named main.js with the following code −
```javascript
var path = require("path");

// Normalization
console.log('normalization : ' + path.normalize('/test/test1//2slashes/1slash/tab/..'));

// Join
console.log('joint path : ' + path.join('/test', 'test1', '2slashes/1slash', 'tab', '..'));

// Resolve
console.log('resolve : ' + path.resolve('main.js'));

// extName
console.log('ext name : ' + path.extname('main.js'));
```

Now run the main.js to see the result −
```
$ node main.js
```

Verify the Output.
```
normalization : /test/test1/2slashes/1slash
joint path : /test/test1/2slashes/1slash
resolve : /web/com/1427176256_27423/main.js
ext name : .js
```

**3	    Net Module**
Provides both servers and clients as streams. Acts as a network wrapper.

**4	   DNS Module**
Provides functions to do actual DNS lookup as well as to use underlying operating system name resolution functionalities.

**5	   Domain Module**
Provides ways to handle multiple different I/O operations as a single group.
