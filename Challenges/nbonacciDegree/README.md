<div class="markdown"><p>You probably know about the famous Fibonacci sequence, which involves generating terms by adding up the previous two terms. But did you know that the concept can be extended to the general <a href="http://oeis.org/wiki/N-bonacci_numbers" target="_blank">n-bonacci numbers</a>, where each term is the sum of the previous <code>n</code> terms?</p>
<p>For example, <code>[1, 1, 1, 3, 5, 9, 17, 31]</code> is a <code>3</code>-bonacci sequence, since each term is the sum of the previous <code>3</code> terms (except for the first 3 terms).</p>
<p>Given a sequence of numbers (in the form of an array of integers), your task is to find the "degree" of the <code>n</code>-bonacci sequence (in other words, find the value of <code>n</code>). If the sequence does not form an <code>n</code>-bonacci sequence, return <code>-1</code>.</p>
<p><span style="color:#44BFA3;font-size:1.4em;">Example</span></p>
<ul>
<li>
<p>For <code>sequence = [1, 2, 3]</code>, the output should be <code>nbonacciDegree(sequence) = 2</code>.</p>
<p>It's not a very long sequence, but since <code>1 + 2 = 3</code>, it qualifies as a <code>2</code>-bonacci sequence, so the answer is <code>2</code>.</p>
</li>
<li>
<p>For <code>sequence = [0, 6, -2, 3, 7, 14, 22, 46, 89, 171, 328, 634, 1222, 2355]</code>, the output should be <code>nbonacciDegree(sequence) = 4</code>.</p>
<p>After the first four terms, each term of the sequence is the sum of the previous 4 terms, so the answer is <code>4</code>.</p>
</li>
<li>
<p>For <code>sequence = [1, 2, 5]</code>, the output should be <code>nbonacciDegree(sequence) = -1</code>.</p>
<p>This sequence does not qualify as <code>n</code>-bonacci, since none of the terms are sums of any number of previous terms.</p>
</li>
</ul>
<p><span style="color:#44BFA3;font-size:1.4em;">Input / Output</span></p>
<ul>
<li>
<p><strong>[execution time limit] 4 seconds (js)</strong></p>
</li>
<li>
<p><strong>[input] array.integer sequence</strong></p>
<p>A sequence of integers that might be <code>n</code>-bonacci.</p>
<p><em>Guaranteed constraints:</em><br>
<code>2 ≤ sequence.length ≤ 10<sup>4</sup></code><br>
<code>-10<sup>9</sup> ≤ sequence[i] ≤ 10<sup>9</sup></code></p>
</li>
<li>
<p><strong>[output] integer</strong></p>
<ul>
<li>An integer representing the "degree" of the <code>n</code>-bonacci sequence (ie: the sequence has the form that each term is the sum of the previous <code>n</code> terms), or <code>-1</code> if the sequence isn't <code>n</code>-bonacci.</li>
</ul>
</li>
</ul>
<p><strong>[JavaScript (ES6)] Syntax Tips</strong></p>
</div>
