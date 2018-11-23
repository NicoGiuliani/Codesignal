<div class="markdown"><p>Little Panda likes candies very much, so his father gives him <code>coins[i]</code> coins on the <code>i<sup>th</sup></code> day to buy some. There is only one candy store in Panda's home town, and on the <code>i<sup>th</sup></code> day they sell <strong>only one candy</strong> with price <code>candies[i][0]</code> and tastiness <code>candies[i][1]</code>.</p>
<p>Little Panda buys the candy on the <code>i<sup>th</sup></code> day if he can afford it and that makes him happier by <code>candies[i][1]</code> points. He saves all the coins left after the purchase to buy more candies later. If he can't afford the candy, it doesn't necessarily make him less happy <em>(obviously it doesn't make him happier anyway)</em>. It only decreases his happiness if he hasn't bought any candy <strong>tastier</strong> than the current one before. In that case, his happiness decreases by <code>candies[i][1]</code> points.</p>
<p>Your task is to find how happy Panda will be after all the days. Panda has <code>0</code> coins before the day number <code>0</code>.</p>
<p><span style="color:#44BFA3;font-size:1.4em;">Example</span></p>
<ul>
<li>
<p>For <code>coins = [10, 10, 10]</code>and <code>candies = [[10, 20], [9, 10], [11, 50]]</code>, the output should be <code>happyPanda(coins, candies) = 80</code></p>
<ul>
<li>Panda takes <code>10</code> coins on day <code>0</code>. He has <code>10</code> coins now, so he buys the candy. At the end of the day he has <code>0</code> coins and <code>20</code> happiness points.</li>
<li>He takes <code>10</code> coins on day <code>1</code> . He has <code>10</code> coins now, so he buys the candy. At the end of the day he has <code>1</code> coin and <code>30</code> happiness points.</li>
<li>He takes <code>10</code> coins on day <code>2</code>. He has <code>11</code> coins now, so he buys the candy. At the end of the day he has <code>0</code> coins and <code>80</code> happiness points.</li>
</ul>
<p>After all the days Panda has <code>80</code> happiness points.</p>
</li>
<li>
<p>For <code>coins = [10, 10, 10]</code> and <code>candies = [[10, 20], [10, 10], [11, 50]]</code>, the output should be <code>happyPanda(coins, candies) = -20</code></p>
<ul>
<li>Panda takes <code>10</code> coins on day <code>0</code>. He has <code>10</code> coins now, so he buys the candy. At the end of the day he has <code>0</code> coins and <code>20</code> happiness points.</li>
<li>He takes <code>10</code> coins on day <code>1</code> . He has <code>10</code> coins now, so he buys the candy. At the end of the day he has <code>0</code> coins and <code>30</code> happiness points.</li>
<li>He takes <code>10</code> coins on day <code>2</code>. He has <code>10</code> coins now, so he <strong>can't</strong> afford the candy. As <code>50 &gt; 20</code> and <code>50 &gt; 10</code>, that makes him less happy by 50 points (since this is tastier than any candy he's bought before). At the end of the day he has <code>0</code> coins and <code>-20</code> happiness points.</li>
</ul>
<p>After all the days Panda has <code>-20</code> happiness points.</p>
</li>
<li>
<p>For <code>coins = [10, 10, 10]</code> and <code>candies = [[10, 20], [10, 10], [11, 20]]</code>, the output should be <code>happyPanda(coins, candies) = 10</code></p>
<ul>
<li>Panda takes <code>10</code> coins on day <code>0</code>. He has <code>10</code> coins now, so he buys the candy. At the end of the day he has <code>0</code> coins and <code>20</code> happiness points.</li>
<li>He takes <code>10</code> coins on day <code>1</code>. He has <code>10</code> coins now, so he buys the candy. At the end of the day he has <code>0</code> coins and <code>30</code> happiness points.</li>
<li>He takes <code>10</code> coins on day <code>2</code>. He has <code>10</code> coins now, so he <strong>can't</strong> afford the candy. As <code>20 = 20</code> and <code>20 &gt; 10</code>, that makes him less happy by <code>20</code> points (since this is as tasty as any candy he's bought before). At the end of the day he has <code>10</code> coins and <code>10</code> happiness points.</li>
</ul>
<p>After all the days Panda has <code>10</code> happiness points.</p>
</li>
</ul>
<p><span style="color:#44BFA3;font-size:1.4em;">Input / Output</span></p>
<ul>
<li>
<p><strong>[execution time limit] 4 seconds (js)</strong></p>
</li>
<li>
<p><strong>[input] array.integer coins</strong></p>
<p>An array of integers where <code>coins[i]</code> represents the number of coins Panda's dad gives him on the <code>i<sup>th</sup></code> day.</p>
<p>Guaranteed constraints:<br>
<code>1 ≤ coins.length ≤ 10<sup>5</sup> </code><br>
<code>0 ≤ coins[i] ≤ 1000 </code></p>
</li>
<li>
<p><strong>[input] array.array.integer candies</strong></p>
<p>An array of 2-element arrays of integers, where <code>candies[i][0]</code> represents the price of the candy in the store on the <code>i<sup>th</sup></code> day and <code>candies[i][1]</code> represents the tastiness of the candy in the store on the <code>i<sup>th</sup></code> day.</p>
<p>Guaranteed constraints:<br>
<code>candies.length = coins.length </code><br>
<code>candies[i].length = 2 </code><br>
<code>0 ≤ candies[i][0] ≤ 1000 </code><br>
<code>0 ≤ candies[i][1] ≤ 1000 </code></p>
</li>
<li>
<p><strong>[output] integer</strong></p>
<ul>
<li>The happiness points of Panda after all the days.</li>
</ul>
</li>
</ul>
</div>
