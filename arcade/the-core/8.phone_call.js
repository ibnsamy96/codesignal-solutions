// problem: https://app.codesignal.com/arcade/code-arcade/intro-gates/mZAucMXhNMmT7JWta

function solution(min1, min2_10, min11, availableMoney) {
	let availableMinutes = 0;

	const min1Cost = 1 * min1;
	if (availableMoney < min1Cost) {
		availableMinutes += parseInt(availableMoney / min1);
		return availableMinutes;
	}

	availableMinutes += 1;

	availableMoney = availableMoney - min1Cost;
	const min2_10Cost = 9 * min2_10;
	if (availableMoney - min2_10Cost < 0) {
		availableMinutes += parseInt(availableMoney / min2_10);
		return availableMinutes;
	}

	availableMinutes += 9;

	availableMoney = availableMoney - min2_10Cost;
	availableMinutes += parseInt(availableMoney / min11);

	return availableMinutes;
}
