const votingAge = 18;
const personAge = 17;

const checkAge = ()=>{
    if (personAge < votingAge){
        console.log("You are not eligible for voting");
    }else if(personAge===votingAge){
        console.log("You are exactly eligible for voting");
    }else {
        console.log("You are eligible for voting");
    }
}
checkAge();


//For loop
//-->It is used to check the given condition using the evry iteration

const a = 10;
for (let i= 0; i<a; i++){
    console.log("Hello World");
}