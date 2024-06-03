let num1 = Number (prompt('Enter first number', 0));
let op = prompt('Enter operator');
let num2 = Number (prompt('second number', 0));
let answer = num1+num2
if (op==='*')
{console.log('Your answer is ' + (num1*num2));
} 
else if(op==='-')
{
    console.log('Your answer is ' + (num1-num2));
}
else if(op==='/')
{
    console.log('Your answer is '+ (num1/num2));
}
else if(op==='+')
{
    //  console.log('Answer is ' + `${answer}`);
    console.log('Your answer is ' + (num1+num2))
}
