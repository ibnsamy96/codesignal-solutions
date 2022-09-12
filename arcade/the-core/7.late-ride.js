// problem: https://app.codesignal.com/arcade/code-arcade/intro-gates/aiKck9MwwAKyF8D4L

function solution(n) {
	const [hours, minutes] = [parseInt(n / 60), n % 60];
	return `${hours}${minutes}`.split("").reduce(calculateArraySum, 0);
}

const calculateArraySum = (acc, curr) => acc + parseInt(curr);
