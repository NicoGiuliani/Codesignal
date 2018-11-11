<div class="markdown"><p>As a good secret agent, you know that you can't be communicating with other agents using a common alphabet or any kind of simple messaging system. Because of that, you and the other secret agents are using a small code alphabet to send minimal messages to each other, in order to coordinate your secret meetings.</p>
<p>You've received an encoded message in the form of a string <code>incomingMessage</code>, which represents an inquiry from another secret agent, proposing a <strong>day</strong>, <strong>time</strong>, and <strong>location</strong> for your next secret meeting. Your task is to decode the message, and give a response indicating whether the meeting is possible or not.</p>
<p><strong>How to decipher the message:</strong></p>
<p>This process can be quite complicated, so the following description would probably be tough to follow for an average person, but the agency knows that you possess the exceptional skill and patience to make it through easily!</p>
<p>Your alphabet consists of 20 symbols, and you can use the following key for encoding and decoding (but don't tell anyone!)</p>
<p><code>"0" = "a"</code><br>
<code>"9" = "e"</code><br>
<code>"8" = "i"</code><br>
<code>"7" = "o"</code><br>
<code>"6" = "u"</code><br>
<code>"5" = "y"</code><br>
<code>"4" = "w"</code><br>
<code>"10" = "t"</code><br>
<code>"11" = "d"</code><br>
<code>"12" = "s"</code><br>
<code>"13" = "n"</code><br>
<code>"14" = "m"</code><br>
<code>"15" = "r"</code><br>
<code>"16" = "b"</code><br>
<code>"17" = "k"</code><br>
<code>"18" = "p"</code><br>
<code>"*" = "morning"</code><br>
<code>"@" = "afternoon"</code><br>
<code>"#" = "night"</code><br>
<code>"?" = "-"</code></p>
<p>Each encoded message is made up of a series of these symbols, separated by <code>"."</code> characters. The decoded message should be in the form <code>day-time-location</code>.</p>
<p>For an extra layer of security, the <code>"_"</code> symbol is used to augment the code of all the numbers that follow it. More specifically, the codes should all be increased by <code>codeNumberDiff</code>, from that point onward. <strong>These modifiers are cumulative, so the codes can be augmented more than once.</strong></p>
<p>Being an Agent means that you need to be cautious about your movements, so there are only a few combinations of days, times, and locations that will work:</p>
<ul>
<li>If the day is <code>"today"</code>, you can only meet in the park (regardless of the time).</li>
<li>If the day is <code>"tomorrow"</code>, then you can either meet at the <code>"bar"</code> at <code>"night"</code>, or in the <code>"park"</code> during the <code>"afternoon"</code>.</li>
<li>If the day is <code>"twodays"</code> (the day after tomorrow), then you can only meet at the <code>"restaurant"</code> in the <code>"morning"</code>.</li>
<li>No other combinations are possible.</li>
</ul>
<p>To answer the other agent, you must send an encrypted message with a <code>"yes"</code> or <code>"no"</code> (remember to send it encrypted). Return a <code>2</code>-element array, containing the decrypted message and your encrypted response!</p>
<p><span style="color:#44BFA3;font-size:1.4em;">Example:</span></p>
<ul>
<li>
<p>For <code>incomingMessage = "10.7.11.0.5.?.#.?._.15.-1.14"</code> and <code>codeNumberDiff = 1</code>, the output should be <code>["today-night-bar", "13.7"]</code></p>
<p>The first parts can be decoded using the key above (<code>"10.7.11.0.5"</code> translates to <code>"today"</code> and <code>"#"</code> translates to <code>"night"</code>), but since there's a <code>"_"</code> symbol in the last part, all of the following codes should be augmented by <code>1</code> (since <code>codeNumberDiff</code> is <code>1</code>). So the message goes from <code>"15.-1.14"</code> to <code>"16.0.15"</code>, which translates to <code>"bar"</code>.</p>
<p>The answer for the message is "no", because for today you can only meet in the park (not the bar). So after encrypting your response, the result is <code>"13.7"</code>.</p>
</li>
<li>
<p>For <code>incomingMessage = "10.4.7.11.0.5._.10.?.*.?._.11.5.8.6.-4.2.11.-4.9.6"</code> and <code>codeNumberDiff = 2</code>, the output should be <code>["twodays-morning-restaurant", "5.9.12"]</code></p>
<p>There are two <code>"_"</code> symbols in the message, so after the first one appears, all codes should be increased by <code>2</code>; after the second one, all codes should be increased by <code>4</code>.</p>
<p>Decrypting the message, it shows that the meeting will be in two days, in the morning at the restaurant, which is a valid combination, so you answer with a encrypted "yes" (<code>"5.9.12"</code>).</p>
</li>
</ul>
<p><span style="color:#44BFA3;font-size:1.4em;">Input / Output</span></p>
<ul>
<li>
<p><strong>[execution time limit] 4 seconds (js)</strong></p>
</li>
<li>
<p><strong>[input] string incomingMessage</strong></p>
<p>The secret encoded message that you've received from your secret agent colleague.</p>
<p><em>Guaranteed constraints:</em><br>
<code>incomingMessage[i] ∈ {"0" - "9", ".", "?", "_", "-", "#", "*", "@"}</code></p>
</li>
<li>
<p><strong>[input] integer codeNumberDiff</strong></p>
<p>An integer representing how much you'll need to modify all following codes for each instance of the <code>"_"</code> symbol.</p>
<p><em>Guaranteed constraints:</em><br>
<code>-1000 ≤ codeNumberDiff ≤ 1000</code></p>
</li>
<li>
<p><strong>[output] array.string</strong></p>
<ul>
<li>A <code>2</code>-element array containing the decrypted message from the other secret agent, as well as your encrypted response.</li>
</ul>
</li>
</ul>
</div>
