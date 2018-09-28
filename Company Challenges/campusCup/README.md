<div class="markdown"><p>Dropbox holds a competition between schools called <code>CampusCup</code>. If you verify an email address from a college, university, or higher education institution, you earn <code>20</code> points toward your school's overall ranking. When a school receives at least <code>100</code> points, all of its registered members receive an additional <code>3 Gb</code> of bonus space each. When the school receives at least <code>200</code> points, its registered members receive an additional <code>8 Gb</code>. If the school receives at least <code>300</code> points, its members receive an additional <code>15 Gb</code>. And finally, when a school receives at least <code>500</code> points, members receive an additional <code>25 Gb</code> each.</p>
<p>You are given <code>n</code> registered emails, all of them unique. Each email has the following format: <code>"&lt;name&gt;@&lt;domain&gt;"</code>, where <code>&lt;name&gt;</code> and <code>&lt;domain&gt;</code> are non-empty strings consisting of lowercase letters and a <code>'.'</code>. Identical domains correspond to the same school and vice versa.</p>
<p>Your task is to make a scoreboard, i.e. to sort the schools according to the amount of bonus space they each received (per student not in total). School <code>A</code> must be higher in the standings than school <code>B</code> if <code>A</code> received <em>more space</em> than <code>B</code>, or if they received equal number of gigabytes but the domain string of school <code>A</code> is <a href="keyword://lexicographical-order-for-strings" target="_blank">lexicographically smaller</a> than the one of school <code>B</code>.</p>
<p><span style="color:#44BFA3;font-size:1.4em;">Example</span></p>
<ul>
<li>
<p>For <code>emails = ["john.doe@mit.edu", "admin@rain.ifmo.ru", "noname@mit.edu"]</code>, the output should be<br>
<code>campusCup(emails) = ["mit.edu", "rain.ifmo.ru"]</code>.</p>
<p><code>"mit.edu"</code> scored <code>40</code> points, and <code>"rain.ifmo.ru"</code> just <code>20</code>. Both universities got no additional space, so <code>"mit.edu"</code> must be higher in the standings because it is <em>lexicographically smaller</em> than <code>"rain.ifmo.ru"</code>.</p>
</li>
<li>
<p>For</p>
<pre><code>emails = ["b@harvard.edu", "c@harvard.edu", "d@harvard.edu", 
          "e@harvard.edu", "f@harvard.edu",
          "a@student.spbu.ru", "b@student.spbu.ru", "c@student.spbu.ru", 
          "d@student.spbu.ru", "e@student.spbu.ru", "f@student.spbu.ru", 
          "g@student.spbu.ru"]
</code></pre>
<p>the output should be<br>
<code>campusCup(emails) = ["harvard.edu", "student.spbu.ru"]</code>.</p>
<p><code>"harvard.edu"</code> - <code>100</code> points, <code>3 Gb</code> of additional space.<br>
<code>"student.spbu.ru"</code> - <code>140</code> points, also <code>3 Gb</code> of additional space.</p>
<p><code>"harvard.edu"</code> must be higher in the standings because it is <em>lexicographically smaller</em> than <code>"student.spbu.ru"</code>.</p>
</li>
<li>
<p>For</p>
<pre><code>emails = ["a@rain.ifmo.ru", "b@rain.ifmo.ru", "c@rain.ifmo.ru", 
          "d@rain.ifmo.ru", "e@rain.ifmo.ru", "noname@mit.edu"]
</code></pre>
<p>the output should be<br>
<code>campusCup(emails) = ["rain.ifmo.ru", "mit.edu"]</code>.</p>
<p><code>"mit.edu"</code> - <code>20</code> points, no additional space.<br>
<code>"rain.ifmo.ru"</code> - <code>100</code> points, <code>3 Gb</code> of additional space.</p>
<p>Therefore, <code>"rain.ifmo.ru"</code> must be higher in the standings.</p>
</li>
</ul>
<p><span style="color:#44BFA3;font-size:1.4em;">Input/Output</span></p>
<ul>
<li>
<p><strong>[execution time limit] 4 seconds (js)</strong></p>
</li>
<li>
<p><strong>[input] array.string emails</strong></p>
<p>Registered emails.</p>
<p><em>Guaranteed constraints:</em><br>
<code>2 ≤ emails.length ≤ 40</code>,<br>
<code>5 ≤ emails[i].length ≤ 20</code>.</p>
</li>
<li>
<p><strong>[output] array.string</strong></p>
<ul>
<li>The list of unique school domains sorted as described above.</li>
</ul>
</li>
</ul>
</div>
