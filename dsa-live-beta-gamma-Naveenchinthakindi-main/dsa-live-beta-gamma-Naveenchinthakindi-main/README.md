# Problem Statement

Given an integer `n`, check if the `nth` fibonacci number is a prime number or not.

- If it is a prime number, return the sum of all numbers that follow the fibonacci sequence up to that number.

- If it is not a prime number, find the next prime number in the fibonacci sequence, and return the sum of all numbers that follow the fibonacci sequence up to that number.

## Example

### Input

5

### Output

12

### Explanation

The 5th fibonacci number is 5, which is a prime number. So, we need to find the sum of all numbers that follow the fibonacci sequence up to 5. The fibonacci sequence is `1, 1, 2, 3, 5`. The sum of all numbers that follow the fibonacci sequence up to 5 is `12`.

### Input

6

### Output

33

### Explanation

The 6th fibonacci number is 8, which is not a prime number. So, we need to find the next prime number in the fibonacci sequence. The next prime number in the fibonacci sequence is 13. The fibonacci sequence is `1, 1, 2, 3, 5, 8, 13`. The sum of all numbers that follow the fibonacci sequence up to 13 is `33`.

### Input

7

### Output

33

### Explanation

The 7th fibonacci number is 13, which is a prime number. So, we need to find the sum of all numbers that follow the fibonacci sequence up to 13. The fibonacci sequence is `1, 1, 2, 3, 5, 8, 13`. The sum of all numbers that follow the fibonacci sequence up to 13 is `33`.


### Input

8

### Output

232

### Explanation

The 8th fibonacci number is 21, which is not a prime number. So, we need to find the next prime number in the fibonacci sequence. The next prime number in the fibonacci sequence is 34. The fibonacci sequence is `1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89`. The sum of all numbers that follow the fibonacci sequence up to 34 is `232`.

## Constraints

- `1 <= n <= 10^9`
