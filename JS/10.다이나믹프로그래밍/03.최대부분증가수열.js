// 계단 하나로 세분화 시킨다.
function solution(nums) {
	let answer = 0;
	let dy = Array(nums.length - 1).fill(0);

	// dy 초기값 1로 셋팅
	dy[0] = 1;

	// nums 배열만큼 탐색한다.
	for (let i = 1; i < nums.length; i++) {
		let max = 0;
		// i값 이전을 확인하기 for문
		for (let j = i - 1; j >= 0; j--) {
			if (nums[j] < nums[i] && dy[j] > max) {
				max = dy[j];
			}
		}
		dy[i] = max + 1;
		answer = Math.max(answer, dy[i]);
		console.log(dy);
	}
	return answer;
}

console.log(solution([5, 3, 7, 8, 6, 2, 9, 4])); // 4
