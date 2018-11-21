<div class="markdown"><p>You've been enjoying your time at computer school, and you're now taking an interesting course on quantum encryption.</p>
<p>Your instructor has a marking philosophy that's very different from <a href="https://app.codesignal.com/challenge/BEjXFgMYRt5435RyL" target="_blank">the last course you took</a> - she believes that every grade should influence your final mark, so your performance will be judged according to the <a href="keyword://arithmetic-mean" target="_blank">mean</a> of all your test and assignment grades.</p>
<p>Since you'd like to know how you're doing as the course progresses, you'd like to write an algorithm that calculates your mean grade every time you enter a new mark (ie: every time a graded assignment or test comes back).</p>
<p>Given <code>scores</code>, an array of integers representing all your test and assignment grades, your task is to return an array of integers where <code>output[i]</code> represents the mean of all your scores up to index <code>i</code>. <strong>Your instructor is a harsh marker, so she always rounds the result down to the nearest integer</strong>.</p>
<p><span style="color:#44BFA3;font-size:1.4em;">Example</span></p>
<ul>
<li>
<p>For <code>scores = [100, 20, 50, 70, 45]</code>, the output should be <code>meanScores(scores) = [100, 60, 56, 60, 57]</code>.</p>
<p>After each score is entered, the mean is recalculated as follows:</p>
<ul>
<li>For <code>[100]</code>, the mean is <code>100</code> since it's the only element.</li>
<li>For <code>[100, 20]</code>, the mean is <code>(100 + 20)/2 = 60</code>.</li>
<li>For <code>[100, 20, 50]</code>, the mean is <code>(100 + 20 + 50)/3 = 56.667</code>, which rounds down to <code>56</code>.</li>
<li>For <code>[100, 20, 50, 70]</code>, the mean is <code>(100 + 20 + 50 + 70)/4 = 60</code>.</li>
<li>For <code>[100, 20, 50, 70, 45]</code>, the mean is <code>(100 + 20 + 50 + 70 + 45)/5 = 57</code>.</li>
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
<li>An array of integers representing the mean grade, rounded down (<code>output[i]</code> is the mean of all grades up to index <code>i</code> in <code>scores</code>).</li>
</ul>
</li>
</ul>
</div>
