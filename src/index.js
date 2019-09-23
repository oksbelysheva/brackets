module.exports = function check(str, bracketsConfig) {
  let brackets = [];
  bracketsConfig.forEach(element => {
    if (Number.isInteger(+element[0]))
      brackets.push(element[0] + '' + element[1]);
    else
      brackets.push('\\' + element[0] + '\\' + element[1]);
  });

  let oldLength;
  do {
    oldLength = str.length;
    brackets.forEach(element => {
      str = str.replace(new RegExp(element, 'g'),'');
    })
  } while(str.length && oldLength != str.length)
  
  return str.length == 0;
}