var window = exports;

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

(function(global){
  
  function RegEx() {
    
    this.pattern;
    this.ended;
    this._methods = ['startsWith','endsWith','followedBy','contains'];
    this._suffixes = ['Char','Word','Range'];
  
  }

  RegEx.prototype.init = function() {
    
    var negative = 'doesNot';
    var methodLength = this._methods.length;
    var suffixLength = this._suffixes.length;

    while(methodLength--) {
      
      for(var i= 0; i<suffixLength;i++) {
        
        var currMethod = this._methods[methodLength];
        var currVerb = this._suffixes[i];
        var methodName = currMethod + currVerb;
        String.prototype[methodName] = this.process(methodName);
      
      }
    }
  };

  RegEx.prototype.process = function(method) {
    
    var func = function(str) {
      var exp = getReg(method,str);
      console.log(exp);
      return exp.test(this.valueOf());
    };

    return func;
  };

  function getReg(method,str) {
    
    str = str || '';
    str = str.toString();

    var expressions = {
      'startsWithRange' : '^[' + str + ']',
      'startsWithChar' : '^' + str[0] + '\\s',
      'startsWithWord' : '^' + str,
      'endsWithRange' : '[' + str + ']$',
      'endsWithChar' : str + '$',
      'endsWithWord' : str + '$',
      'containsRange' : '[' + str + ']',
      'containsChar' : str[0],
      'containsWord' : str,
      'default' : '^' + str
    };

    var exp = expressions[method] || expressions['default'];
    return new RegExp(exp);

  };

  (new RegEx()).init();

})(window);

console.log(window.RegEx);