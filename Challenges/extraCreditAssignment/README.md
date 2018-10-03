<div class="markdown"><p>Ms. Jackson is a talented and inspiring math teacher. She always finds a way to keep even the most disinterested students engaged in her lessons. Today's lesson was on fractions, which tends to be an exhausting subject for most students, so to maintain the class's interest and motivation, she decided to offer extra credit to anyone brave enough to solve her extra-challenging problem on <a href="https://en.wikipedia.org/wiki/Repeating_decimal" target="_blank">repeating decimal numbers</a>.</p>
<p>You've learned that some fractions produce repeating decimals (for example <code>2 / 3 = 0.666...</code>). Ms. Jackson has also taught you that each repeating decimal number can be expressed as a fraction. So with these facts in mind, you'll be given a repeating decimal number, as well as the denominator of the fraction that produced it, and you'll have to find the numerator!</p>
<p>Your friend Bob tends to struggle with math, so he could really use the extra credit, but he's not really sure how to solve this type of problem. You figure Bob might get it after seeing several different examples, so you'd like to write an algorithm for solving this type of problem efficiently, so that Bob can check his answers against your algorithm's results.</p>
<p><strong>Notes:</strong></p>
<ul>
<li>Parentheses will be used to represent the repeating part of the decimal (eg: <code>3.6(81)</code> means <code>3.6818181...</code>)</li>
<li>If the decimal has a repeating part, it'll always begin after the decimal point.</li>
<li>It's guaranteed that for each <code>decimal</code> and <code>denominator</code>, there is a valid integer value for the numerator.</li>
</ul>
<p><span style="color:#44BFA3;font-size:1.4em;">Example</span></p>
<ul>
<li>
<p>For <code>decimal = "0.(3)"</code> and <code>denominator = 3</code>, the output should be <code>1</code>.</p>
<p><img src="https://codesignal.s3.amazonaws.com/uploads/1538421848252/fraction1.png" alt="example 1"></p>
</li>
<li>
<p>For <code>decimal = "0.0(25)"</code> and <code>denominator = 594</code>, the output should be <code>15</code>.</p>
<p><img src="https://codesignal.s3.amazonaws.com/uploads/1538421848677/fraction2.png" alt="example 2"></p>
</li>
<li>
<p>For <code>decimal = "4.6"</code> and <code>denominator = 5</code>, the output should be <code>23</code>.</p>
<p><img src="https://codesignal.s3.amazonaws.com/uploads/1538421849041/fraction3.png" alt="example 3"></p>
</li>
<li>
<p>For <code>decimal = "3.6(81)"</code> and <code>denominator = 264</code>, the output should be <code>972</code>.</p>
<p><img src="https://codesignal.s3.amazonaws.com/uploads/1538421849317/fraction4.png" alt="example 4"></p>
</li>
</ul>
<p><span style="color:#44BFA3;font-size:1.4em;">Input / Output</span></p>
<ul>
<li>
<p><strong>[execution time limit] 4 seconds (js)</strong></p>
</li>
<li>
<p><strong>[input] string decimal</strong></p>
<p>A string representing the (potentially repeating) decimal number. If there's a repeating part, it'll be enclosed in parentheses.</p>
<p><em>Guaranteed constraints:</em><br>
<code>1 ≤ decimal.length ≤ 10<sup>4</sup></code><br>
<code>decimal[i] ∈ {"0" - "9", ".", "(", ")"}</code></p>
</li>
<li>
<p><strong>[input] integer denominator</strong></p>
<p>An integer representing the denominator of the fraction that produced the decimal number.</p>
<p><em>Guaranteed constraints:</em><br>
<code>0 &lt; denominator &lt; 10<sup>3</sup></code></p>
</li>
<li>
<p><strong>[output] integer</strong></p>
<ul>
<li>An integer representing the numerator of the fraction that produced the decimal number.</li>
</ul>
</li>
</ul>
</div>
