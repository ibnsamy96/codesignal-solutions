// problem: https://app.codesignal.com/arcade/code-arcade/at-the-crossroads/r9azLYp2BDZPyzaG2

function solution(value1, weight1, value2, weight2, maxW) {
	if (weight1 > maxW && weight2 > maxW) return 0;
	if (weight1 > maxW) return value2;
	if (weight2 > maxW) return value1;

	return weight1 + weight2 <= maxW ? value1 + value2 : Math.max(value1, value2);
}
