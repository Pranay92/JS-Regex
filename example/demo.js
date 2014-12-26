require('../regex');


var str = 'This is a demo string';

// should return false since the sentence starts with a word
console.log(str.startsWithChar('T'));

// case sensitive
console.log(str.startsWithWord('This'));

// notice that we used caps letter
console.log(str.startsWithRange('A-Z'));

// this too is case sensitive
console.log(str.endsWithChar('g'));

// needs a complete word to work
console.log(str.endsWithWord('string'));

// case sensitive
console.log(str.endsWithRange('a-z'));

// case sensitive, will scan through the entire string
console.log(str.containsWord('demo'));

// case sensitive, will scan through the entire string
console.log(str.containsChar('e'));


