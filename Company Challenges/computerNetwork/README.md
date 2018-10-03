<div class="markdown"><p>You know what they say: "time is money." In today's markets, the price of a stock that you see on your computer might not be the price that you end-up trading at, since by the time your request reaches the exchange the price might have changed. Therefore, the quicker you can get your order to the exchange, the better the chances that you will trade at your expected price.</p>
<p>Picture a peer-to-peer computer network of <code>n</code> nodes that's supposed to route your request from your computer to a computer where the trade is actually registered. Let's assume that the network is not optimized yet, so it's your task to implement an algorithm that computes the shortest path from the source at index <code>1</code> (your computer) to the destination at index <code>n</code>.</p>
<p><span style="color:#44BFA3;font-size:1.4em;">Example</span></p>
<p>For <code>n = 4</code> and</p>
<pre><code>network = [[1, 4, 200], 
           [1, 2, 5], 
           [1, 3, 10], 
           [2, 3, 4], 
           [2, 4, 150], 
           [3, 4, 100]]
</code></pre>
<p>the output should be<br>
<code>computerNetwork(n, network) = 109</code>.</p>
<p>The shortest path is <code>1 -&gt; 2 -&gt; 3 -&gt; 4</code>.</p>
<p><img src="https://codefightsuserpics.s3.amazonaws.com/tasks/computerNetwork/img/example.png?_tm=1530791364979" alt=""></p>
<p><span style="color:#44BFA3;font-size:1.4em;">Input/Output</span></p>
<ul>
<li>
<p><strong>[execution time limit] 4 seconds (js)</strong></p>
</li>
<li>
<p><strong>[input] integer n</strong></p>
<p>A positive integer equal to the number of nodes in the network.</p>
<p><em>Guaranteed constraints:</em><br>
<code>1 ≤ n ≤ 10</code>.</p>
</li>
<li>
<p><strong>[input] array.array.integer network</strong></p>
<p>For each valid <code>i</code>, <code>network[i]</code> consists of three positive integers and corresponds to the two-way connection between the nodes <code>network[i][0]</code> and <code>network[i][1]</code>. Routing the stock order through that connection takes <code>network[i][2]</code> milliseconds.</p>
<p>It is guaranteed that there is a route between any pair of nodes. It is also guaranteed that there is no more than one direct connection between any pair of nodes.</p>
<p><em>Guaranteed constraints:</em><br>
<code>0 ≤ network.length ≤ 20</code>,<br>
<code>1 ≤ network[i][0], network[i][1] ≤ n</code>,<br>
<code>1 ≤ network[i][2] ≤ 10<sup>4</sup></code>.</p>
</li>
<li>
<p><strong>[output] integer</strong></p>
<ul>
<li>The minimum time needed to route the stock from node <code>1</code> to node <code>n</code> in milliseconds.</li>
</ul>
</li>
</ul>
</div>
