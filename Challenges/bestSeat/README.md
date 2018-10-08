<div class="markdown"><p>You've just walked into your 17th-century quantum cryptography class. The bell hasn't rung yet, but it's close, so there aren't many seats left! You'd like to choose a spot near your friends if possible.</p>
<p>The classroom is represented by an overhead map, in the form of a matrix of integers between <code>-1</code> and <code>9</code> inclusive.</p>
<p><strong>Legend:</strong></p>
<ul>
<li><code>-1</code> represents an empty seat - you can sit here.</li>
<li><code>0</code> represents floor space - you can't sit here.</li>
<li>Any other number between <code>1</code> and <code>9</code> means a classmate is sitting here, and the numerical value represents how friendly you are with that classmate.</li>
</ul>
<p>Given <code>classLayout</code>, your task is to return the indices of the spot where you should sit to maximize the friendliness of your immediate neighbours (up, down, left, right, or diagonally).</p>
<p>In the event of a tie, you'd prefer to sit closer to the front of the class (ie: choose the option with the lower row index), and if there's still a tie, you'd prefer to be closer to the window on the west wall of the classroom (ie: choose the option with the lower column index).</p>
<p>If there's nowhere for you to sit, return <code>[-1, -1]</code>.</p>
<p><span style="color:#44BFA3;font-size:1.4em;">Example</span></p>
<ul>
<li>
<p>For</p>
<pre><code>classLayout = [[0,0,0,0,0,0,0,0,0,0], 
               [0,0,0,0,0,0,0,0,0,0], 
               [0,3,6,0,3,-1,0,2,3,0], 
               [0,0,0,0,0,0,0,0,0,0], 
               [0,8,3,0,8,8,0,9,7,0], 
               [0,0,0,0,0,0,0,0,0,0], 
               [0,-1,3,0,5,1,0,8,1,0], 
               [0,0,0,0,0,0,0,0,0,0], 
               [0,2,-1,0,3,4,0,4,5,0], 
               [0,0,0,0,0,0,0,0,0,0]]
</code></pre>
<p>the output should be <code>[2, 5]</code>.</p>
<p><img src="https://codesignal.s3.amazonaws.com/uploads/1538848454533/bestSeat1.png" alt="example 1"></p>
<p>The seats available at <code>[2, 5]</code> and <code>[6, 1]</code> would both provide the maximum friendliness value of <code>3</code>, but since <code>[2, 5]</code> is closer to the front of the class, it's the winner.</p>
</li>
<li>
<p>For</p>
<pre><code>classLayout = [[0,0,0,0,0,0,0], 
               [0,2,0,0,0,4,0], 
               [0,5,0,0,0,9,0], 
               [0,8,8,8,9,-1,0], 
               [0,0,0,0,0,0,0], 
               [0,6,0,0,0,7,0], 
               [0,9,-1,6,6,7,0], 
               [0,0,0,0,0,0,0], 
               [0,1,0,0,0,7,0], 
               [0,8,9,8,-1,9,0], 
               [0,0,0,0,0,0,0]]
</code></pre>
<p>the output should be <code>bestSeat(classLayout) = [9, 4]</code>.</p>
<p><img src="https://codesignal.s3.amazonaws.com/uploads/1538848477848/bestSeat2.png" alt="example 2"></p>
<p>Although the seat at <code>[3, 5]</code> would be next to two of your best friends, the total friendliness would be greater at <code>[9, 4]</code> since there are three classmates in the region, for a total of <code>8 + 7 + 9 = 24</code>.</p>
</li>
<li>
<p>For</p>
<pre><code>classLayout = [[0,0,0,0,0,0,0,0,0,0], 
               [0,6,7,1,6,2,9,7,4,0], 
               [0,0,0,0,0,0,0,0,0,0], 
               [0,5,5,6,1,4,6,2,7,0], 
               [0,0,0,0,0,0,0,0,0,0], 
               [0,6,3,3,6,9,4,2,7,0], 
               [0,0,0,0,0,0,0,0,0,0], 
               [0,9,2,7,7,2,1,3,7,0], 
               [0,0,0,0,0,0,0,0,0,0], 
               [0,6,9,1,5,8,7,8,7,0]]
</code></pre>
<p>the output should be <code>bestSeat(classLayout) = [-1, -1]</code>.</p>
<p><img src="https://codesignal.s3.amazonaws.com/uploads/1538848477958/bestSeat3.png" alt=""></p>
<p>There's nowhere for you to sit! Return <code>[-1, -1]</code>.</p>
</li>
</ul>
<p><span style="color:#44BFA3;font-size:1.4em;">Input / Output</span></p>
<ul>
<li>
<p><strong>[execution time limit] 4 seconds (js)</strong></p>
</li>
<li>
<p><strong>[input] array.array.integer classLayout</strong></p>
<p>A matrix of integers representing an overhead view of the classroom.</p>
<p><em>Guaranteed constraints:</em><br>
<code>1 ≤ classLayout.length ≤ 1000</code><br>
<code>1 ≤ classLayout[i].length ≤ 100</code></p>
</li>
<li>
<p><strong>[output] array.integer</strong></p>
<ul>
<li>The coordinates of the best seat, in the form <code>[row, col]</code>.</li>
</ul>
</li>
</ul>
</div>
