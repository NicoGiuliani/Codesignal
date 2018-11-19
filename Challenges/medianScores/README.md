<div class="markdown"><p>To improve your programming skills, you've decided to enroll in computer school, and you're starting out with a fascinating course on algorithms and data structures!</p>
<p>Your instructor's marking philosophy is that they care most about consistency, so they'll be judging your performance according to your <a href="keyword://median" target="_blank">median</a> mark in the course (based on all assignments and tests).</p>
<p>You'd like to be aware of your current standing in the course, so you're hoping to write an algorithm that can recalculate your median grade every time you enter a new mark (ie: every time you receive a graded test or assignment).</p>
<p>Given <code>scores</code>, an array of integers representing all test and assignment scores, your task is to return an array of integers where <code>output[i]</code> represents the median grade after all marks up to (and including) <code>scores[i]</code> have been entered. <strong>Your instructor is a generous marker, so they always round the median up to the nearest integer.</strong></p>
<p><span style="color:#44BFA3;font-size:1.4em;">Example</span></p>
<ul>
<li>
<p>For <code>scores = [100, 20, 50, 70, 45]</code> the output should be <code>medianScores(scores) = [100, 60, 50, 60, 50]</code>.</p>
<p>After each score is entered, the median is recalculated as follows:</p>
<ul>
<li>For <code>[100]</code>, the median is <code>100</code> since it's the only element.</li>
<li>For <code>[20, 100]</code>, the median is <code>(20 + 100)/2 = 60</code> since there's an even number of elements.</li>
<li>For <code>[20, 50, 100]</code>, the median is <code>50</code> (middle element).</li>
<li>For <code>[20, 50, 70, 100]</code>, the median is <code>(50 + 70)/2 = 60</code> (mean of the two middle elements).</li>
<li>For <code>[20, 45, 50, 70, 100]</code>, the median is <code>50</code> again (middle element).</li>
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
<p>An array of integers representing all of your test and assignment grades from the course, in chronological order.</p>
<p><em>Guaranteed constraints:</em><br>
<code>1 ≤ scores.length ≤ 5 · 10<sup>4</sup></code><br>
<code>0 ≤ scores[i] ≤ 10<sup>6</sup></code></p>
</li>
<li>
<p><strong>[output] array.integer</strong></p>
<ul>
<li>An array of integers representing the median grade, rounded up (<code>output[i]</code> is the median of all grades up to index <code>i</code> in <code>scores</code>).</li>
</ul>
</li>
</ul>
</div>
