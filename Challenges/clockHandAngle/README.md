<div class="markdown"><p>Given a 12-hour time representation, in the form of a string, your task is to find the angle (in degrees) between the hour and minute hands.</p>
<p><span style="color:#44BFA3;font-size:1.4em;">Example</span></p>
<ul>
<li>
<p>For <code>time = "12:00:00"</code>, the output should be <code>clockHandAngle(time) = 0</code></p>
<p>When the hands are together, the angle between them is <code>0</code>.</p>
</li>
<li>
<p>For <code>time = "3:00:00"</code>, the output should be <code>clockHandAngle(time) = 90</code></p>
<p>At this time, the minute and hour hands are perpendicular, which means the angle between them could be measured as <code>90</code> or <code>270</code> degrees, so we return <code>90</code> since it's smaller.</p>
</li>
</ul>
<p><span style="color:#44BFA3;font-size:1.4em;">Input / Output</span></p>
<ul>
<li>
<p><strong>[execution time limit] 4 seconds (js)</strong></p>
</li>
<li>
<p><strong>[input] string time</strong></p>
<p>A string representation of the time in the format <code>&lt;hour&gt;:&lt;minute&gt;:&lt;second&gt;</code>. The time is in 12 hour format.</p>
</li>
<li>
<p><strong>[output] float</strong></p>
<ul>
<li>The angle between the hour hand and the minute hand. If there are two possible angles, return the smaller value.</li>
</ul>
</li>
</ul>
</div>
