/*
  regEx can have methods like:

  1. startsWithRange
  2. startsWithChar
  3. startsWithWord
  4. endsWithRange
  5. endsWithChar
  6. endsWithWord
  7. containsRange
  8. containsChar
  9. containsWord

*/

function RegEx() {
  
  this.pattern;
  this.ended;
  this._methods = ['startsWith','endsWith','contains'];
  this._suffixes = ['Char','Word','Range','SpecialChar'];
  this.init();
}

// initialize all the methods of teh regular expression
RegEx.prototype.init = function() {
  
  var negative = 'doesNot',
      methodLength = this._methods.length,
      suffixLength = this._suffixes.length,
      currMethod,
      currVerb,
      methodName,
      i;

  while(methodLength--) {
    
    for (i= 0; i<suffixLength;i++) {
      
      currMethod = this._methods[methodLength];
      currVerb = this._suffixes[i];
      methodName = currMethod + currVerb;
      String.prototype[methodName] = this.process(methodName);

      /*
        this is IMPORTANT!
        since we return a boolean value, we need to apply all the methods to a boolean variable too!
        But we only verify the regular expression test if the value passed in was of type string
      */
      Boolean.prototype[methodName] = this.process(methodName);
    
    }
  }
};

// used to generate function for each of them
RegEx.prototype.process = function(method) {
  
  var self = this,
      func = function(str) {

        // do not compute further if the previous result was false
        if(self.__result === false) {
          return false;
        }

        // this works the first time when called on a string variable
        if(typeof this.valueOf() === 'string') {
          self.__value = this.valueOf();
        }

        var exp = getReg(method,str);

        self.__result = exp.test(self.__value);

        return self.__result;

      };

  return func;
};

// return function specific regular expression
function getReg(method,str) {
  
  str = str || '';
  str = str.toString();

  var expressions = {
      'startsWithRange' : '^[' + str + ']',
      'startsWithChar' : '^' + str[0],
      'startsWithWord' : '^' + str + '\\s',
      'startsWithSpecialChar' : '^[' + str[0] + ']',
      'endsWithRange' : '[' + str + ']$',
      'endsWithChar' : str[0] + '$',
      'endsWithWord' : '\\s' + str + '$',
      'endsWithSpecialChar' : '[' + str[0] + ']$',
      'containsRange' : '[' + str + ']',
      'containsChar' : str[0],
      'containsWord' : str,
      'containsSpecialChar' : '[' + str[0] + ']',
      'default' : '^' + str
    },
    exp;

  exp = expressions[method] || expressions['default'];
  return new RegExp(exp);

};

var reg = new RegEx();

if(typeof module === 'object') {
  module.exports = reg;
}

