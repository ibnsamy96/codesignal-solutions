// problem: https://app.codesignal.com/challenge/pRuhLib5DdetsY4E7

function solution(prices, notes, x) {
	let sensitivity = 0;

	for (let i in prices) {
		let [changePercent, type] = notes[i].split(" ");
		changePercent = parseFloat(changePercent);
		if (isNaN(changePercent)) continue;

		let storePrice =
			type == "higher"
				? parseFloat(prices[i]) / (1 + changePercent / 100)
				: parseFloat(prices[i]) / (1 - changePercent / 100);

		const change = parseFloat(prices[i]) - storePrice;
		sensitivity += change;
	}

	if ((x == 0 && sensitivity > 0) || parseInt(sensitivity) > x) return false;
	return true;
}
