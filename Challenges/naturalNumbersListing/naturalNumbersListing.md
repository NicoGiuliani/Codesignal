<div class="markdown"><p>A pairing function can be used to describe a relation between the natural numbers and the set of pairs of natural numbers (often used to prove that the set of pairs is countably infinite).</p>
<p>One example is to list the natural numbers in the following way:</p>
<ol>
<li>Start with <code>1</code>.</li>
<li>Add on the right a diagonal of length two numbered from bottom to top.</li>
<li>Add on the right a diagonal of length three numbered from top to bottom.</li>
<li>Continue with step 2 with diagonal length increased by two.</li>
</ol>
<p>We'll continue this process until we reach the given number <code>n</code> (a positive integer). So for example, if <code>n = 13</code>, the figure would look like this:</p>
<pre><code>11
10  12
 4   9  13
 3   5   8
 1   2   6   7
</code></pre>
<p>For the given <code>n</code>, your task is to return the sum of the numbers in the bottom row.</p>
<p><span style="color:#44BFA3;font-size:1.4em;">Example</span></p>
<ul>
<li>
<p>For <code>n = 3</code> the output should be <code>naturalNumbersListing(n) = 3</code>.</p>
<p>When we stop the listing at <code>n = 3</code>, in the bottom row we'll have <code>1 + 2 = 3</code>.</p>
</li>
<li>
<p>For <code>n = 6</code> the result is <code>naturalNumbersListing(n) = 9</code>.</p>
<p>When we stop the listing at <code>n = 6</code>, we have written <code>1 + 2 + 6 = 9</code> in the bottom row.</p>
</li>
</ul>
<p><span style="color:#44BFA3;font-size:1.4em;">Input / Output</span></p>
<ul>
<li>
<p><strong>[execution time limit] 4 seconds (js)</strong></p>
</li>
<li>
<p><strong>[input] integer n</strong></p>
<p>An integer representing the number where the listing described above is stopped.</p>
<p><em>Guaranteed Constraints:</em><br>
<code>1 ≤ n ≤ 2 · 10<sup>6</sup></code></p>
</li>
<li>
<p><strong>[output] integer</strong></p>
<ul>
<li>The sum of the numbers in the bottom line of the triangle constructed above.</li>
</ul>
</li>
</ul>
</div>
