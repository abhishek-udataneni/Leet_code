function one(){
    let counter = 1
    for (let i = 0; i < 100;) {
        if(i%6 === 0){
            console.log("\n")
        }
        i++;
        counter = counter + 4;
        console.log(counter)
    }
}

one();