// problem: https://app.codesignal.com/arcade/code-arcade/intro-gates/wAGdN6FMPkx7WBq66

function solution(n) {
	const strNum = n.toString().split("");
	return strNum.reduce((acc, digit) => acc + parseInt(digit), 0);
}
