function defaultArguments(func, params) {
  var names = func.names || func.toString()
    .replace(/\/\/.*$|\/\*.*?\*\/|\s/gm, '')
    .match(/(?:[\w]+(?:,[\w]+)*)?(?=\))/m)[0].split(',');
  
  var detour = function () {
    var input = arguments;
    return func.apply(this, names.map(function (val, i) {
      return i < input.length ? input[i] : params[names[i]];
    }));
  };
  
  detour.names = names;
  return detour;
}

function add(a,b) { return a+b; }

var add_ = defaultArguments(add,{b:9});
console.log('add_(10):', add_(10));
console.log('add_(10,7):', add_(10,7));
console.log('add_():', add_());

add_ = defaultArguments(add_,{b:3, a:2});
console.log('add_(10):', add_(10));
console.log('add_():', add_());

add_ = defaultArguments(add_,{c:3});
console.log('add_(10):', add_(10));
console.log('add_(10,10):', add_(10,10));