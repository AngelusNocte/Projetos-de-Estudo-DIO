function substituiPares(array){
    for (let i = 0; i < array.lenght; i++){
            if(array[i] === 0 ) {
                console.log("Você já é Zero!!")

            } else if (array[i] % 2 === 0) {
                console.log(`substituindo ${array[i]} por 0...`);
                array[i] = 0;
            }
    }
    return array;

}

let arr = [1, 3, 4, 6, 80, 33, 23, 90]
substituiPares(arr)