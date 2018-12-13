<div class="markdown"><p>Diana is planning to go to a party this weekend! She wants to show up looking fresh, so she decided to buy a new dress. She is very conscious of the color of her future dress and she really wants something more <font color="green">green</font> than <font color="red">red</font> or <font color="blue">blue</font>.</p>
<p>There are several dresses in the shop, and we know the <strong><font color="red">R</font><font color="green">G</font><font color="blue">B</font></strong> representations of their colors. Your task is help Diana by finding the indices of the dresses in which there is more green than either red or blue (ie: where green uniquely has the highest value).</p>
<p><strong>Notes:</strong></p>
<ul>
<li>The <strong><font color="red">R</font><font color="green">G</font><font color="blue">B</font></strong> representation of a color is a 6-digit hexadecimal number. The first two digits are the red component, digits 3 and 4 are the green component, and the last two digits are the blue component.</li>
</ul>
<p>There is more green in a color then red or blue if and only if the green component is strictly greater than the red component and is also strictly greater than the blue component. For example <strong><font color="xA00000">A0</font><font color="x00FC00">FC</font><font color="x000077">77</font></strong> is a good color for Diana, but <strong><font color="x900000">90</font><font color="x00CA00">CA</font><font color="x0000CA">CA</font></strong> is not, because both green and blue components are <strong>CA</strong>, so there isn't more green than blue.</p>
<p><span style="color:#44BFA3;font-size:1.4em;">Examples</span></p>
<ul>
<li>
<p>For <code>colors = ["A0FC77", "90CACA"]</code>, the output should be <code>dresses(colors) = [0]</code></p>
<p>The dress at index <code>0</code> has more green than either red or blue, but the dress at index <code>1</code> has an equal amount of green and blue, so it doesn't qualify.</p>
</li>
<li>
<p>For <code>colors = ["000000", "101110", "F01AC3", "0FFEF4"]</code>, the output should be <code>dresses(colors) = [1, 3]</code></p>
<ul>
<li>Dress <code>0</code> is completely black (no green at all).</li>
<li>Dress <code>1</code> has just slightly more green than red or blue (<code>17</code> green vs <code>16</code> red and blue).</li>
<li>Dress <code>2</code> has a lot more red and blue than green.</li>
<li>Dress <code>3</code> has very little red, but a lot of blue, and just slightly more green</li>
</ul>
<p>Dresses <code>1</code> and <code>3</code> are the only two that meet the requirements.</p>
</li>
<li>
<p>For <code>colors = ["FFFFFF"]</code>, the output should be <code>dresses(colors) = []</code></p>
<p>This dress is all white; it has the maximum amount of each of the colours, so there isn't strictly more green than anything else.</p>
</li>
</ul>
<p><span style="color:#44BFA3;font-size:1.4em;">Input / Output</span></p>
<ul>
<li>
<p><strong>[execution time limit] 4 seconds (js)</strong></p>
</li>
<li>
<p><strong>[input] array.string colors</strong></p>
<p>An array of strings of length 6, consisting of symbols <code>0 - 9</code> and <code>A - F</code>.</p>
<p><em>Guaranteed constraints:</em><br>
<code>1 ≤ colors.length ≤ 10<sup>4</sup></code>,<br>
<code>colors[i].length = 6 </code></p>
</li>
<li>
<p><strong>[output] array.integer</strong></p>
<ul>
<li>The indices of the dresses for which there is more green than either red or blue.</li>
</ul>
</li>
</ul>
</div>
