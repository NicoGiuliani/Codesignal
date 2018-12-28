<div class="markdown"><p>Christmas is coming! You are going to decorate your Christmas Tree, but to do that you need to estimate the number of garland lights you need to buy. To do that, you draw a scheme of your tree:</p>
<pre><code>   *
  ***
 *****
*******
  ...
</code></pre>
<p>You'd like to decorate the tree in such a way that there's a light on every <code>*</code> of the tree. Given <code>n</code>, an integer representing the number of rows in scheme - the height of the tree, your task is to determine how many lights you'll need in total.</p>
<p><span style="color:#44BFA3;font-size:1.4em;">Example</span></p>
<ul>
<li>
<p>For <code>n = 1</code>, the output should be<br>
<code>christmasTreeLights(n) = 1</code>.</p>
<pre><code>*
</code></pre>
<p>This tree only has one <code>*</code>, so you'll only need <code>1</code> light.</p>
</li>
<li>
<p>For <code>n = 2</code>, the output should be<br>
<code>christmasTreeLights(n) = 4</code>.</p>
<pre><code> *
***
</code></pre>
<p>This tree has a total of 4 <code>*</code>'s, so you'll need <code>4</code> lights.</p>
</li>
</ul>
<p><span style="color:#44BFA3;font-size:1.4em;">Input/Output</span></p>
<ul>
<li>
<p><strong>[execution time limit] 4 seconds (js)</strong></p>
</li>
<li>
<p><strong>[input] integer n</strong></p>
<p>The height of the tree.</p>
<p><em>Guaranteed constraints:</em><br>
<code>1 ≤ n ≤ 10<sup>7</sup></code>.</p>
</li>
<li>
<p><strong>[output] integer64</strong></p>
<ul>
<li>The number of the lights required.</li>
</ul>
</li>
</ul>
</div>
