function solution(number) {
    let soma = 0
    for (i = 1; i < number; i++) {
        if (i % 3 == 0 || i % 5 == 0) {
            soma += i
        }
    }
    return soma;
};

solution(50)


