// 
// SCOPE & CONTEXT
//

// ## Scope

// Free Globals - 
// more! https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects
console.log(document);
console.log(window);

// The Basics
var global = 5*5;  // Not defined in a function at all, in global namespace
noVarGlobal = 6*6; // No 'var' in front = global.  Keep this in mind, always use 'var'.

// Creating Scope - The function
function doThis() {
    var localVar = 4*4;
    var a = b = localVar; // Anti-pattern
    noVarGlobal2 = 2*2;
}

doThis();
console.log(localVar); 		// ReferenceError - localVar is only available to doThis()
console.log(noVarGlobal2); 	// Implied global
console.log("B: "+b);       // Another Implied Global

// Only Functions create scope - loop controls/conditionals do not
var x = 0;
while(x<3) {
    var y = x; // y is a global, as only functions create scope
    x++;
}

console.log("Y: "+y); // Loops and logic operators do not create scope

/* A word (or many) on globals
 *
 * - Globals are what they say they are - global to all JavaScript you write for a project
 * - Accessible anywhere, which is handy.
 * - Main concern: 3rd party conflicts
 * - Keep variables scoped in their own functions/widgets
 */

// Variable Hoisting - not an "official" term
var myVar = "global";
function hoisterFunc() {
	console.log(myVar); // undefined - myVar declaration below is "hoisted to top"
						// even though value is not actually set
	var myVar = "local";
	console.log(myVar); // "local"
}


//
// ## Context (What is 'this'?!) - More: http://mzl.la/Lf8uza
//

//---------------------------------------
// Global Context

var a = "yea!";
console.log(this); // Global object
console.log(window.a); // "yea!"


//---------------------------------------
// Function Context

function thisTest () {
    return this;
}

thisTest() === window; // Global Object

// Strict Mode - http://mzl.la/MB2fmu
function strictFunc() {
    "use strict";
    return this;
}

strictFunc() === undefined;

window.strictFunc() === window; // proper use with strict mode


//---------------------------------------
// Object Context

// Ex 1 - in an object
var o = {
	"attr": 1,
	myAttr: function() {
		return this.attr;
	}
}

console.log(o.myAttr()); // 1

// Ex 2 - Same result, function is no longer in-line on object
var o = {prop: 37};

function independent() {
  return this.prop;
}

o.f = independent;

console.log(o.f()); // logs 37

// Ex 3 - 'b' is a member of 'o', so 'this' refers to the most immediate reference 
o.b = {g: independent, prop: 42};
console.log(o.b.g()); // 42

// Ex 4 - on Prototype chain (We'll talk about Prototypes, I promise)
var o = {f:function(){ return this.a + this.b; }};
var p = Object.create(o);
p.a = 1;
p.b = 4;

console.log(p.f()); // 5 - refers to 'o'

// Ex 5 - on a Constructor
function C() { // Constructor names should be camel-case with first letter capitalized
	this.a = 30;
}
var o = new C();
console.log(o.a); // 30

// Ex 5.1
function C2() {
	this.a = 32; // We are returning our own object, so 'this' gets discarded.  Poor little 'this' :(
	return {a:45};
}
o = new C2();
console.log(o.a); // 45

// Ex 6 - Call and Apply
function add(c, d){
  return this.a + this.b + c + d;
}

var o = {a:1, b:3};

// The first parameter is the object to use as 'this', subsequent parameters are passed as 
// arguments in the function call
add.call(o, 5, 7); // 1 + 3 + 5 + 7 = 16

// The first parameter is the object to use as 'this', the second is an array whose
// members are used as the arguments in the function call
add.apply(o, [10, 20]); // 1 + 3 + 10 + 20 = 34

// Ex 7 - EcmaScript5 Bound functions
/* From MDN - 
	ECMAScript 5 introduced Function.prototype.bind. Calling f.bind(someObject) creates
	a new function with the same body and scope as f, but where this occurs in the original function, 
	in the new function it is permanently bound to the first argument of bind, regardless of how the 
 	function is being used.

 	more: https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function/bind
 */
function f(){
  return this.a;
}

var g = f.bind({a:"azerty"});
console.log(g()); // azerty

var o = {a:37, f:f, g:g};
console.log(o.f(), o.g()); // 37, azerty

// Ex 8 - In an event Handler
// When called as a listener, turns the related element blue
function bluify(e){
  console.log(this === e.currentTarget); // Always true
  console.log(this === e.target);        // true when currentTarget and target are the same object
  this.style.backgroundColor = '#A5D9F3';
}

// Get a list of every element in the document
var elements = document.getElementsByTagName('*');

// Add bluify as a click listener so when the element is clicked on,
// it turns blue
for(var i=0 ; i<elements.length ; i++){
  elements[i].addEventListener('click', bluify, false);
}