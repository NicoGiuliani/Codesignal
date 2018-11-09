<div class="markdown"><p>You are given a recursive notation of a binary tree: each node of a tree is represented as a set of three elements:</p>
<ul>
<li>value of the node;</li>
<li>left subtree;</li>
<li>right subtree.</li>
</ul>
<p>So, a tree can be written as <code>(value left_subtree right_subtree)</code>. It is guaranteed that <code>1 ≤ value ≤ 10<sup>9</sup></code>. If a node doesn't exist then it is represented as an empty set: <code>()</code>. For example, here is a representation of a tree in the given picture:</p>
<pre><code>(2 (7 (2 () ()) (6 (5 () ()) (11 () ()))) (5 () (9 (4 () ()) ())))
</code></pre>
<p><img src="https://codefightsuserpics.s3.amazonaws.com/tasks/treeBottom/img/tree.png?_tm=1530820904857" alt=""></p>
<p>Your task is to obtain a list of nodes, that are the most distant from the tree root, in the order from left to right.</p>
<p>In the notation of a node its value and subtrees are separated by exactly one space character.</p>
<p><span style="color:#44BFA3;font-size:1.4em;">Example</span></p>
<p>For</p>
<pre><code>tree = "(2 (7 (2 () ()) (6 (5 () ()) (11 () ()))) (5 () (9 (4 () ()) ())))"
</code></pre>
<p>the output should be<br>
<code>treeBottom(tree) = [5, 11, 4]</code>.</p>
<p><span style="color:#44BFA3;font-size:1.4em;">Input/Output</span></p>
<ul>
<li>
<p><strong>[execution time limit] 4 seconds (js)</strong></p>
</li>
<li>
<p><strong>[input] string tree</strong></p>
<p><em>Guaranteed constraints:</em><br>
<code>5 ≤ tree.length ≤ 120</code>.</p>
</li>
<li>
<p><strong>[output] array.integer</strong></p>
</li>
</ul>
</div>
