function happyPanda(coins, candies) {
    let hp = 0;
    let leftover = 0;
    let tastiest = 0;
    
    for (let i = 0; i < coins.length; i++) {
        if (coins[i] - candies[i][0] + leftover >= 0) {
            hp += candies[i][1];
            leftover = coins[i] - candies[i][0] + leftover;
            if (candies[i][1] > tastiest) tastiest = candies[i][1];
        } else {
            leftover += coins[i];
            if (candies[i][1] >= tastiest) hp -= candies[i][1];
        }
    }
    return hp;
}