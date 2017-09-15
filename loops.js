function loopOne(Time){
let time = 30;
while(time > 0){
  if(time %5 == 0){

  console.log("AHHHHHH "+time+" seconds left!");
}
else{
  console.log(time+" seconds lef.");
  time = time - 1;
console.log("Done Son!");
}
function loopTwo(number,power){
for(let sum = 0; sum<=power; sum++)
console.log(number);
}

function loopThree(){


}

function main(){
    //Testing each function
    loopOne(10);
    loopOne(25);

    let powersOfTwo = loopTwo(2,10);
    let powersOfFive = loopTwo(5,4);
    console.log("The sum is "+powersOfTwo);
    console.log("The sum is "+powersOfFive);

    loopThree("#",6);
    loopThree("$",20);
    loopThree("x",10);

    console.log("You will need to scroll up to check all of them.");
}

//Hit ctrl + Shift + B to run the program.
//Hit ESC to make the printout messages go away.
main();
