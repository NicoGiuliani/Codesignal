<div class="markdown"><p>This Halloween, you want your costume to be so scary that onlookers will jump at the sight of you! You've almost got it all planned out, but you still need to find a scary mask.</p>
<p>You've been told that facial symmetry is a sign of beauty, so you figure the more asymmetrical your mask is, the scarier it'll be!</p>
<p>You're going mask shopping later today, so to make the process easier, you'd like to write an algorithm that can assess the <em>scariness</em> of a mask just by looking at a picture of it. More specifically, given an array of strings <code>mask</code>, representing what the mask looks like, your task is to return the number of pairs of cells that don't match up symmetrically.</p>
<p><span style="color:#44BFA3;font-size:1.4em;">Example</span></p>
<ul>
<li>
<p>For</p>
<pre><code>mask = ["A    A",
        " O  O ",
        "= WW ="]
</code></pre>
<p>the output should be <code>scariestMask(mask) = 0</code>.</p>
<p><img src="https://codesignal.s3.amazonaws.com/uploads/1540497449945/scariestMask1.png" alt="example 1"></p>
<p>This mask is perfectly symmetrical (and very cute)! It's not scary at all.</p>
</li>
<li>
<p>For</p>
<pre><code>mask = ["     ",
        " @ @ ",
        "  &lt;  ",
        " O   ",
        "     "]
</code></pre>
<p>the output should be <code>scariestMask(mask) = 1</code>.</p>
<p><img src="https://codesignal.s3.amazonaws.com/uploads/1540497450052/scariestMask2.png" alt="example 2"></p>
<p>This mask is mostly symmetrical, but there's one pair of cells that don't match up, so it's just a little bit scary.</p>
</li>
<li>
<p>For</p>
<pre><code>mask = ["@     ''' ",
        "' v**v  @'",
        "  A**A ' '"]
</code></pre>
<p>the output should be <code>scariestMask(mask) = 12</code>.</p>
<p><img src="https://codesignal.s3.amazonaws.com/uploads/1540497450110/scariestMask3.png" alt="example 3"></p>
<p>This mask has a total of <code>12</code> pairs of cells that don't match up symmetrically. It is terrifying.</p>
</li>
</ul>
<p><span style="color:#44BFA3;font-size:1.4em;">Input / Output</span></p>
<ul>
<li>
<p><strong>[execution time limit] 4 seconds (js)</strong></p>
</li>
<li>
<p><strong>[input] array.string mask</strong></p>
<p>An array of strings representing a picture of the mask, taken head-on. All strings in the array are of equal length (like a rectangular matrix).</p>
<p><em>Guaranteed constraints:</em><br>
<code>1≤ mask.length ≤ 20</code><br>
<code>1≤ mask[i].length ≤ 20</code><br>
<code>mask[i][j] ∈ {"A" - "Z", "a" - "z", "0" - "9", "!@#$%^&amp;*()/.,;':[]{}&lt;&gt;", space}</code></p>
</li>
<li>
<p><strong>[output] integer</strong></p>
<ul>
<li>An integer representing how scary the mask is (equal to the number of pairs of cells that don't match up symmetrically).</li>
</ul>
</li>
</ul>
</div>
