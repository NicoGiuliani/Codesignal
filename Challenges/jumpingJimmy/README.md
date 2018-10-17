<div class="markdown"><p>Jumping Jimmy is trying to reach the top of a tall tower!</p>
<p>Given an integer <code>jumpHeight</code> representing the maximum vertical distance he can ascend in one jump, and an array <code>tower</code> representing the vertical distances between each floor of the tower, your task is to find the total vertical distance Jimmy is able to travel (until he reaches the top of the tower or isn't able to complete the next jump).</p>
<p><span style="color:#44BFA3;font-size:1.4em;">Example</span></p>
<ul>
<li>
<p>For <code>tower = [3, 1, 2]</code> and <code>jumpHeight = 3</code>, the output should be <code>jumpingJimmy(tower, jumpHeight) = 6</code>.</p>
<p><img src="https://codesignal.s3.amazonaws.com/uploads/1539718522955/jimmy1.gif" alt="example 1"></p>
<p>After reaching the top of the tower, Jimmy has ascended a total distance of <code>3 + 1 + 2 = 6</code>.</p>
</li>
<li>
<p>For <code>tower = [1, 2, 3, 4]</code> and <code>jumpHeight = 2</code>, the output should be <code>jumpingJimmy(tower, jumpHeight) = 3</code>.</p>
<p>Jimmy is able to complete the first two jumps, but he can't clear a gap of size <code>3</code>, so the total vertical distance is <code>1 + 2 = 3</code>.</p>
</li>
<li>
<p>For <code>tower = [5, 1, 8, 2, 4, 3, 1, 9, 8, 5, 1]</code> and <code>jumpHeight = 1</code>, the output should be <code>jumpingJimmy(tower, jumpHeight) = 0</code>.</p>
<p>Jimmy can't even clear the first gap, so he can't ascend the tower at all 😢</p>
</li>
</ul>
<p><span style="color:#44BFA3;font-size:1.4em;">Input / Output</span></p>
<ul>
<li>
<p><strong>[execution time limit] 4 seconds (js)</strong></p>
</li>
<li>
<p><strong>[input] array.integer tower</strong></p>
<p>An array of integers representing the distance <em>between</em> each consecutive pair of floors in the tower.</p>
<p><em>Guaranteed constraints:</em><br>
<code>0 ≤ tower.length ≤ 10<sup>5</sup></code><br>
<code>1 ≤ tower[i] ≤ 10<sup>6</sup></code></p>
</li>
<li>
<p><strong>[input] integer jumpHeight</strong></p>
<p>An integer representing the maximum height that Jimmy can ascend in a single jump.</p>
<p><em>Guaranteed constraints:</em><br>
<code>0 ≤ jumpHeight ≤ 10<sup>6</sup></code></p>
</li>
<li>
<p><strong>[output] integer</strong></p>
<ul>
<li>An integer representing the total vertical displacement between Jimmy's start height (<code>0</code>) and his maximum height (the top of the tower or the first level where he's unable to clear the gap).</li>
</ul>
</li>
</ul>
</div>
