module.exports = function check(str, bracketsConfig) {
  
/*const OPEN_BRASKETS = ['(', '{', '[', '|'];

const BRACKETS_PAIR = {
    [')']: '(',
    ['}']: '{',
    [']']: '[',
    ['|']: '|',
}*/

  let brackets = {};
  bracketsConfig.forEach(item => brackets[item[0]] = item[1]);
  let stack = [];
  str.split('').forEach(item => {
    if (brackets[stack[stack.length - 1]] === item) {
      stack.pop();
    } else {
      stack.push(item);
    }
  });
  return !stack.length;

/*function isBracketsOk(str) {
    let stack = [];

     for (let i = 0; i < str.length; i++) {
        let currentSymbol = str[i];

        if(OPEN_BRASKETS.includes(currentSymbol)) {
            stack.push(currentSymbol);
        } else {
            if (stack.length === 0) {
                return false;
            }

            let topElement = stack[stack.length - 1];

            if(BRACKETS_PAIR[currentSymbol] === topElement) {
                console.log(BRACKETS_PAIR[currentSymbol]);
                stack.pop();
            } else {
                return false;
            } 
        }
     }
     return stack.length === 0;
}*/
}
