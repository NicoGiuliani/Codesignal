<div class="markdown"><p>Your biggest challenge this semester has been your Ancient Egyptian Algebra class. There's no exam for this class; the mark is based only on <strong>assignments</strong>, <strong>quizzes</strong>, and <strong>tests</strong>, and at this point the only thing left for this semester is one final test.</p>
<p>You feel like you've worked your hardest in this class, and it would be nice to take it easy on the final test. It would be even better if you don't have to take the test at all! Your goal at the end of the term is to simply maintain your current letter grade.</p>
<p>The following grading scale is used:</p>
<pre><code>A: [90%, 100%]
B: [80%, 90%)
C: [70%, 80%)
D: [60%, 70%)
F: [0%, 60%)
</code></pre>
<p>All <strong>assignments</strong> are graded out of 10 points, <strong>quizzes</strong> are out of 5 points, and <strong>tests</strong> are out of 100 points.</p>
<p>Given an array <code>weights</code>, indicating how much each component is worth, and a matrix <code>scores</code>, representing the number of points you scored on each assignment, quiz, and test, your task is to find the minimum score that you need to get on the final test to maintain your current grade level.</p>
<ul>
<li>You do not have to take the test if getting a <code>0</code> on it wouldn't drop your grade by a letter. In that case, return <code>0</code>.</li>
<li>You're looking for a whole number of points, so the output should be rounded up to the nearest integer.</li>
<li>Scores are given as point values (not percentages).</li>
</ul>
<p><span style="color:#44BFA3;font-size:1.4em;">Example</span></p>
<ul>
<li>
<p>For <code>weights = [10, 15, 75]</code> and <code>scores = [[10,10,10,10,10,10,10,10,10,10], [5,5,5,5,5], [100,96,90]]</code>, the output should be <code>finalSlacker(weights, scores) = 61</code>.</p>
<p>Your current averages for assignments, quizzes, and tests are <code>100%</code>, <code>100%</code>, and <code>95.3%</code> respectively, so your grade is <code>1.00 * 10 + 1.00 * 15 + 0.953 * 75 = 96.5%</code>, which places you in the <code>A</code> range.</p>
<p><img src="https://codesignal.s3.amazonaws.com/uploads/1538676749937/finalSlacker.png" alt="example"></p>
<p>The lowest mark you can get while maintaining an <code>A</code> is <code>90%</code>, and the lowest test score that'll give a grade that high is <code>61%</code>, so the output should be <code>61</code>.</p>
</li>
</ul>
<p><span style="color:#44BFA3;font-size:1.4em;">Input / Output</span></p>
<ul>
<li>
<p><strong>[execution time limit] 4 seconds (js)</strong></p>
</li>
<li>
<p><strong>[input] array.integer weights</strong></p>
<p>An array of integers representing the weights of each component, in the order: assignments, quizzes, tests.</p>
<p><em>Guaranteed Constraints:</em><br>
<code>weights.length == 3</code><br>
<code>0 ≤ weights[i] ≤ 100</code><br>
<code>weights[0] + weights[1] + weights[2] == 100</code></p>
</li>
<li>
<p><strong>[input] array.array.integer scores</strong></p>
<p>An array containing the arrays of raw point values in the order of assignment scores, quiz scores, and test scores.</p>
<p><em>Guaranteed Constraints:</em><br>
<code>scores.length == 3</code><br>
<code>1 ≤ scores[i].length ≤ 100</code><br>
<code>0 ≤ scores[0][j] ≤ 10</code><br>
<code>0 ≤ scores[1][j] ≤ 5</code><br>
<code>0 ≤ scores[2][j] ≤ 100</code></p>
</li>
<li>
<p><strong>[output] integer</strong></p>
<ul>
<li>An integer representing the minimum whole number of points that you need to get on the final test so that your grade won't drop by a letter.</li>
</ul>
</li>
</ul>
</div>
