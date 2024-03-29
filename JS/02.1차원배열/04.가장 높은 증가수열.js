// - 가장 높은 차를 누적하는 문제.

function solution(arr) {
	let answer = 0;
	let height = 0;
	for (let i = 1; i < arr.length; i++) {
		if (arr[i - 1] < arr[i]) {
			height += arr[i] - arr[i - 1];
		} else {
			answer = Math.max(answer, height);
			height = 0;
		}
	}
	answer = Math.max(answer, height);
	return answer;
}

console.log(solution([5, 2, 4, 7, 7, 3, 9, 10, 11]));
