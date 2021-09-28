//Iterate 0 to 10 using for loop, do the same using while and do while loop

let i = 0;
while (i <= 10) {
    console.log(i);
    i ++;
}
//Iterate 10 to 0 using for loop, do the same using while and do while loop
let a=10;
while(a>=0){
    console.log(a);
    a--;
}

//Iterate 0 to n using for loop

let n=prompt("enter a number ")
for(let i=0; i<=n; i++){
    console.log(i)
}
//Use for loop to iterate from 0 to 100 and print only even numbers
for(let i=0; i<=100; i++){
    if(i%2==0){
        console.log(`${i} : is even`)
    }
}

//Use for loop to iterate from 0 to 100 and print only odd numbers
for(let i=0; i<=100; i++){
    if(i%2!=0){
        console.log(`${i} : is odd`)
    }
}

/*Use for loop to iterate from 0 to 100 and print only prime numbers

    for (let i = 2;  i <= 100; i++)
        if (i%i++==0)
         {
             console.log(i)
         }*/
         /*Use for loop to iterate from 0 to 100 and print the sum of all numbers.
o The sum of all numbers from 0 to 100 is 5050.*/
let sum=0;
for(let i=0; i<=100; i++){
    sum+=i;
    console.log(sum)
}
/*Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds.
o The sum of all evens from 0 to 100 is 2550. And the sum of all odds from 0 to 100 is 2500.*/
let sumeven=0;
for(let i=0; i<=100; i++){
    if(i%2==0){
  
        sumeven+=i;
        console.log(sumeven)
    }
}


let odd=0;
for(let i=0; i<=100; i++){
    if(i%2!=0){
        odd+=i;
        console.log (odd)
    }
}
/*Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds. Print sum
of evens and sum of odds as array
o [2550, 2500]*/

let arr3=[sumeven,odd]
console.log(arr3)
/** Write a loop that makes the following pattern using console.log():
#
##
###
####
#####
#######*/

var x,y,chr;
for(x=1; x <=6; x++)
{
   for (y=1; y < x; y++)
     {
    chr=chr+("#");     
       
      }
 console.log(chr);
 chr='';    
}

/*Use loop to print the following pattern:
0 x 0 = 0
1 x 1 = 1
2 x 2 = 4
3 x 3 = 9
4 x 4 = 16
5 x 5 = 25
6 x 6 = 36
7 x 7 = 49
8 x 8 = 64
9 x 9 = 81
10 x 10 = 100*/


for(let i=0; i<=10; i++){

    console.log(`${i}*${i}=${i*i}`)
}

/*i i^2 i^3
0 0 0
1 1 1
2 4 8
3 9 27
4 16 64
5 25 125
6 36 216
7 49 343
8 64 512
9 81 729
10 100 1000*/
for(let i=0; i<=10; i++){

    console.log(`${i} ${i*i} ${i*i*i}`)
}

//Develop a small script which generate array of 5 random numbers
console.log( Math.floor (Math.random()) *78979)

//Using loop print the following pattern
//create matrix [i][j][k]

var randoms = Array(5).fill(Math.floor(100+Math.random() * 1000));
console.log( Array(5).fill(Math.floor(100+Math.random() * 1000)))


//Develop a small script which generate array of 5 random numbers and the numbers must be unique
/*var arr = [];
while(arr.length < 5){
    var r = Math.floor(Math.random() * 1000) + 1;
    if(arr.indexOf(r) === -1) arr.push(r);
}
console.log(arr);

*/

/*Using the above countries array, create the following new array.
["ALBANIA", "BOLIVIA", "CANADA", "DENMARK", "ETHIOPIA", "INDIA", "GERMANY", "HUNGARY",
"IRELAND", "JAPAN", "KENYA"]*/

let country=['Albania', 'Bolivia', 'Canada', 'Denmark', 'Ethiopia', 'India', 'Germany',
 'Hungary', 'Ireland', 'Japan', 'Kenya']
 console.log(country)

let country1=['Albania', 'Bolivia', 'Canada', 'Denmark', 'Ethiopia', 'India', 'Germany',
 'Hungary', 'Ireland', 'Japan', 'Kenya']

country1[0]=country1[0].toUpperCase()
country1[1]=country1[1].toUpperCase()
country1[2]=country1[2].toUpperCase()
country1[3]=country1[3].toUpperCase()
country1[4]=country1[4].toUpperCase()
country1[5]=country1[5].toUpperCase()
country1[6]=country1[6].toUpperCase()
country1[7]=country1[7].toUpperCase()
country1[8]=country1[8].toUpperCase()
country1[9]=country1[9].toUpperCase()
country1[10]=country1[10].toUpperCase()

console.log(country1)

let country3=['Albania', 'Bolivia', 'Canada', 'Denmark', 'Ethiopia', 'India', 'Germany',
 'Hungary', 'Ireland', 'Japan', 'Kenya']
country3[0]=country1[0].substr(0,3)
country3[1]=country1[1].substr(0,3)
country3[2]=country1[2].substr(0,3)
country3[3]=country1[3].substr(0,3)
country3[4]=country1[4].substr(0,3)
country3[5]=country1[5].substr(0,3)
country3[6]=country1[6].substr(0,3)
country3[7]=country1[7].substr(0,3)
country3[8]=country1[8].substr(0,3)
country3[9]=country1[9].substr(0,3)
country3[10]=country1[10].substr(0,3)
console.log(country3)



 

