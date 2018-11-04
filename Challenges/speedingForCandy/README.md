<div class="markdown"><p>It's Halloween night! You and your friends are getting ready to go out in the streets to get as much candy as possible. You noticed that every year most of the night was wasted walking to the different streets, but this year will be different: you will be driving around the city for candy.</p>
<p>Unfortunately starting up the car and stopping will also take a lot of time and many police officers will be around the neighborhood to ensure everyone's safety, so you decide on the following plan:</p>
<ul>
<li>Once getting out of the car, you must visit <strong>at least</strong> <code>n</code> houses in a row (You could however start anywhere on the street).</li>
<li>You will only get out of the car once per street.</li>
<li>You can only visit <code>k</code> streets <strong>at most</strong>.</li>
</ul>
<p>With the data you've acquired from the previous years, you and your friends know how much candy each house will give. This data is denoted by <code>streets</code>, where <code>streets[i][j]</code> represents the amount of candy given by the <code>j</code>th house on the <code>i</code>th street.</p>
<p>Your task is to find the total amount of candy you can get by visiting as many as <code>k</code> streets, stopping once to visit at least <code>n</code> houses in a row.</p>
<p><span style="color:#44BFA3;font-size:1.4em;">Example</span></p>
<ul>
<li>
<p>For <code>streets = [[1,6,-50,9,0], [5,4,3,-3,2]]</code>, <code>n = 3</code>, and <code>k = 1</code>, the output should be <code>speedingForCandy(streets, n, k) = 12</code>.</p>
<p>Here is the maximum amount of candy you can get in each street:<br>
<img src="https://i.imgur.com/nbVsNzq.png" alt="https://i.imgur.com/nbVsNzq.png"><br>
You and your friends are only visiting <code>1</code> street maximum, so you can ignore the first street, which will not be beneficial for the night.</p>
</li>
</ul>
<ul>
<li>
<p><strong>[execution time limit] 4 seconds (js)</strong></p>
</li>
<li>
<p><strong>[input] array.array.integer streets</strong></p>
<p>An array of arrays of integers, where <code>streets[i][j]</code> represents how much candy will be given out by the <code>j</code>th house on the <code>i</code>th street.</p>
<p><em>Guaranteed constraints:</em><br>
<code>1 ≤ streets.length ≤ 500</code><br>
<code>1 ≤ streets[i].length ≤ 500</code><br>
<code>-100 ≤ streets[i][j] ≤ 100</code></p>
</li>
<li>
<p><strong>[input] integer n</strong></p>
<p>An integer denoting the minimum number of houses you must visit in a row.</p>
<p><em>Guaranteed constraints:</em><br>
<code>1 ≤ n ≤ streets[i].length</code></p>
</li>
<li>
<p><strong>[input] integer k</strong></p>
<p>An integer denoting the maximum number of streets you can trick-or-treat before the cops stop you.</p>
<p><em>Guaranteed constraints:</em><br>
<code>0 ≤ k ≤ streets.length</code></p>
</li>
<li>
<p><strong>[output] integer</strong></p>
<ul>
<li>The maximum number of candy you can get from trick-or-treating.</li>
</ul>
</li>
</ul>
</div>
