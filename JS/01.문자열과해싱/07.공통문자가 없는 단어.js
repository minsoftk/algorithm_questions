function solution(str) {
	let answer = 0;
	str.sort((a, b) => a.length - b.length);
	for (let i = 0; i < str.length - 1; i++) {
		for (let j = i + 1; j < str.length; j++) {
			if (isUnique(str[i], str[i + 1])) {
				let tmp = str[i].length * str[j].length;
				answer = Math.max(answer, tmp);
			}
		}
	}
	function isUnique(short, long) {
		for (let x of short) {
			if (long.indexOf(x) !== -1) return false;
		}
		return true;
	}
	return answer;
}
console.log(solution(['skudy', 'kstue', 'time', 'back', 'good']));
