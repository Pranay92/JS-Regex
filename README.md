JS-Regex
========

[![Join the chat at https://gitter.im/Pranay92/JS-Regex](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/Pranay92/JS-Regex?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

A simple regular expresion wrapper for easier string validation.

## Why?

**Because it's fun!!**

And because understanding regular expressions and memorizing them has always been very hard for me. I'm hoping that by making this library I may eventually understand it and also help someone for the same.

## Whats different about this?

Unlike other regular expression libraries, it doesn't returns you a regular expression object. Instead it overrides string prototypes by adding function mentioned below. This avoids you the hassle to create objects everytime you want to validate a string.

## Usage (when using npm)

`npm install js-regex`

and then simply `require('js-regex')` in the starting of the project

## Usage (when using on the client)

Simply include the file before all the files.

## Methods

Once the library is loaded, all the methods are added in the prototype of the String type, thus all the string variables will have access to it.

1. `.startsWithChar(char)` returns true if the string starts with the provided character.  
2. `.startsWithWord(word)` returns true if the string starts with the provided word.  
3. `.startsWithRange(range)` returns true if the string starts with the provided range.
4. `.startsWithSpecialChar(char)` returns true if the string starts with the special character.
5. `.endsWithChar(char)` returns true if the string ends with the provided chararacter.
6. `.endsWithWord(word)` returns true if the string ends with the provided word.  
7. `.endsWithRange(range)` returns true if the string ends with the provided range.  
8. `.endsWithSpecialChar(char)` returns true if the string ends with the special character.
9. `.containsChar(char)` returns true if the string contains the provided character.
10. `.containsWord(word)` returns true if the string contains the provided word.
11. `.containsSpecialChar(char)` returns true if the string contains the special character.


## Method Chaining

You can also do method chaining.
````
  var str = 'This is not amazing, but still I am gonna try it'
  
  // the following will return true
  var isValid = str.startsWithChar('T')
                   .containsWord('gonna')
                   .containsRange('a-z')
                   .endsWithWord('it')
                   .endsWithChar('t')
````
## TODO

1. Keep finding ways to minimize file size.
2. Add more methods that can be achieved via normal regular expressions.
3. Add an optional configuration object to make things more flexible.
4. Make it available via npm.
