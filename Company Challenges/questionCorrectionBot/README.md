<div class="markdown"><p>When a user asks a question on Quora, the system automatically tries to improve the question's formatting before showing it to more users. Given a question as an input string, perform formatting corrections according to the following rules:</p>
<ul>
<li>Strip excessive whitespaces:
<ul>
<li>Remove whitespaces at the start and end, as well as multiple spaces in a row</li>
</ul>
</li>
<li>Fix spacing around punctuation:
<ul>
<li>Each comma should have a trailing space, but no space preceding it</li>
</ul>
</li>
<li>Questions should start with a capital letter</li>
<li>Questions should end with a single question mark (not <code>0</code> or more than one).</li>
</ul>
<p><span style="color:#44BFA3;font-size:1.4em;">Example</span></p>
<ul>
<li>For <code>question = " this isn't a relevant question , is it??? "</code>, the output should be<br>
<code>questionCorrectionBot(question) = "This isn't a relevant question, is it?"</code>;</li>
<li>For <code>question = "Is this answer correct?"</code>, the output should be<br>
<code>questionCorrectionBot(question) = "Is this answer correct?"</code>.</li>
</ul>
<p><span style="color:#44BFA3;font-size:1.4em;">Input/Output</span></p>
<ul>
<li>
<p><strong>[execution time limit] 4 seconds (js)</strong></p>
</li>
<li>
<p><strong>[input] string question</strong></p>
<p>It is guaranteed that the input string contains at least one non-whitespace character, and the first of these characters is a letter (possibly lowercase).<br>
<code>question.length ≤ 100</code>.</p>
</li>
<li>
<p><strong>[output] string</strong></p>
<ul>
<li>Corrected version of the question.</li>
</ul>
</li>
</ul>
</div>
