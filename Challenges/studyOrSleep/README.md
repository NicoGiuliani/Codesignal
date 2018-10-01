<div class="markdown"><p>You have an exam coming up tomorrow morning, and you're trying to decide how much longer you should keep studying before going to bed. Your uncle, reflecting on his experience in med school, once told you that if you have the choice between sleep and study, it's always better to get the sleep. But since this is your first semester, you suspect you might not be as well prepared for your exams as he would have been.</p>
<p>Given the integers <code>familiarity</code> and <code>hoursRemaining</code>, your task is to return how many more hours you should study for (assuming you're trying to maximize your expected grade). <code>familiarity</code> represents how confident you are in the material; basically the grade you would get if you were to take the exam right now, while <code>hoursRemaining</code> represents the number of hours between now and your exam.</p>
<p><strong>Notes:</strong></p>
<ul>
<li>For every hour you spend studying, you diminish your 'unfamiliarity' by 20% (eg: if your <code>familiarity</code> is <code>70</code>, then your unfamiliarity is <code>30</code>, so after 1 hour of studying, it'll be down to <code>24</code>, which means your familiarity will be <code>76</code>).</li>
<li>You haven't slept yet, so to be fully alert at the exam, you're depending on getting 8 hours of sleep beforehand. If you get fewer than 8 hours, your performance will suffer - it's estimated that for every hour less than 8, your grade will take a <code>5</code> point penalty (eg: with a <code>familiarity</code> of <code>87</code>, if you only sleep 5 hours, then since you're missing 3 hours, your expected grade will be <code>87 - 3 * 5 = 72</code>).</li>
<li>Each hour will be uniquely committed to one activity (studying or sleeping); you have a regimented schedule and you'd prefer not to split an hour into half study and half sleep.</li>
<li>If your familiarity is already at <code>100</code>, you probably shouldn't spend any more time studying.</li>
</ul>
<p><span style="color:#44BFA3;font-size:1.4em;">Example</span></p>
<ul>
<li>
<p>For <code>familiarity = 64</code> and <code>hoursRemaining = 8</code>, the output should be <code>studyOrSleep(familiarity, hoursRemaining) = 2</code>.</p>
<ul>
<li>
<p>After 1 hour, your familiarity rises to <code>71.2</code>, but considering the <code>5</code> point penalty for losing the hours of sleep, it's effectively <code>66.2</code>. That's more than you started with, so maybe it's worth it to stay up another hour.</p>
</li>
<li>
<p>After 2 hours, your familiarity would be <code>76.96</code>, but now the penalty would be <code>10</code> points, so it's basically <code>66.96</code>. That's a little bit higher still, so it could even be worth it to stay up <code>2</code> more hours.</p>
</li>
<li>
<p>After 3 hours, your familiarity would be at about <code>81.57</code>, but with <code>15</code> points deducted, the resulting <code>66.57</code> is less than the previous result, so it's not worth it to lose any more sleep.</p>
</li>
</ul>
</li>
<li>
<p>For <code>familiarity = 38</code> and <code>hoursRemaining = 9</code>, the output should be <code>studyOrSleep(familiarity, hoursRemaining) = 5</code>.</p>
<p>In this case, you have an hour to study before it'll cost you any sleep time, so we should expect the result to be at least <code>1</code>. How many more hours is it worth it to stay up?</p>
<table>
<thead>
<tr>
<th>Hours of study</th>
<th>Penalty for lost sleep</th>
<th>Familiarity</th>
<th>Expected result</th>
</tr>
</thead>
<tbody>
<tr>
<td>0</td>
<td>0</td>
<td>38</td>
<td>38</td>
</tr>
<tr>
<td>1</td>
<td>0</td>
<td>50.4</td>
<td>50.4</td>
</tr>
<tr>
<td>2</td>
<td>5</td>
<td>60.32</td>
<td>55.32</td>
</tr>
<tr>
<td>3</td>
<td>10</td>
<td>68.26</td>
<td>58.26</td>
</tr>
<tr>
<td>4</td>
<td>15</td>
<td>74.6</td>
<td>59.6</td>
</tr>
<tr>
<td>5</td>
<td>20</td>
<td>79.68</td>
<td>59.68</td>
</tr>
<tr>
<td>6</td>
<td>25</td>
<td>83.75</td>
<td>58.74</td>
</tr>
<tr>
<td>7</td>
<td>30</td>
<td>86.99</td>
<td>56.99</td>
</tr>
</tbody>
</table>
<p>The best result is expected with <code>5</code> hours of studying.</p>
</li>
<li>
<p>For <code>familiarity = 75</code> and <code>hoursRemaining = 8</code>, the output should be <code>studyOrSleep(familiarity, hoursRemaining) = 0</code>.</p>
<p>By studying another hour, your familiarity would become <code>80</code>, but since there would be a <code>5</code> point penalty on losing the hour of sleep, it would remain at <code>75</code>, so it's not worth it. Get the 8 hours of sleep.</p>
</li>
</ul>
<p><span style="color:#44BFA3;font-size:1.4em;">Input / Output</span></p>
<ul>
<li>
<p><strong>[execution time limit] 4 seconds (js)</strong></p>
</li>
<li>
<p><strong>[input] integer familiarity</strong></p>
<p>An integer representing how confident you are in the material (basically the grade you would get if you were to take the exam right now).</p>
<p><em>Guaranteed constraints:</em><br>
<code>35 ≤ familiarity ≤ 100</code></p>
</li>
<li>
<p><strong>[input] integer hoursRemaining</strong></p>
<p>An integer representing how many hours remain between now and when you need to go to the exam.</p>
<p><em>Guaranteed constraints:</em><br>
<code>0 ≤ hoursRemaining ≤ 24</code></p>
</li>
<li>
<p><strong>[output] integer</strong></p>
<ul>
<li>The number of hours you should continue studying.</li>
</ul>
</li>
</ul>
</div>
