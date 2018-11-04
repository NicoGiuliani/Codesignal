<div class="markdown"><p>You have just finished Trick-or-Treating, and you cannot wait to enjoy all of the candy that you have gotten. However, there's one problem - you can get sugar high from eating too much candy! You would like to enjoy as many pieces of candy as possible at once before you get sugar high.</p>
<p>You are given an array of integers, <code>candies</code>, where each element represents the grams of sugar that each candy has. You are also given a <code>threshold</code> which is how many grams of sugar that you can consume at once before you get sugar high. You task is to output an array of indices of the candies that you can enjoy at once before crossing your sugar high <code>threshold</code>.</p>
<p>Note:</p>
<ul>
<li>Your main priority is to eat the maximum number of candies possible, but if there are multiple ways of doing this, choose the one with the fewest grams of sugar total.</li>
<li>If there's still a tie, choose the lower indices.</li>
</ul>
<p><span style="color:#44BFA3;font-size:1.4em;">Example</span></p>
<ul>
<li>
<p>For <code>candies = [33, 20, 12, 19, 29]</code> and <code>threshold = 33</code>, the output should be <code>sugarHigh(candies, threshold) = [2, 3]</code>.</p>
<p>Although <code>[1, 2]</code> is also valid, The candies at indices <code>2</code> and <code>3</code> have a lesser sum (<code>12 + 19 = 31</code>) than the candies at indices <code>1</code> and <code>2</code> (<code>20 + 12 = 32</code>).</p>
</li>
<li>
<p>For <code>candies = [62, 67, 100]</code> and <code>threshold = 8</code>, the output should be <code>sugarHigh(candies, threshold) = []</code>.</p>
<p>All of the candies have more sugar than you can handle, so you cannot have any candy ☹️.</p>
</li>
<li>
<p>For <code>candies = [16, 39, 67, 16, 38, 71]</code> and <code>threshold = 17</code>, the output should be <code>sugarHigh(candies, threshold) = [0]</code>.</p>
<p>Although index <code>3</code> is also valid, the first candy in the list appeared earlier.</p>
</li>
<li>
<p>For <code>candies = [16, 3, 14, 17, 11]</code> and <code>threshold = 99</code>, the output should be <code>sugarHigh(candies, threshold) = [0, 1, 2, 3, 4]</code>.</p>
<p>The candies that you collected have a total of <code>16 + 3 + 14 + 17 + 11 = 72</code> grams of sugar compared to your threshold of <code>99</code> grams, so you can have all of your candy 😀!</p>
</li>
</ul>
<p><span style="color:#44BFA3;font-size:1.4em;">Input / Output</span></p>
<ul>
<li>
<p><strong>[execution time limit] 4 seconds (js)</strong></p>
</li>
<li>
<p><strong>[input] array.integer candies</strong></p>
<p>An array of integers representing the sugar content of each candy, in grams.</p>
<p><em>Guaranteed constraints:</em><br>
<code>0 ≤ candies.length ≤ 10<sup>5</sup></code><br>
<code>0 ≤ candies[i] ≤ 100</code></p>
</li>
<li>
<p><strong>[input] integer threshold</strong></p>
<p>An integer representing the maximum amount of sugar you can consume, in grams.</p>
<p><em>Guaranteed constraints:</em><br>
<code>1 ≤ threshold ≤ 10<sup>9</sup></code></p>
</li>
<li>
<p><strong>[output] array.integer</strong></p>
<ul>
<li>A sorted array of indices of the candies you can eat.</li>
</ul>
</li>
</ul>
</div>
