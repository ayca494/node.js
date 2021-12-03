//dairenin yarıçapını parametre olarak alıp alan bulma 

const arguments = process.argv.slice(2);

function showTest(number) {
    console.log(Math.PI*number*number);
}

showTest(arguments[0]*1);
