JS-Regex
========

A simple JS library that allows you to generate JS regular expression objects

## Why

Because understanding regular expressions and memorizing them has always been very hard for me. I'm hoping that by making this library I may eventually understand it and also help someone for the same.

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

You can also do method chaining. Example - 
````
  var str = 'This is not amazing, but still I am gonna try it'
  
  // the following will return true
  var isValid = str.startsWithChar('T')
                   .containsWord('something')
                   .containsRange('a-z')
                   .endsWithWord('it')
                   .endsWithChar('t')
````
## TODO

1. Find a way to minimise the file size.
2. Add more methods.
3. Add an optional configuration object to make things more flexible.
