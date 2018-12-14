<p>You're almost finished your first semester at computer school - the only thing left is to write the exam for your data structures course!</p>
<p>To get a better idea of what you need to study, you'd like to see where you struggled the most. So your goal is to write an algorithm that shows what your grade was at each point in time throughout the course.</p>
<p>Your instructor's marking philosophy is that they <em>only</em> care about consistency, so they'll be judging your performance according to your <a href="keyword://mode" target="_blank">mode</a> mark in the course (based on all assignments and tests).</p>
<p>Given <code>scores</code>, an array of integers representing all test and assignment scores, your task is to return an array of integers where <code>output[i]</code> represents the <strong>mode</strong> grade of all marks up to (and including) <code>scores[i]</code>. <strong>Your instructor is a generous marker, so if there's a tie for the mode, your grade is the highest among them.</strong></p>
<p><span style="color:#44BFA3;font-size:1.4em;">Example</span></p>
<ul>
<li>
<p>For <code>scores = [75, 81, 75, 90]</code> the output should be <code>modeScores(scores) = [75, 81, 75, 75]</code>.</p>
<p>After each score is entered, the mode is recalculated as follows:</p>
<ul>
<li>For <code>[75]</code>, the mode is <code>75</code> since it's the only element.</li>
<li>For <code>[75, 81]</code>, the mode is <code>81</code> since it's greater than <code>75</code>.</li>
<li>For <code>[75, 81, 75]</code>, the mode is <code>75</code> (most frequent element).</li>
<li>For <code>[75, 81, 75, 90]</code>, the mode is <code>75</code> (still the most frequent element).</li>
</ul>
</li>
</ul>
<p><span style="color:#44BFA3;font-size:1.4em;">Input / Output</span></p>
<ul>
<li>
<p><strong>[execution time limit] 4 seconds (js)</strong></p>
</li>
<li>
<p><strong>[input] array.integer scores</strong></p>
<p>An array of integers representing your test and assignment grades from throughout the course (in chronological order).</p>
<p><em>Guaranteed constraints:</em><br>
<code>0 ≤ scores.length ≤ 5 · 10<sup>4</sup></code><br>
<code>0 ≤ scores[i] ≤ 10<sup>6</sup></code></p>
</li>
<li>
<p><strong>[output] array.integer</strong></p>
<ul>
<li>An array of integers where <code>output[i]</code> represents the <strong>mode</strong> score in the course, up to and including <code>scores[i]</code>.</li>
</ul>
</li>
</ul>
</div>
