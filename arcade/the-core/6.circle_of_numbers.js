// problem: https://app.codesignal.com/arcade/code-arcade/intro-gates/vExYvcGnFsEYSt8nQ

function solution(n, firstNumber) {
	[n, firstNumber] = [parseInt(n), parseInt(firstNumber)];
	return firstNumber == n / 2
		? 0
		: firstNumber > n / 2
		? firstNumber - n / 2
		: firstNumber + n / 2;
}
