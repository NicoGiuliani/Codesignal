<div class="markdown"><p>In its effort to push the limits of file compression, Dropbox recently developed a lossless compression algorithm for H.264 and JPEG files. Since you are thinking about applying for a job at Dropbox, you decided to experiment with simple lossless compression as part of your interview prep.</p>
<p>One of the most widely known approaches in the field of compression algorithms is <em>sliding window compression</em>. It works as follows:</p>
<ul>
<li>Consider characters one by one. Let the current character index be <code>i</code>.</li>
<li>Take the last <code>width</code> characters before the current one (i.e. <code>s[i - width, i - 1]</code>, where <code>s[i, j]</code> means the <a href="keyword://substring" target="_blank">substring</a> of <code>s</code> from index <code>i</code> to index <code>j</code>, both inclusive), and call it <em>the window</em>. If there are less than <code>width</code> characters before the current one, then you should use <code>s[0, i - 1]</code> as <em>the window</em>.</li>
<li>Find such <code>startIndex</code> and <code>length</code> that <code>s[i, i + length - 1] = s[startIndex, startIndex + length - 1]</code> and <code>s[startIndex, startIndex + length - 1]</code> is contained within <em>the window</em>. If there are several such pairs, choose the one with the largest <code>length</code>. If there still remains more than one option, choose the one with the smallest <code>startIndex</code>.</li>
<li>If the search was successful, append <code>"(startIndex,length)"</code> to the result and move to the index <code>i + length</code>.</li>
<li>Otherwise, append the current character to the result and move on to the next one.</li>
</ul>
<p>Given a string, apply <em>sliding window compression</em> to it.</p>
<p><span style="color:#44BFA3;font-size:1.4em;">Example</span></p>
<ul>
<li>
<p>For <code>inputString = "abacabadabacaba"</code> and <code>width = 7</code>, the output should be<br>
<code>losslessDataCompression(inputString, width) = "ab(0,1)c(0,3)d(4,3)c(8,3)"</code>.</p>
<ul>
<li>Step 1: <code>i = 0, inputString[i] = 'a', window = ""</code>. <code>'a'</code> is not contained within <em>the window</em>, so it is appended to the result.</li>
<li>Step 2: <code>i = 1, inputString[i] = 'b', window = "a"</code>. <code>'b'</code> is not contained within <em>the window</em>, so it is appended to the result.</li>
<li>Step 3: <code>i = 2, inputString[i] = 'a', window = "ab"</code>. <code>'a'</code> can be found in <em>the window</em>. <code>'a'</code> in <em>the window</em> corresponds to the <code>inputString[0]</code>, so <code>(0,1)</code> representing the <em>substring</em> <code>"a"</code> is appended to the result.</li>
<li>Step 4: <code>i = 3, inputString[i] = 'c', window = "aba"</code>. The same situation as in the first two steps.</li>
<li>Step 5: <code>i = 4, inputString[i] = 'a', window = "abac"</code>. Consider <code>startIndex = 0, length = 3</code>. <code>inputString[startIndex, startIndex + length - 1] = "aba"</code> and it is contained within <em>the window</em>, <code>inputString[i, i + length - 1] = "aba"</code>. Therefore, <code>"(0,3)"</code> should be added to the result. <code>i += length</code>.<br>
<img src="https://codefightsuserpics.s3.amazonaws.com/tasks/losslessDataCompression/img/example1.png?_tm=1532293681720" alt=""></li>
<li>Step 6: <code>i = 7, inputString[i] = 'd', window = inputString[0, 6] = "abacaba"</code>. The same situation as in the first two steps.</li>
<li>Step 7: <code>i = 8, inputString[i] = 'a', window = inputString[1, 7] = "bacabad"</code>. Consider <code>length = 3</code> again. <code>inputString[i, i + b - 1] = "aba"</code>, <code>window[3, 5] = "aba"</code>, and it corresponds to <code>inputString[4, 6]</code> since <code>inputString[0, 2]</code> is no longer within <em>the window</em>. So, <code>"(4,3)"</code> should be appended. <code>i += length</code>.</li>
<li>Step 8: <code>i = 11, inputString[i] = 'c', window = "abadaba"</code>. The same situation as at the first two steps.</li>
<li>Step 9: <code>i = 12, inputString[i] = 'a', window = "badabac"</code>. <code>length = 3, inputString[i, i + length - 1] = "aba"</code>, <code>window[3, 5] = "aba"</code>, and it corresponds to <code>inputString[8, 10]</code>. So, <code>"(8,3)"</code> should be appended. <code>i += length</code>.</li>
</ul>
<p><img src="https://codefightsuserpics.s3.amazonaws.com/tasks/losslessDataCompression/img/example2.png?_tm=1532293681900" alt=""></p>
</li>
<li>
<p>For <code>inputString = "abacabadabacaba"</code> and <code>width = 8</code>, the output should be<br>
<code>losslessDataCompression(inputString, width) = "ab(0,1)c(0,3)d(0,7)"</code>.</p>
<p>In both of the above examples the resulting "compressed" string becomes even longer than the initial one. In fact, <em>sliding window compression</em> proves to be efficient for longer inputs.</p>
</li>
<li>
<p>For <code>inputString = "aaaaaaaaaaaaaaaaaaaaaaaaaaaa"</code> and <code>width = 12</code>, the output should be<br>
<code>losslessDataCompression(inputString, width) = "a(0,1)(0,2)(0,4)(0,8)(4,12)"</code>.</p>
<p>In the last example the resulting string is one character shorter than the input one. It is the shortest possible example of the efficient work of <em>sliding window compression</em>. If the input contained even more letters <code>'a'</code>, then the effect of this approach would be even more considerable.</p>
</li>
</ul>
<p><span style="color:#44BFA3;font-size:1.4em;">Input/Output</span></p>
<ul>
<li>
<p><strong>[execution time limit] 4 seconds (js)</strong></p>
</li>
<li>
<p><strong>[input] string inputString</strong></p>
<p>A non-empty string of lowercase letters.</p>
<p><em>Guaranteed constraints:</em><br>
<code>1 ≤ inputString.length ≤ 40</code>.</p>
</li>
<li>
<p><strong>[input] integer width</strong></p>
<p>A positive integer.</p>
<p><em>Guaranteed constraints:</em><br>
<code>1 ≤ width ≤ 20</code>.</p>
</li>
<li>
<p><strong>[output] string</strong></p>
<ul>
<li>Compressed <code>inputString</code>.</li>
</ul>
</li>
</ul>
</div>
