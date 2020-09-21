//Created by Shelley Ophir
//Coding Dojo Sep. 21,2020
//Create an algorithm for each of the challenges below

//Print odds 1-20
//Print out all odd numbers from 1 to 20
//The expected output will be 1, 3, 5, 7, 9, 11, 13, 15, 17, 19

for (var i = 1; i < 20; i+=2)
{
  console.log(i);
}

//Sum and Print 1-5
//Sum numbers from 1 to 5, printing out the current number and sum so far at each step of the way
//The expected output will be: Num: 1, Sum: 1, Num: 2, Sum: 3, Num: 3, Sum: 6, Num: 4, Sum: 10, Num: 5, Sum: 15

var sum = 0;
for ( var i = 0; i < 5; i++)
{
  console.log("Num: "+ (i+1));
  sum += i + 1;
  
  console.log("Sum: " + sum);
}
  
  
