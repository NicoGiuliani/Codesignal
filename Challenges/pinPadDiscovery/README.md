<div class="markdown"><p>Certain banking sites display a 5-button login page for users to enter their 4-digit PIN (the secret <strong>P</strong>ersonal <strong>I</strong>dentification <strong>N</strong>umber used to access the site).</p>
<p>The ten digits, <code>0 - 9</code>, are randomly shuffled and a pair of digits is placed in each of the 5 buttons, without repetition.</p>
<p>When entering each digit of his or her PIN, the user has to click on the particular button containing that digit.</p>
<p>A sample login page is:</p>
<p><img src="https://i.imgur.com/msfn2Q9.png" alt="PIN Pad"></p>
<p>For example, if my PIN were "1618", I would click on <code>(1 or 5)</code>, <code>(6 or 9)</code>, <code>(1 or 5)</code>, and <code>(7 or 8)</code> in this order.</p>
<p>If a curious onlooker observed your button clicks, he or she would not be able to immediately guess your PIN--there are 16 possible choices.</p>
<p>It's not a huge number, but you want to show that this system is extremely fragile when someone knows more than one successful login sequence.</p>
<p>A bank startup wants to see empirical evidence and have enlisted your help to analyze some real-world data (the login details of several users).</p>
<p>Each test case's input is an array of successful logins for a particular user. The PIN does not change within each test case.</p>
<p>Each one of these successful logins is an array of 4 strings, each containing the pair of digits that was shown on the button clicked. The buttons were clicked in the order given in the array.</p>
<p>You may assume the site produced a valid set of buttons. A successful login will not use all buttons.</p>
<p>Your task is to return a string representing the user's PIN, deducing as many digits as possible. Wherever you are unsure, use a <code>?</code> in its place.</p>
<p><span style="color:#44BFA3;font-size:1.4em;">Examples</span></p>
<ul>
<li>
<p>For <code>logins = [["15", "69", "15", "78"]]</code> the output should be <code>pinPadDiscovery(logins) = "????"</code>.</p>
<p>This is the result of the login with PIN <code>1618</code> described above. Since there was only one login, we can't conclusively deduce any of the numbers in the PIN. Therefore, you should return <code>"????"</code>.</p>
</li>
<li>
<p>For</p>
<pre><code>logins: [["58", "24", "06", "24"], 
         ["08", "24", "56", "24"]]
</code></pre>
<p>the output should be <code>pinPadDiscovery(logins) = "8?6?"</code>.</p>
<p><code>8</code> is repeated in the first position, and <code>6</code> is repeated in the third position. However, <code>24</code> was clicked in the second and last positions, and we're uncertain whether the PIN is <code>8262</code>, <code>8264</code>, <code>8462</code>, or <code>8464</code>. You should return <code>"8?6?"</code>.</p>
</li>
<li>
<p>For</p>
<pre><code>logins: [["23", "17", "58", "17"], 
         ["39", "14", "05", "14"], 
         ["37", "01", "59", "01"], 
         ["37", "18", "56", "18"]]
</code></pre>
<p>the output should be <code>pinPadDiscovery(logins) = "3151"</code>.</p>
<p>The repeated digits are more evident, and we can conclude that the PIN is <code>3151</code>, so return <code>"3151"</code>.</p>
</li>
</ul>
<p><span style="color:#44BFA3;font-size:1.4em;">Input / Output</span></p>
<ul>
<li>
<p><strong>[execution time limit] 4 seconds (js)</strong></p>
</li>
<li>
<p><strong>[input] array.array.string logins</strong></p>
<p>An array consisting of the user's successful logins, where each successful login is an array of length 4 representing the buttons pressed, in the given order.</p>
<p><em>Guaranteed constraints:</em><br>
<code>1 ≤ logins.length ≤ 1000</code><br>
<code>logins[i].length = 4</code></p>
</li>
<li>
<p><strong>[output] string</strong></p>
<ul>
<li>The user's PIN, with <code>?</code> in places where the exact digit could not be determined.</li>
</ul>
</li>
</ul>
</div>
