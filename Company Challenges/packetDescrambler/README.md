<div class="markdown"><p>SpaceX has built a reliable Earth-Mars communication system that uses <code>n</code> links to transmit messages that are broken into fragments. The messages are sequences of ASCII characters that terminate with <code>'#'</code>. <code>n</code> copies of each fragment are sent, meaning that normally <code>n</code> copies of each fragment are received (one per link). However, some fragments may be lost. It's also possible that they can be corrupted or arrive out of order.</p>
<p>Each fragment contains the following data:</p>
<ul>
<li><code>seq</code> - The sequential number of the fragment in the message. This part of the fragment is never corrupted.</li>
<li><code>fragmentData</code> - A single character from the message contained in the fragment.</li>
</ul>
<p>Implement a function that receives an array of message fragments and reconstructs the original message according to the following rules:</p>
<ol>
<li>For each sequential number, pick the data character that is present in more than <code>50%</code> of the fragments with that sequential number. Note that we calculate <code>50%</code> based on the total number of copies that were sent (which is always equal to <code>n</code>), while the number of received fragments can be smaller.</li>
<li>The last fragment of the message that's been reconstructed according to rule <code>1</code> (and no other fragment) contains <code>'#'</code>.</li>
<li>There can be no gaps in the message, so all of the fragments numbered <code>0</code>, <code>1</code>, <code>2</code>, ..., <code>&lt;number of the last fragment&gt;</code> should be restored.</li>
</ol>
<p>If the message cannot be reconstructed, return an empty string. Otherwise, return the reconstructed message.</p>
<p><span style="color:#44BFA3;font-size:1.4em;">Example</span></p>
<p>For <code>seq = [1, 1, 0, 0, 0, 2, 2, 2]</code>, <code>fragmentData = ['+', '+', 'A', 'A', 'B', '#', '#', '#']</code>, and <code>n = 3</code>, the output should be<br>
<code>packetDescrambler(seq, fragmentData, n) = "A+#"</code>.</p>
<ul>
<li>For the fragment with index <code>0</code> (sequential number), 2 <code>'A'</code>s and 1 <code>'B'</code> were received. So, the number of fragments with <code>'A'</code> is more than <code>50%</code> out of <code>n = 3</code>. Both parts of rule <code>1</code> hold, meaning that the initial character of the message is <code>'A'</code>.</li>
<li>For the fragment with index <code>1</code> (sequential number), 2 <code>'+'</code>s were received and the third fragment was lost. Again, the number of fragments with <code>'+'</code> is more than <code>50%</code> out of <code>n = 3</code>. Therefore, the next character of the message is <code>'+'</code>.</li>
<li>For the fragment with index <code>2</code> (sequential number), 3 <code>'#'</code>s were received. All the sent fragments agree, so rule <code>1</code> holds. There are no fragments with a sequential number of more than <code>2</code>, meaning that this is the last character. Since this character is <code>'#'</code>, rule <code>2</code> holds as well.</li>
<li>Note that there were no gaps before <code>'#'</code>, so rule <code>3</code> holds. Hence, the message can be considered correctly reconstructed.</li>
</ul>
<p><span style="color:#44BFA3;font-size:1.4em;">Input/Output</span></p>
<ul>
<li>
<p><strong>[execution time limit] 4 seconds (js)</strong></p>
</li>
<li>
<p><strong>[input] array.integer seq</strong></p>
<p>An array of non-negative integers. <code>seq[i]</code> contains the sequential number of the <code>i<sup>th</sup></code> received fragment.</p>
<p><em>Guaranteed constraints:</em><br>
<code>1 ≤ seq.length ≤ 10<sup>5</sup></code>,<br>
<code>0 ≤ seq[i] &lt; 25000</code>.</p>
</li>
<li>
<p><strong>[input] array.char fragmentData</strong></p>
<p>An array of characters. <code>fragmentData[i]</code> contains a printable ASCII character transmitted in the <code>i<sup>th</sup></code> received fragment.</p>
<p><em>Guaranteed constraints:</em><br>
<code>fragmentData.length = seq.length</code>.</p>
</li>
<li>
<p><strong>[input] integer n</strong></p>
<p>The number of links (in other words, the number of copies of the message that were sent).</p>
<p><em>Guaranteed constraints:</em><br>
<code>3 ≤ n ≤ 25000</code>.</p>
</li>
<li>
<p><strong>[output] string</strong></p>
<ul>
<li>Return the reconstructed message. If the message can't be reconstructed correctly, return an empty string.</li>
</ul>
</li>
</ul>
</div>
