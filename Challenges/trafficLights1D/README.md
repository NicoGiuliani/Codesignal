<div class="markdown"><p>You're travelling on a long straight road with many stoplights. You've travelled this road many times before and you're very observant, so you're already aware of the <strong>location</strong> (in metres) and <strong>frequency</strong> (in seconds) of each stoplight, and you've stored these values in the array <code>roadMap</code>.</p>
<p>As an example of how the data is stored, <code>[15, 9]</code> would represent a stoplight that's <code>15</code> metres away from your starting point, and its frequency is <code>9</code> seconds. In other words, the light will be green for <code>9</code> seconds, then red for another <code>9</code> seconds, then green again for another <code>9</code> seconds, etc.</p>
<p>Given the <code>roadMap</code> array, your task is to find how long it'll take for you reach the end of the road, assuming you travel at exactly <code>1</code> metre per second.</p>
<p><strong>Notes:</strong></p>
<ul>
<li>You start at a position of <code>0</code>, at time <code>0</code>.</li>
<li>The timer stops the moment you're able to pass through the final stoplight in the list.</li>
<li>At time <code>0</code>, all the stoplights have just turned green.</li>
<li>There's no one else on the road / no obstacles other than the stoplights to obstruct your path.</li>
<li>You travel at a constant rate (1 metre per second), so no time is spent accelerating or stopping; the moment the light turns green, you start moving.</li>
</ul>
<p><span style="color:#44BFA3;font-size:1.4em;">Example</span></p>
<ul>
<li>
<p>For <code>[[24,7], [31,15], [50,41]]</code>, the output should be <code>82</code>.</p>
<p>You start at position <code>0</code>, so it takes <code>24</code> seconds to reach the first stoplight (which is <code>24</code> metres away). This first stoplight has a frequency of <code>7</code>, which means it's green at <code>0</code> seconds, it turns red at <code>7</code> seconds, back to green at <code>14</code> seconds, then red again st <code>21</code> seconds, then it won't turn green again until <code>28</code> seconds. Since you arrive at <code>24</code> seconds, you'll have to wait <code>4</code> seconds for the light to turn green again.</p>
<p>After the first light turns green, you travel another <code>7</code> metres to the seconds stoplight at position <code>31</code>. By this time, <code>35</code> seconds have passed, so the light is already green, and you don't have to stop (this light has a frequency of <code>15</code>, so it would have started green at <code>0</code>, turned red at <code>15</code>, then back to green at <code>30</code>, until <code>45</code>, so at <code>35</code> seconds it's green).</p>
<p>You then travel another <code>19</code> metres to the final stoplight, which you arrive at after a total of <code>54</code> seconds. Since this light has a frequency of <code>41</code>, it would have turned red at <code>41</code> seconds, and will stay red until <code>82</code> seconds have passed. After <code>82</code> seconds, you're able to make it through the last light, so this is the final answer.</p>
</li>
<li>
<p>For <code>[[23,23], [37,30]]</code>, the output should be <code>60</code>.</p>
<p>You arrive at the first stoplight at the exact moment it turns red 😡. This means you'll have to wait until another <code>23</code> seconds pass, so the time will be <code>46</code> by the time you can go.</p>
<p>After travelling another <code>14</code> metres, the time is now <code>60</code>, which means the second stoplight will have just turned green the instant you arrive at it (it was green until <code>30</code> seconds, then back to green right at <code>60</code>). So you can pass through this final stoplight after <code>60</code> seconds.</p>
</li>
</ul>
<p><span style="color:#44BFA3;font-size:1.4em;">Input / Output</span></p>
<ul>
<li>
<p><strong>[execution time limit] 4 seconds (js)</strong></p>
</li>
<li>
<p><strong>[input] array.array.integer roadMap</strong></p>
<p>An array of 2-element arrays of integers of the form <code>[distance, frequency]</code>, in (strictly) ascending order of <code>distance</code>.</p>
<p><em>Guaranteed constraints:</em><br>
<code>1 ≤ roadMap.length ≤ 10<sup>4</sup></code><br>
<code>roadMap[i].length = 2</code><br>
<code>1 ≤ roadMap[i][0] ≤ 10<sup>6</sup></code><br>
<code>1 ≤ roadMap[i][1] ≤ 10<sup>6</sup></code></p>
</li>
<li>
<p><strong>[output] integer</strong></p>
<ul>
<li>An integer representing the total time it takes to travel the road (in seconds).</li>
</ul>
</li>
</ul>
</div>
