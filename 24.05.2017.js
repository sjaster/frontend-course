// Hello World ________________________________________________

function hi() {
    console.log('Hello World');
}

// Basic ______________________________________________________

var a = [1, 2, 3, "String", true];

a[5] = 1.5;

for (var tmp in a) {
    console.log(a[tmp]);
}

// OBJECTS _____________________________________________________

var a = {
    'awesome': true,
    stilldre: "yes",
};

(a.awesome == a['awesome']) // True

// CLASSES ______________________________________________________

class Foo {
    static greetingPrefix() {
        return 'Hello'
    }

    constructor(name) {
        this.name = name;
    }

    greeting() {
        return Foo.greetingPrefix() + ' ' + this.name;
    }
};

console.log(Foo.greetingPrefix());
console.log(new Foo('JS').greeting());

// STRINGS ______________________________________________________
var a = 'Some text'
var b = "Some more"
var c = `
Some
multiline
text
`
var n = 5
var d = `n = ${n}`
var e = `magic: ${(++n - 2) * 3}`
console.log(a, b, c, d, e)