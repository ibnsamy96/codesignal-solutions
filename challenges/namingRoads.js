// problem: https://app.codesignal.com/challenge/24P5HwcFMk9MCfLyY

function solution(roads) {
	const roadsObj = roads.reduce((acc, curr) => {
		acc[curr[2]] = curr.slice(0, 2);
		return acc;
	}, {});

	for (let road in roadsObj) {
		road = parseInt(road);

		const before = roadsObj[road - 1]
			? {
					start: roadsObj[road - 1][0],
					end: roadsObj[road - 1][1],
			  }
			: null;

		const after = roadsObj[road + 1]
			? {
					start: roadsObj[road + 1][0],
					end: roadsObj[road + 1][1],
			  }
			: null;

		if (
			(before &&
				checkValuesExistanceInArray(
					roadsObj[road],
					before.start,
					before.end
				)) ||
			(after &&
				checkValuesExistanceInArray(roadsObj[road], after.start, after.end))
		)
			return false;
	}

	return true;
}

function checkValuesExistanceInArray(array) {
	return [...arguments].slice(1).some((value) => array.includes(value));
}
