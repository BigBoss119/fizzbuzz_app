


for (var i=1; i <= 100; i++)
{
if (i % 3 === 0 && i % 5 === 0)
console.log("FizzBuzz");
else if (i % 3 === 0)
console.log("Fizz");
else if (i % 5 === 0)
console.log("Buzz");
else
console.log(i);
}









///But for multiples of 3 print Fizzinstead of the number and for the multiples of 5 print Buzz. For numbers which are multiples of both 3 and 5 print FizzBuzz.
//Your output should look like the following:
// 1 2 fizz 4 buzz fizz 7 8 fizz buzz 11 fizz 13 14 fizzbuzz 16 17 fizz 19 buzz … 100