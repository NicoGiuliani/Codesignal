<p>During the holiday season you go through a lot of candles! You burn many candles of various sizes, represented by the array <code>candleSizes</code>.</p>
<p>You prefer big candles, so you always light the biggest candle available at the time.</p>
<p>For every <code>n</code> candles you burn, you can use the remaining wax to create a new candle! The size of this new candle will depend on the sizes of the <code>n</code> candles you got the wax from. More specifically, the size of the new candle will be equal to the sum of the sizes of the <code>n</code> candles, divided by <code>n + 1</code> (rounded down).</p>
<p>Given <code>candleSizes</code> and <code>n</code>, your task is to find the sum of the sizes of all candles burned!</p>
<p><strong>Notes:</strong></p>
<ul>
<li>If the size of the new candle would be rounded down to zero, there isn't enough wax to make a new candle.</li>
<li>You can't make a new candle with fewer than <code>n</code> leftovers.</li>
</ul>
<p><span style="color:#44BFA3;font-size:1.4em;">Example</span></p>
<ul>
<li>
<p>For <code>candleSizes = [2, 181, 32, 188, 188]</code> and <code>n = 3</code>, the output should be <code>burningCandles(candleSizes, n) = 773</code>.</p>
<ul>
<li>There's a tie for biggest candle, so you'll burn one of the <code>188</code> ones. The total is now <code>188</code> and the remaining candles are <code>[2, 181, 32, 188]</code>.</li>
<li>You can now burn the other <code>188</code> candle. The total is now <code>376</code> and the remaining candles are <code>[2, 181, 32]</code>.</li>
<li>The next biggest candle is <code>181</code>, and since you've now burned <code>3</code> (<code>n</code>) candles, you can make a new one! It will have a size of <code>floor((188 + 188 + 181) / 4) = 139</code>. So the total is now <code>557</code> and the remaining candles are <code>[2, 32, 139]</code>.</li>
<li>You'll burn the <code>139</code> candle next, since it's by far the biggest. The total is now <code>696</code> and the remaining candles are <code>[2, 32]</code>.</li>
<li>The next candle will be the <code>32</code>, so the total is now <code>728</code>, and only <code>[2]</code> remains.</li>
<li>You burn the <code>2</code> next, and it seems like we're all out of candles now, but since you've now burned another <code>3</code> candles, you can make another new one! This one will have a size of <code>floor((139 + 32 + 2) / 4) = 43</code>. So the total is now <code>730</code> with <code>[43]</code> remaining.</li>
<li>You now burn the final candle (<code>43</code>) for a total of <code>773</code>.</li>
</ul>
</li>
</ul>
<p><span style="color:#44BFA3;font-size:1.4em;">Input / Output</span></p>
<ul>
<li>
<p><strong>[execution time limit] 4 seconds (js)</strong></p>
</li>
<li>
<p><strong>[input] array.integer candleSizes</strong></p>
<p>An array of integers representing the sizes of each of your candles. Not in any particular order.</p>
<p><em>Guaranteed constraints:</em><br>
<code>0 ≤ candleSizes.length ≤ 10<sup>4</sup></code><br>
<code>1 ≤ candleSizes[i] ≤ 10<sup>6</sup></code></p>
</li>
<li>
<p><strong>[input] integer n</strong></p>
<p>An integer representing the number of candles you need to burn in order to be able to create a new one from the leftover wax.</p>
<p><em>Guaranteed constraints:</em><br>
<code>2 ≤ n ≤ 10<sup>4</sup></code></p>
</li>
<li>
<p><strong>[output] integer</strong></p>
<ul>
<li>An integer representing the sum of the sizes of all candles burned (including candles you created from leftovers).</li>
</ul>
</li>
</ul>
</div>
