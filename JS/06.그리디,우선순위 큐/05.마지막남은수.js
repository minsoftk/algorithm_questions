class maxHeap {
	constructor() {
		this.heap = [];
		this.heap.push(1e9);
	}
	insert(val) {
		this.heap.push(val);
		this.upheap(this.heap.length - 1);
	}

	upheap(pos) {
		let tmp = this.heap[pos];
		while (tmp > this.heap[parseInt(pos / 2)]) {
			this.heap[pos] = this.heap[parseInt(pos / 2)];
			pos = parseInt(pos / 2);
		}
		this.heap[pos] = tmp;
	}
	get() {
		if (this.heap.length === 2) return this.heap.pop();
		let res = this.heap[1];
		this.heap[1] = this.heap.pop();
		this.downheap(1, this.heap.length - 1); // pos는 마지막 부모까지만 내려가야 한다.
		return res;
	}
	downheap(pos, len) {
		let tmp = this.heap[pos],
			child;
		while (pos <= parseInt(len / 2)) {
			child = pos * 2;

			// 왼쪽 자식이 더 큰가 오른쪽 자식이 더 큰가
			// len보다는 작아야 한다.
			if (child < len && this.heap[child] < this.heap[child + 1]) child++;
			if (tmp >= this.heap[child]) break;
			this.heap[pos] = this.heap[child];
			pos = child;
		}
		this.heap[pos] = tmp;
	}
	size() {
		return this.heap.length - 1;
	}
}

function solution(nums) {
	let answer = 0;
	let stack = [];
	let cnt = 0,
		sum = 0;

	let heap = new maxHeap();
	for (let x of nums) {
		heap.insert(x);
	}
	while (heap.size() > 1) {
		let a = heap.get();
		let b = heap.get();
		if (a !== b) heap.insert(Math.abs(a - b));
	}
	if (heap.size() === 0) answer = 0;
	else answer = heap.get();

	return answer;
}

console.log(solution([5, 2, 4, 3, 1])); // 1
console.log(solution([7, 6, 3, 2, 4, 5, 1])); // 0
