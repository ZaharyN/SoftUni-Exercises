function solve(numAsString, ...operations) {
    let number = Number(numAsString);

    operations.forEach(element => {
        switch (element) {
            case "chop":
                number /= 2;
                console.log(number);
                break;
            case "dice":
                number = Math.sqrt(number);
                console.log(number);
                break;
            case "spice":
                number++;
                console.log(number);
                break;
            case "bake":
                number *=  3;
                console.log(number);
                break;
            case "fillet":
                number *= 0.8;
                console.log(number);
                break;
        }
    });
}

solve('32', 'chop', 'chop', 'chop', 'chop', 'chop');
solve('9', 'dice', 'spice', 'chop', 'bake', 'fillet');