/*Using the above countries array, create an array for countries length'.
o [7, 7, 6, 7, 8, 7, 7, 7, 7, 5, 5]*/


let country2=['Albania', 'Bolivia', 'Canada', 'Denmark', 'Ethiopia', 'India', 'Germany',
 'Hungary', 'Ireland', 'Japan', 'Kenya']

country2[0]=country2[0].length
country2[1]=country2[1].length
country2[2]=country2[2].length
country2[3]=country2[3].length
country2[4]=country2[4].length
country2[5]=country2[5].length
country2[6]=country2[6].length
country2[7]=country2[7].length
country2[8]=country2[8].length
country2[9]=country2[9].length
country2[10]=country2[10].length

console.log(country2)

/*Use the countries array to create the following array of arrays:
[
    ['Albania', 'ALB', 7], ['Bolivia', 'BOL', 7], ['Canada', 'CAN', 6], ['Denmark', 'DEN', 7], ['Ethiopia', 'ETH', 8],
    ['India', 'FIN', 7], ['Germany', 'GER', 7], ['Hungary', 'HUN', 7], ['Ireland', 'IRE', 7], ['Japan', 'JAP', 5],
    ['Kenya', 'KEN', 5]
    ]*/

country4=[[country[0],country3[0],country2[0]],[country[1],country3[1],country2[1]],[country[2],country3[2],country2[2]],[country[3],country3[3],country2[3]],
[country[4],country3[4],country2[4]],[country[5],country3[5],country2[5]],[country[6],country3[6],country2[6]],[country[7],country3[7],country2[7]],[country[8],country3[8],country2[8]],
[country[9],country3[9],country2[9]],[country[10],country3[10],country2[10]]]
console.log(country4)

/*In above countries array, check if there is a country or countries containing the word 'land'. If there are
countries containing 'land', print it as array. If there is no country containing the word 'land', print 'All
these countries are without land'.
o ['Iceland']*/
let country5=['Albania', 'Bolivia', 'Canada', 'Denmark', 'Ethiopia', 'India', 'Germany',
 'Hungary', 'Ireland', 'Japan', 'Kenya','india']

if(country5.includes('land')){
    console.log("it is an array")
}
else{
    console.log("All countries are without land")
}
/*In above countries array, check if there is a country or countries end with a substring 'ia'. If there are
countries end with, print it as array. If there is no country containing the word 'ai', print 'These are
countries ends without ia'.
o ['Albania', 'Bolivia','Ethiopia']*/

if (country5.includes('ia')){
    console.log("it is an array")
}
else{
    console.log('These are countries ends without ia')
}
/*Using the above countries array, find the country containing the biggest number of characters.
o Ethiopia
let country6=['Albania', 'Bolivia', 'Canada', 'Denmark', 'Ethiopia', 'India', 'Germany',
 'Hungary', 'Ireland', 'Japan', 'Kenya','india']

 let max = country6[0]
for(let i=1;i<country6.length;i++){
    if(max<country6[i]){
        max = country6[i] 
        console.log(country6)    
    }
} **/
/*Use the webTechs array to create the following array of arrays:
o [["HTML", 4], ["CSS", 3],["JavaScript", 10],["React", 5],["Redux", 5],["Node", 4],
["MongoDB", 7]]*/

let webTechs = ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node', 'MongoDB']
  
    console.log(webTechs)


    let webTechs2 = ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node', 'MongoDB']

    webTechs2[0]=webTechs2[0].length
    webTechs2[1]=webTechs2[1].length
    webTechs2[2]=webTechs2[2].length
    webTechs2[3]=webTechs2[3].length
    webTechs2[4]=webTechs2[4].length
    webTechs2[5]=webTechs2[5].length
    webTechs2[6]=webTechs2[6].length
        
        
        console.log(webTechs2)


    let webTechs3=[[webTechs[0],webTechs2[0]],[webTechs[1],webTechs2[1]],[webTechs[2],webTechs2[2]]
    ,[webTechs[3],webTechs2[3]],[webTechs[4],webTechs2[4]],[webTechs[5],webTechs2[5]],[webTechs[6],webTechs2[6]]]

    console.log(webTechs3)

    /*An application created using MongoDB, Express, React and Node is called a MERN stack app. Create
the acronym MERN by using the array mernStack*/
mernStack=[ 'MongoDB', 'Express', 'React','Node']

console.log(mernStack)

/*Iterate through the array, ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"]
using a for loop or for of loop and print out the items.*/
tech=["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"]

const newArr = []
for(let i = 0; i < tech.length; i++){
newArr.push(tech[i])
console.log(newArr[i])
}

/*This is a fruit array , ['banana', 'orange', 'mango', 'lemon'] reverse the order using loop without using a
reverse method.*/

fruit=['banana', 'orange', 'mango', 'lemon']

 
for ( let x= fruit.length - 1; x >= 0; x--) {
    console.log(fruit[x]);
}
/*const fullStack = [
    ['HTML', 'CSS', 'JS', 'React'],
    ['Node', 'Express', 'MongoDB']
    ]
    HTML
    CSS
    JS
    REACT
    NODE
    EXPRESS
    MONGODB
    
    const fullStack = [
        ['HTML', 'CSS', 'JS', 'React'],
        ['Node', 'Express', 'MongoDB']]
            
             const stack =[]
             for(let i = 0; i<fullStack.length; i++){
             stack.push(countries[i].toUpperCase())
             console.log(stack)
             }*/