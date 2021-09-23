function digital_root(n) {

    let newNumber = [...`${n}`];
    let soma = 0

    for (i = 0; i < newNumber.length; i++) {
        let num = Number(newNumber[i])
        soma += num
    };

    const arraySoma = [...`${soma}`]

    if (arraySoma.length > 1) {
        return digital_root(soma)
    }
    return soma
};

