<div class="markdown"><p>There's been a fresh snowfall, so it's time for you to visit your favourite sledding hill!</p>
<p>There are several different runs available, and you prefer some of them over others. More specifically, your enjoyment of each of the runs is represented using numerical values, in the array <code>enjoyability</code>.</p>
<p>But due to repetitiveness, each time you sled down run <code>i</code>, the value of <code>enjoyability[i]</code> will decrease by <code>1</code>.</p>
<p>You have time for as many as <code>maxRuns</code> total, and your task is to find the maximum possible total enjoyment you can experience throughout the day!</p>
<p><strong>Notes:</strong></p>
<ul>
<li>Assume all runs take the same amount of time, and that there's no extra time required to switch between runs.</li>
<li>You're allowed to sled down fewer times than <code>maxRuns</code> if you want.</li>
</ul>
<p><span style="color:#44BFA3;font-size:1.4em;">Example</span></p>
<ul>
<li>
<p>For <code>enjoyability = [1, 8, 3]</code> and <code>maxRuns = 5</code>, the output should be <code>sleddingHills(enjoyability, maxRuns) = 30</code>.</p>
<p>You can take as many as <code>5</code> rides, and there's one run that you much prefer over the others, so in this case it makes sense to take all 5 rides down the same course.</p>
<ul>
<li>For the first run, the enjoyability is <code>8</code>, so the total is <code>8</code>.</li>
<li>For the second run, the enjoyability is <code>7</code>, so the total is <code>15</code>.</li>
<li>For the third run, the enjoyability is <code>6</code>, so the total is <code>21</code>.</li>
<li>For the fourth run, the enjoyability is <code>5</code>, so the total is <code>26</code>.</li>
<li>For the fifth run, the enjoyability is <code>4</code>, so the total is <code>30</code>.</li>
</ul>
</li>
<li>
<p>For <code>enjoyability = [1, 19, 8, 20, 18]</code> and <code>maxRuns =4</code>, the output should be <code>sleddingHills(enjoyability, maxRuns) = 76</code>.</p>
<p>This time there are a few different runs that you enjoy a lot, so the decision will be a bit more complicated:</p>
<ul>
<li>For the first run, choose course <code>3</code>, for an enjoyability of <code>20</code>.</li>
<li>For the second run, choose course <code>3</code> again, for an enjoyability of <code>19</code>.</li>
<li>For the third run, switch to course <code>1</code> for an enjoyability of <code>19</code>.</li>
<li>For the fourth run, you could choose courses <code>1</code>, <code>3</code>, or <code>4</code>, since they'll all have an enjoyability of <code>18</code> at this point.</li>
</ul>
<p>So the total is <code>20 + 19 + 19 + 18 = 76</code>. Note that you could do these runs in a different order if you prefer.</p>
</li>
</ul>
<p><span style="color:#44BFA3;font-size:1.4em;">Input / Output</span></p>
<ul>
<li>
<p><strong>[execution time limit] 4 seconds (js)</strong></p>
</li>
<li>
<p><strong>[input] array.integer enjoyability</strong></p>
<p>An array of integers, where <code>enjoyability[i]</code> represents how much you would enjoy sledding down run <code>i</code>.</p>
<p><em>Guaranteed constraints:</em><br>
<code>1 ≤ enjoyability.length ≤ 25</code><br>
<code>0 ≤ enjoyability[i] ≤ 1000</code></p>
</li>
<li>
<p><strong>[input] integer maxRuns</strong></p>
<p>An integer representing the maximum number of times you're able to sled down the hill today.</p>
<p><em>Guaranteed constraints:</em><br>
<code>0 ≤ maxRuns ≤ 200</code></p>
</li>
<li>
<p><strong>[output] integer</strong></p>
<ul>
<li>An integer representing the maximum possible total enjoyment you can have on the sledding hill today!</li>
</ul>
</li>
</ul>
</div>
