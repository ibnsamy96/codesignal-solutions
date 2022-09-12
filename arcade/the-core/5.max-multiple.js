// problem: https://app.codesignal.com/arcade/code-arcade/intro-gates/HEsmEacHr2s9wahjr

function solution(divisor, bound) {
	const res = bound / divisor;
	if (parseInt(res) == res) return bound;
	else return solution(divisor, bound - 1);
}
