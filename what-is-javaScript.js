/*

1995 - JavaScript 1.0, Netscape Navigator 2.0

- Mocha, later called LiveSript was born
- Developed for Netscape Navigator 2
- Intention was to have it on server and client
	- "LiveWire" on server
- Partnered with Sun MicroSystems to ensure timely launch
- LiveScript -> JavaScript due to media buzz around Java
	- Naturally, confusion occurred
- Authored by Brian Eich

Netscape Navigator 3.0

- JS 1.1
- MS put more efort into IE
	- IE 3.0 released soon-after NN 3.0
	- JavaScript? No, silly - JScript!

August 16th, 1996

- IE 3.0 is released
- var browserWar = new BrowserWar();
- Two implementations of JavaScript existed
	- NN and IE
	- Time to standardize

1997 - Submission to ECMA

- var ECMA = "European Computer Manufacturers Association"
- JS 1.1 was submitted
	- Tech. Comm. 39 (TC39) was tasked with standardization
- ECMA-262 defined ECMAScript (ek-ma-script)

1998 - ISO/IEC

- International Organization for Standardization and 
	International Electrotechnical Commission (ISO/IEC) 
	- Adopted ECMAScript as standard (ISO/IEC-16262)

JavaScipt !== ECMAScript

- JS adds more functionality than the spec language
- JS Core is essentially ECMAScript (ES)
- With the addition of:
	- DOM (Document Object Model)
	- BOM (Browser Object Model)
- ES is not tied to web browsers
	- No I/O methods

What does ECMA-262* Define?

- Syntax
- Types
- Statements
- Keywords
- Reserved Words
- Operators
- Objects

* JavaScript is an implementation, but so is Adobe's ActionScript and MS's JScript

ECMASript: Editions, not Versions

- ES 1 - Initial proposal by Netscap
- ES 2 - More for ISO/IEC-16262 
- ES 3 - Added regex, new controls, try/catch, preparing for internationalization
- ES 4 - Almost full overhaul of language - prompted creation of ES 3.1, ES 4 was abandoned
	- ES 3.1 eventually became ES 5
- ES 5 - Strict Mode! Getters/Setters! JSON Object! More in-line with ES 3! Better object reflection!
- ES 5.1 - Fully aligned with ES 3
- Future fun times - ES "Harmony"
	- Classes
	- A module system
	- Optional type annotations and static typing, probably using a structural type system
	- Generators and iterators
	- Destructuring assignment
	- Algebraic data types

*/
"use strict"