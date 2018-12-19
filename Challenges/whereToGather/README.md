<div class="markdown"><p>Your family members live all around the world, and you're all planning to get together for the holidays!</p>
<p>You'd like to find the least costly way to congregate at one location, so you're trying to decide who should be the host. You're given an adjacency matrix <code>travelCosts</code>, where <code>travelCosts[i][j]</code> represents the cost for family member <code>i</code> to visit family member <code>j</code>. If it's not possible for <code>i</code> to visit <code>j</code>, then <code>travelCosts[i][j]</code> will be equal to <code>-1</code>.</p>
<p>Your task is to find the minimum total cost for everyone to get together (or return <code>-1</code> if it's not possible).</p>
<p><strong>Note:</strong></p>
<ul>
<li>All travel is direct; we won't consider any layovers or transfers.</li>
<li>If <code>travelCosts[i][j] = -1</code> then <code>i</code> won't be able to visit <code>j</code>, even if there's another index <code>k</code> available such that <code>travelCosts[i][k] ≠ -1</code> and <code>travelCosts[k][j] ≠ -1</code>.</li>
</ul>
<p><span style="color:#44BFA3;font-size:1.4em;">Example</span></p>
<ul>
<li>
<p>For</p>
<pre><code>travelCost = [[ 0, 5, 0], 
              [-1, 0,12], 
              [ 0, 2, 0]]
</code></pre>
<p>the output should be <code>whereToGather(travelCosts) = 7</code>.</p>
<ul>
<li>It's not possible for family member <code>1</code> to visit family member <code>0</code>, so <code>0</code> can't be the host.</li>
<li>If family member <code>1</code> is hosting, then it costs <code>5</code> for guest <code>0</code> to attend, and <code>2</code> for guest <code>2</code> to attend. So the total cost is <code>7</code>.</li>
<li>If family member <code>2</code> is hosting, then <code>0</code> can get there for free, but it costs <code>12</code> for guest <code>1</code> to attend. So the total cost is <code>12</code>, which is not as good as <code>7</code>.</li>
</ul>
<p>So family member <code>1</code> should host the event, for a total cost of <code>7</code>.</p>
</li>
</ul>
<p><span style="color:#44BFA3;font-size:1.4em;">Input / Output</span></p>
<ul>
<li>
<p><strong>[execution time limit] 4 seconds (js)</strong></p>
</li>
<li>
<p><strong>[input] array.array.integer travelCosts</strong></p>
<p>A square matrix of integers, where <code>travelCosts[guest][host]</code> represents the cost for <code>guest</code> to visit <code>host</code>. A <code>-1</code> means <code>guest</code> cannot visit <code>host</code>. It's guaranteed that it doesn't cost anything for a family member to visit themselves.</p>
<p><em>Guaranteed constraints:</em><br>
<code>2 ≤ travelCosts.length ≤ 250</code><br>
<code>travelCosts.length = travelCosts[i].length</code><br>
<code>-1 ≤ travelCosts[i][j] ≤ 10<sup>6</sup></code><br>
<code>travelCosts[i][i] = 0</code></p>
</li>
<li>
<p><strong>[output] integer</strong></p>
<ul>
<li>An integer representing the total minimum cost for everyone to gather together (or <code>-1</code> if it's not possible).</li>
</ul>
</li>
</ul>
</div>
