### 2020 KAKAO

# 더 맵게

https://programmers.co.kr/learn/courses/30/lessons/42626

## 문제 설명

Leo는 모든 음식의 스코빌 지수가 K 이상이 될 때까지 반복하여 섞습니다.
Leo가 가진 음식의 스코빌 지수를 담은 배열 scoville과 원하는 스코빌 지수 K가 주어질 때, 모든 음식의 스코빌 지수를 K 이상으로 만들기 위해 섞어야 하는 최소 횟수를 return 하도록 solution 함수를 작성해주세요.

## [제한사항]

scoville의 길이는 2 이상 1,000,000 이하입니다.
K는 0 이상 1,000,000,000 이하입니다.
scoville의 원소는 각각 0 이상 1,000,000 이하입니다.
모든 음식의 스코빌 지수를 K 이상으로 만들 수 없는 경우에는 -1을 return 합니다.

## [입출력]

|       numbers        |  K  | return |
| :------------------: | :-: | :----: |
| [1, 2, 3, 9, 10, 12] |  7  |   2    |
|                      |     |        |
|                      |     |        |

### 알고리즘 풀이😂

- 우선순위 큐를 이용한 Heap을 구현했다.

```java
import java.util.*;
class Solution {
    public int solution(int[] scoville, int K) {
        int cnt = 0;
        PriorityQueue<Integer> pQ = new PriorityQueue<>();
        for (int i : scoville)
            pQ.add(i);
        while (pQ.peek() < K)
        {
            if (pQ.size() == 1)
            {
                cnt = -1;
                break;
            }
            int a = pQ.poll();
            int b = pQ.poll();

            int res = a + (b * 2);
            pQ.add(res);
            cnt++;
        }
        return cnt;
    }
}
```

```c++

```
