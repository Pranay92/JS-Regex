require('../regex.min');


var str = 'This is a demo string';

var str2 = 'Incredibly random string that has nothing to do with previous one.';

//should return false since the sentence starts with a word
console.log(str.startsWithChar('T'));

// case sensitive
console.log(str.startsWithWord('This'));

// notice that we used caps letter
console.log(str.startsWithRange('A-Z'));

// this too is case sensitive
console.log(str.endsWithSpecialChar('g'));

// needs a complete word to work
console.log(str.endsWithWord('string'));

// case sensitive
console.log(str.endsWithRange('a-z'));

// case sensitive, will scan through the entire string
console.log(str.containsWord('demo'));

// case sensitive, will scan through the entire string
console.log(str.containsChar('e'));


/*METHOD CHAINING*/
var bool1 =  str.startsWithChar('T')
			   .containsChar('d')
			   .containsWord('demo')
			   .endsWithChar('g');

var bool2 = str2.startsWithChar('I')
				.containsChar('r')
				.endsWithSpecialChar('.');

console.log('Result of a chaining operation ' + bool1);
console.log('Result of a chaining operation ' + bool2);


