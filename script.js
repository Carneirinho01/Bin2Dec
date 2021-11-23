function convertToBinary(x) {
    let bin = 0;
    let rem, i = 1;
    while (x != 0) {
        rem = x % 2;
        x = parseInt(x / 2);
        bin = bin + rem * i;
        i = i * 10;
    }
    return bin;
}

function convertToDecimal(x) {
    return parseInt(x, 2);
}

const view = () => {
    // pegou o campo
    const bin = document.getElementById("bin");
    const dec = document.getElementById("dec");

    // pegar o valor do campo(.value)
    // passa o valor para o parametro da função convertToBinary
    // esperar o resultado da função ser entregue na variavel (valorBin);
    const valorBin = convertToBinary(dec.value);

    //Devolver o valor em binario para tela
    bin.value = valorBin;
}

const view2 = () => {
    // pegou o campo
    const bin = document.getElementById("bin");
    const dec = document.getElementById("dec");

    // pegar o valor do campo(.value)
    // passa o valor para o parametro da função convertToDecimal
    // esperar o resultado da função ser entregue na variavel (valorDec);
    const valorDec = convertToDecimal(bin.value);

    //Devolver o valor em decimal para tela
    dec.value = valorDec;
}

//Filtro de tecla para binarios 
document.getElementById('bin').addEventListener('keydown', function (ev) {
    if (ev.key != 0 && ev.key != 1 && ev.key != 'Backspace') {
        ev.preventDefault();
    }
});

// filtro de teclas para números
document.getElementById('dec').addEventListener('keydown', function (ev) {
    if (isNaN(ev.key) && ev.key != 'Backspace' || ev.key == " ") {
        ev.preventDefault();
    }
});