JS-Regex
========

A simple JS library that allows you to generate JS regular expression objects

## Why

Because understanding regular expressions and memorizing them has always been very hard for me. I'm hoping that by making this library I may eventually understand it and also help someone for the same.

## Methods

Once the library is loaded, all the methods are added in the prototype of the String type, thus all the string variables will have access to it.

1. `.startsWithChar(char)` returns true if the string starts with the provided character.  
2. `.startsWithWord(word)` returns true if the string starts with the provided word.  
3. `startsWithRange(range)` returns true if the string starts with the provided range. 
4. `.endsWithChar(char)` returns true if the string ends with the provided chararacter.
5. `.endsWithWord(word)` returns true if the string ends with the provided word.  
6. `.endsWithRange(range)` returns true if the string ends with the provided range.  
7. `.containsChar(char)` returns true if the string contains the provided character.
8. `.containsWord(word)` returns true if the string contains the provided word.
