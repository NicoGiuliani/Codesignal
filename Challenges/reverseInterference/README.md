<p>Since the two broadcasts may have interfered, some of the letters may have been swapped. There could have also been external interference that caused some of the letters to be corrupted.</p>
<p>You've been called in to investigate the interference, so you've been supplied with some test data. Specifically, you're given both of the original broadcasts, as well as both of the received broadcasts, and your task is to find the minimum number of swaps required to restore them.</p>
<ul>
<li>You may only swap characters of equal index; in other words, <code>broadcastA[i]</code> can be swapped with <code>broadcastB[j]</code> only if <code>i = j</code>.</li>
<li>If there are multiple consecutive characters that need to be swapped, up to <strong>three</strong> of them can be done in one move.</li>
<li>If the original broadcasts can't be restored by a series of swaps, return <code>-1</code>.</li>
</ul>
<p><span style="color:#44BFA3;font-size:1.4em;">Example</span></p>
<ul>
<li>
<p>For</p>
<pre><code>originalA  = "ABAB"
originalB  = "CDCD"

broadcastA = "CDAD"
broadcastB = "ABCB"
</code></pre>
<p>the output should be <code>reverseInterference(originalA, originalB, broadcastA, broadcastB) = 2</code>.</p>
<p>The characters at indices <code>0</code>, <code>1</code>, and <code>3</code> have all been swapped. Both <code>0</code> and <code>1</code> can be swapped back in one move, since they're consecutive characters, not exceeding 3 in a row. After that, one more swap will be needed for character <code>3</code>, for a total of 2 swaps.</p>
</li>
<li>
<p>For</p>
<pre><code>originalA  = "ABCDEF"
originalB  = "ZYXWVU"

broadcastA = "AYXWVU"
broadcastB = "ZBCDEF"
</code></pre>
<p>the output should be <code>reverseInterference(originalA, originalB, broadcastA, broadcastB) = 2</code>.</p>
<p>From index <code>1</code> to index <code>5</code>, there are five consecutive characters that need to be swapped. Since there are more than 3 in a row, we'll need to split them up into a group of 3 and a group of 2, so it'll take 2 swaps at least.</p>
</li>
<li>
<p>For</p>
<pre><code>originalA  = "A"
originalB  = "Z"

broadcastA = "X"
broadcastB = "A"
</code></pre>
<p>the output should be <code>reverseInterference(originalA, originalB, broadcastA, broadcastB) = -1</code>.</p>
<p>Even after swapping the characters, the broadcasts won't match the original, so it's not possible for them to be restored. So we return <code>-1</code>.</p>
</li>
</ul>
<p><span style="color:#44BFA3;font-size:1.4em;">Input / Output</span></p>
<ul>
<li>
<p><strong>[execution time limit] 4 seconds (js)</strong></p>
</li>
<li>
<p><strong>[input] string originalA</strong></p>
<p>A string of uppercase English letters representing the first original broadcast.</p>
<p><em>Guaranteed constraints:</em><br>
<code>0 ≤ originalA.length ≤ 10<sup>5</sup></code></p>
</li>
<li>
<p><strong>[input] string originalB</strong></p>
<p>A string of uppercase English letters representing the second original broadcast.</p>
<p><em>Guaranteed constraints:</em><br>
<code>originalB.length = originalA.length</code></p>
</li>
<li>
<p><strong>[input] string broadcastA</strong></p>
<p>A string of uppercase English letters representing the interfered first broadcast.</p>
<p><em>Guaranteed constraints:</em><br>
<code>broadcastA.length = originalA.length</code></p>
</li>
<li>
<p><strong>[input] string broadcastB</strong></p>
<p>A string of uppercase English letters representing the interfered second broadcast.</p>
<p><em>Guaranteed constraints:</em><br>
<code>broadcastB.length = originalA.length</code></p>
</li>
<li>
<p><strong>[output] integer</strong></p>
<ul>
<li>The minimum amount of swaps required to restore the two interfered broadcasts back to their original states (or <code>-1</code> if it's not possible).</li>
</ul>
</li>
</ul>
</div></div>
