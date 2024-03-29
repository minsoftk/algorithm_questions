// 곱하기 퍼즐은 일렬로 놓여 있는 카드를 가지고 한다. 각 카드는 양의 정수가 쓰여져 있다. 플레이어가 나열된 카드 중에서 한 개를 빼는 동작을 하면, 점수가 계산되는데, 점수는 뺀 카드와 그 카드의 왼쪽카드, 오른쪽 카드를 세 개를 곱하면 얻는 점수가 된다.
// 나열된 카드 중에서 맨 왼쪽 카드와 맨 오른쪽 카드는 뽑아서는 안된다.
// 맨 마지막 동작을 하고 나면, 두 장의 카드가 남는다.
// 당신의 목표는 동작을 모두 하고나서, 각 동작의 점수의 합이 최소가 되도록 동작하는 것이다.
// 예를 들어 카드가 10 1 50 20 5 순서로 나열되어 있다고 할때, 플레이어가 카드를 1, 20, 50 순서로 뽑았다면 총 점수는 10*1*50 + 50*20*5 + 10*50*5 = 500+5000+2500 = 8000이다.
// 그런데 만약 플레이어가 50, 20, 1 순서로 뽑았다면 1*50*20 + 1*20*5 + 10*1*5 = 1000+100+50 = 1150.로 계산되어 가장 작은 점수가 된다.

// ▣ 입력설명
// 매개변수 nums에 일렬로 나열된 각 카드의 숫자가 입력됩니다. 순서는 왼쪽에서 오른쪽으로입니다. 카드의 숫자는 100을 넘지 않는다.

// ▣ 출력설명
// 가장 작은 총점을 반환한다.

// ▣ 매개변수 형식 1
// [10, 1, 50, 50, 20, 5]

// ▣ 반환값 형식 1
// 3650
