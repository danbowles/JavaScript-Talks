/* 
 * VARIABLES
 */

//
// Primitive versus Reference
//
var a = "string"; // Primitive - includes Bool, Number, Null, Undefined

var o = Object.create({}); // Reference 

// Difference?
/*
    'a' is accessed by value
    'o' is accessed by a reference to a location in memory.
        Direct access to the memory location is not allowed.
*/


//
// More
//
a.name = "Primitive";
console.log(a.name); // Undefined

o.name = "Reference";
console.log(o.name); // 'Reference'

// Primitives cannot have properties assigned to them
/* 
    Though the browser won't complain about you trying :)
*/


//
// Copying
//
var n1 = 10;
var n2 = n1;

n1 = 12;    // Copy occurs
console.log(n1+", "+n2); // '12, 10'

var obj1 = {};
var obj2 = obj1;
obj1.name = "Object1";

console.log(obj2.name); // 'Object1'

// Primitives are put on the stack, References on the heap
/*
	Great Vid - https://www.youtube.com/watch?v=bs3qxQ7OZW8&feature=player_embedded
*/


//
// Argument Passing
//

function doubleMe(num) { 
	num = num * 2; // Local to doubleMe function
	return num;
}

var myNum = 10;
var doubled = doubleMe(myNum); // Argument is copied into 'num'
alert(myNum); // 10 - unchanged; myNum and num in doubleMe don't know about each other
alert(doubled); // 20



function setName(o) {
	o.name = "Reference Obj";
}

​var obj1 = {};
setName(obj1); // obj1 is copied to o, but they both point to the same memory location
alert(obj1.name); // 'Reference Obj'



function setName2(o) {
	o.name = "Reference Obj";
	o = {}; 					// o is overwritten, and it becomes local - pointing to a new reference
	o.name = "New Name";
}

var obj1 = {};
setName2(obj1);
alert(obj1.name);  // "Reference Obj"