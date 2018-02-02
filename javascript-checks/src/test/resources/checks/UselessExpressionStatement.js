
// STRING LITERAL

// ok
foo("str");
x = "str";
"str".toUpperCase();
x = "first part" +
"second part"

// nok
"str";            // Noncompliant {{Refactor or remove this statement.}}
"str"             // Noncompliant
x = "first part"
  "second part";       // Noncompliant
//^^^^^^^^^^^^^^

// COMPARISONS

// ok
a = x == y;
var a = x == y;
foo(x == y)

// nok
  x == y;   // Noncompliant
//^^^^^^^
x == y;    // Noncompliant



function foo() {
"use strict"
}

function bar() {
'use strict';
}

new Object(); // is not covered by this rule

// ok, directives
function foo() {
'$:nomunge';
}
function foo() {
"$:nomunge";
}
function foo() {
'ngInject';
}
function foo() {
"ngInject";
foo();
}

1 < 2; // Noncompliant
(1 < 2); // Noncompliant
-1; // Noncompliant

// OK
foo() || bar();
foo() && bar();
delete a.b;
void 42;
await foo();
a ? foo() : bar();
x = 3;
x += 3;
foo();
new A();
yield 42;
a = 1, b = 2;
a.b;
a[b];


// Tagged literals

tag`str`; // same as function call: tag("str")

// IIFE
!((function(){})());
!(function(){})();
!(() => {})();
((function(){})());


// try statement
try { foo; } catch (e) {}
