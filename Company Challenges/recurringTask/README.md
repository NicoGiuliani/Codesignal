<div class="markdown"><p>If you have a task that you need to complete on a regular basis, you can set it up in Asana as a recurring task. This allows you to schedule the task to repeat on specific days of the week every <code>k</code> weeks.</p>
<p>For instance, you could set up a recurring task that reminds you to call your sister on Tuesday and Friday every 3 weeks. You set up the first instance of the task for Tuesday, March 1. The next instance will fall on Friday, March 4. The third instance will fall 3 weeks later on Tuesday, March 22, the fourth instance will fall on Friday, March 25, the fifth instance will fall on Tuesday, April 12, and so on.</p>
<p>Given a <code>firstDate</code> that represents the day your recurring task becomes active, an array <code>daysOfTheWeek</code> that indicates which days of the week the task should occur on, and a number <code>k</code> that represents the interval between weeks on which the task occurs, return an array that contains the first <code>n</code> dates on which the task is scheduled.</p>
<p>In this task, you'll likely need to know the how long the months are and the names of the days of week, provided here:</p>
<ul>
<li>Month lengths from January to December: <code>31, <em>28</em>, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31</code>.
<ul>
<li>During <a href="keyword://leap" target="_blank">leap years</a> February has <code>29</code> days.</li>
</ul>
</li>
<li>Names of weekdays: <code>"Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"</code>.</li>
<li>January 1, 2015 was a Thursday.</li>
</ul>
<p><span style="color:#44BFA3;font-size:1.4em;">Example</span></p>
<p>For <code>firstDate = "01/01/2015"</code>, <code>k = 2</code>, <code>daysOfTheWeek = ["Monday", "Thursday"]</code>, and <code>n = 4</code>, the output should be</p>
<pre><code>recurringTask(firstDate, k, daysOfTheWeek, n) = 
    ["01/01/2015", "05/01/2015", "15/01/2015", "19/01/2015"]
</code></pre>
<p><img src="https://codefightsuserpics.s3.amazonaws.com/tasks/recurringTask/img/example.png?_tm=1530813519338" alt=""></p>
<p><code>firstDate</code> falls on a Thursday. The first Monday after it is January 5, <code>"05/01/2015"</code>. Since <code>k = 2</code>, the next two days for which the task is scheduled are <em>Thursday, January 15</em>, and <em>Monday, January 19</em>.</p>
<p><span style="color:#44BFA3;font-size:1.4em;">Input/Output</span></p>
<ul>
<li>
<p><strong>[execution time limit] 4 seconds (js)</strong></p>
</li>
<li>
<p><strong>[input] string firstDate</strong></p>
<p>A string in the format <code>"dd/mm/yyyy"</code>, representing a date either in the past or the future. It is guaranteed that the date is between <code>1900</code> and <code>3999</code>, both inclusive.</p>
</li>
<li>
<p><strong>[input] integer k</strong></p>
<p>A positive integer.</p>
<p><em>Guaranteed constraints:</em><br>
<code>1 ≤ k ≤ 20</code>.</p>
</li>
<li>
<p><strong>[input] array.string daysOfTheWeek</strong></p>
<p>An array containing from <code>1</code> to <code>7</code> distinct elements, inclusive, each of which equals a weekday name. Days appear in the same order they are given in the description. It's guaranteed that the day of the week on which the <code>firstDate</code> falls is present in this list.</p>
<p><em>Guaranteed constraints:</em><br>
<code>1 ≤ daysOfTheWeek.length ≤ 7</code>.</p>
</li>
<li>
<p><strong>[input] integer n</strong></p>
<p><em>Guaranteed constraints:</em><br>
<code>1 ≤ n ≤ 15</code>.</p>
</li>
<li>
<p><strong>[output] array.string</strong></p>
<ul>
<li>An array containing the first <code>n</code> dates (including the first one) on which the task is scheduled, in chronological order.</li>
</ul>
</li>
</ul>
</div>
