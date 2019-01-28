int replaceDigitWithPrime(int n) {
    int[] primes = {2, 3, 5, 7, 11, 13, 17, 19, 23, 29};
    int total = 0;
    int exp = 0;
    int place;
    
    // splits the integer into an array of digits
    String[] temp = Integer.toString(n).split("");
    int[] digits = new int[temp.length];
    
    // takes the values from temp and stores them in digits in reverse order
    for (int i = digits.length - 1; i > -1; i--) {
        digits[temp.length - 1 - i] = Integer.parseInt(temp[i]);
    }
    
    // converts each digit to its prime equivalent times its numerical place
    for (int i : digits) {
        place = 1;
        for (int j = 0; j < exp; j++) {
            place *= 10;
        }
        total += primes[i] * place;
        exp++;
    }
    
    return total;
}
