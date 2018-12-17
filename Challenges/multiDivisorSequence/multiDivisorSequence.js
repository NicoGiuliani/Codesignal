function multiDivisorSequence(nums) {
    for (let i = 1; i < nums.length; i++) {
        if ((i == 1 && nums[0] % nums[i] != 0) ||
           (nums[i - 1] % nums[i] != 0 && nums[i] % nums[i - 2] != 0)) return nums[i];
    }
    return -1;
}