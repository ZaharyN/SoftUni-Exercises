function solve(age){
    if(age < 0){
        console.log("out of bounds");
    }
    else if(age <= 2){
        console.log("baby");
    }
    else if(age <= 13){
        console.log("child");
    }
    else if(age <= 19){
        console.log("teenager");
    }
    else if(age <= 65){
        console.log("adult");
    }
    else {
        console.log("elder");
    }
}

solve(20);
solve(1);
solve(100);
solve(-1);

// 20	adult
// 1	baby
// 100	elder
// -1	out of bounds
