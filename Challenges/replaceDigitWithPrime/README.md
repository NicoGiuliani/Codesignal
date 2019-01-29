Primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29]

Using an array containing the first ten prime numbers, and beginning from the rightmost digit of the input, each digit will be replaced with the value stored in its corresponding place in the array.
For example, the digit 0 will be replaced with 2, 1 replaced with 3, 2 replaced with 5, etc. 

If a digit is replaced with a value greater than 9, only the value's ones place will take the original digit's spot, while additional places will carry over and be added during the next replacement.

For example, the number 53 will be converted by replacing 3 with 7, and 5 with 13, giving a result of 137. <br/>
However, the number 35 is converted by replacing 5 with 3 (the ones place of 13), and 3 with 7 + 1, resulting in 83.
