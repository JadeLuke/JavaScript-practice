let num1 = prompt('Enter first number', 0);
let op = prompt('Enter operator');
let num2 = prompt('second number', 0);
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
    //  console.log('Your answer is ' + (num1+num2));
     console.log('Answer is' + answer)
}
else {
    console.log('Invalid operator')
}