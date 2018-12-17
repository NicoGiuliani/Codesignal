<div class="markdown"><p>Let's define a <strong>multi-divisor sequence</strong> as a sequence of at least 2 numbers where each number is either</p>
<ol>
<li>a divisor of the previous number, or</li>
<li>a multiple of the number before that</li>
</ol>
<p>So <code>[10, 5, 20, 4]</code> is a multi-divisor sequence (<code>5</code> is a divisor of <code>10</code>, <code>20</code> is a multiple of <code>10</code>, and <code>4</code> is a divisor of <code>20</code>), but <code>[3, 7, 11]</code> isn't (none of these numbers are divisors or multiples of each other).</p>
<p>Given a sequence of numbers, your task is to find the first element where it <em>fails</em> to be a multi-divisor sequence. Or return <code>-1</code> if the whole thing is a multi-divisor sequence</p>
<p><span style="color:#44BFA3;font-size:1.4em;">Example</span></p>
<ul>
<li>
<p>For <code>nums = [3, 1, 6, 2, 42, 21, 7]</code> the output should be <code>multiDivisorSequence(nums) = -1</code>.</p>
<p><img src="https://codesignal.s3.amazonaws.com/uploads/1544736184921/multiDivisor1.png" alt="example 1"></p>
<p>This is a multi-divisor sequence the whole way through.</p>
</li>
<li>
<p>For <code>nums = [35, 5, 35, 25, 7, 175]</code> the output should be <code>multiDivisorSequence(nums) = 7</code>.</p>
<p><img src="https://codesignal.s3.amazonaws.com/uploads/1544736185006/multiDivisor2.png" alt="example 2"></p>
<p>Because <code>7</code> isn't a divisor of <code>25</code> or a multiple of <code>35</code>, it's the first element where this fails to be a multi-divisor sequence.</p>
</li>
</ul>
<p><span style="color:#44BFA3;font-size:1.4em;">Input / Output</span></p>
<ul>
<li>
<p><strong>[execution time limit] 4 seconds (js)</strong></p>
</li>
<li>
<p><strong>[input] array.integer nums</strong></p>
<p>An array of positive integers.</p>
<p><em>Guaranteed constraints:</em><br>
<code>2 ≤ nums.length ≤ 10<sup>5</sup></code><br>
<code>1 ≤ nums[i] ≤ 10<sup>6</sup></code></p>
</li>
<li>
<p><strong>[output] integer</strong></p>
<ul>
<li>An integer representing the first element where <code>nums</code> fails to be a multi-divisor sequence (or <code>-1</code> if it never fails).</li>
</ul>
</li>
</ul>
</div>
