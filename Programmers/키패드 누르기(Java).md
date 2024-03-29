# 2020 KAKAO

https://programmers.co.kr/learn/courses/30/lessons/72410

## 문제 설명

스마트폰 전화 키패드의 각 칸에 다음과 같이 숫자들이 적혀 있습니다.
![](https://grepp-programmers.s3.ap-northeast-2.amazonaws.com/files/production/4b69a271-5f4a-4bf4-9ebf-6ebed5a02d8d/kakao_phone1.png)

이 전화 키패드에서 왼손과 오른손의 엄지손가락만을 이용해서 숫자만을 입력하려고 합니다.
맨 처음 왼손 엄지손가락은 \* 키패드에 오른손 엄지손가락은 # 키패드 위치에서 시작하며, 엄지손가락을 사용하는 규칙은 다음과 같습니다.

1. 엄지손가락은 상하좌우 4가지 방향으로만 이동할 수 있으며 키패드 이동 한 칸은 거리로 1에 해당합니다.
2. 왼쪽 열의 3개의 숫자 1, 4, 7을 입력할 때는 왼손 엄지손가락을 사용합니다.
3. 오른쪽 열의 3개의 숫자 3, 6, 9를 입력할 때는 오른손 엄지손가락을 사용합니다.
4. 가운데 열의 4개의 숫자 2, 5, 8, 0을 입력할 때는 두 엄지손가락의 현재 키패드의 위치에서 더 가까운 엄지손가락을 사용합니다.

순서대로 누를 번호가 담긴 배열 numbers, 왼손잡이인지 오른손잡이인 지를 나타내는 문자열 hand가 매개변수로 주어질 때, 각 번호를 누른 엄지손가락이 왼손인 지 오른손인 지를 나타내는 연속된 문자열 형태로 return 하도록 solution 함수를 완성해주세요.

## [제한사항]

- numbers 배열의 크기는 1 이상 1,000 이하입니다.
- numbers 배열 원소의 값은 0 이상 9 이하인 정수입니다.
- hand는 `"left"` 또는 `"right"` 입니다.
- `"left"`는 왼손잡이, `"right"`는 오른손잡이를 의미합니다.
- 왼손 엄지손가락을 사용한 경우는 `L`, 오른손 엄지손가락을 사용한 경우는 `R`을 순서대로 이어붙여 문자열 형태로 return 해주세요.

## [입출력]

|              numbers              |  hand   |    result     |
| :-------------------------------: | :-----: | :-----------: |
| [1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5] | "right" | "LRLLLRLLRRL" |
| [7, 0, 8, 2, 8, 3, 1, 5, 7, 6, 2] | "left"  | "LRLLRRLLLRR" |
|  [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]   | "right" | "LLRLLRLLRL"  |

### 알고리즘 풀이😂

- 생각보다 복잡한..? 문제였다. 다른 분들 풀이도 살펴봤는데 1,2,3 ~ 각각의 index를 `%`, `/` 나눠서 구하신 분들도 있었다. 하지만 그렇게 하면 3,6,9 키패드를 누를때 예외처리를 해줘야해서 생각보다 코드가 길어진다. 문제에서 경우에 수가 많지 않기 때문에 board로 전역변수로 선언해주면 생각보다 쉽게 처리 가능했다.

```java
class Solution {
    int[][] board = {{0,0},{0,1},{0,2},{1,0},{1,1},{1,2},{2,0},{2,1},{2,2},{3,0},{3,1},{3,2}};
    public int distance(int numbers, int Pos)
    {//right나 left 입력받으면 numbers[i]와 Pos의 x좌표 y좌표 계산후 더한값 반환
        int xx = Math.abs((board[Pos - 1][0]) - (board[numbers - 1][0]));
        int yy = Math.abs((board[Pos - 1][1]) - (board[numbers - 1][1]));
        return (xx + yy);
    }

    public String solution(int[] numbers, String hand) {
        String answer = "";

        int leftPos = 10; //*
        int rightPos = 12; //#
        for (int i = 0; i < numbers.length; i++)
        {
            if (numbers[i] == 1 || numbers[i] == 4 || numbers[i] == 7)
            {// 1 4 7
                answer += "L";
                leftPos = numbers[i];
            }
            else if (numbers[i] == 3 || numbers[i] == 6 || numbers[i] == 9)
            {// 3 6 9
                answer += "R";
                rightPos = numbers[i];
            }
            else
            {   // 2 5 8 0
                //0인경우 11로 바꿔준다.
                if (numbers[i] == 0) numbers[i] = 11;

                //left,right와 number와의 거리
                int ll = distance(numbers[i], leftPos);
                int rr = distance(numbers[i], rightPos);

                if (ll > rr)
                {// ll이 크면 rr이 더 가까움
                    answer += "R";
                    rightPos = numbers[i];
                }
                else if (ll < rr)
                {// ll이 더 가까운 경우
                    answer += "L";
                    leftPos = numbers[i];
                }
                else// ll == rr 같을 경우
                {
                    if (hand.equals("right")) //오른손잡이일 경우
                    {
                            answer += "R";
                            rightPos = numbers[i];
                    }
                    else//왼손잡이일 경우
                    {
                            answer += "L";
                            leftPos = numbers[i];
                    }
                }
            }
        }
           return answer;
        }
}
```
