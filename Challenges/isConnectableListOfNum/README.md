<div class="markdown"><p>Halloween is coming up soon! Every year, Jan and her friends hold a special challenge, and this year is an especially scary one - they've decided to spend the night in a cemetery!</p>
<p>For an additional fright, all of Jan's friends will be setting up camp separately, far away from each other. At midnight, the plan is to start searching for a secret treasure that Jan buried somewhere in the cemetery.</p>
<p>To cover more ground, all the friends will be searching separately, so they each have a list of each other's numbers, so that they can call everyone in case one of them finds the treasure. However, her friends all use a quick-dialing app which starts calling a number as soon as it matches one of their contacts, so if one of the phone numbers is a <strong>prefix</strong> of another one of the numbers, then it'll start dialing the shorter number before the full number can be entered. For example, if you're trying to call <code>416321</code> but <code>416</code> is also among the numbers, then it'll start dialing <code>416</code> before you can finish typing in <code>416321</code>.</p>
<p>Jan wants to make sure that everyone can be reached, so she needs for you to check if there are any numbers on the list that are prefixes of any other number on the list. Given an array of phone numbers (in the form of strings), return <code>true</code> if the list is error-free (contains no prefixes) and <code>false</code> otherwise. <em>It is guaranteed that the list does not contain any duplicate numbers.</em></p>
<p><span style="color:#44BFA3;font-size:1.4em;">Example</span></p>
<ul>
<li>
<p>For <code>listOfNum = ["911", "97625999", "91125426"]</code>, the output should be <code>isConnectableListOfNum(listOfNum) = false</code>.</p>
<p>Since <code>911</code> is a prefix of <code>91125426</code> the list of numbers is not error-free.</p>
</li>
<li>
<p>For <code>listOfNum = ["113", "12340", "123440", "12345", "98346"]</code>, the output should be <code>isConnectableListOfNum(listOfNum) = true</code></p>
<p>Although some of these numbers start the same, none of them are prefixes of each other, so the list is error-free.</p>
</li>
</ul>
<p><span style="color:#44BFA3;font-size:1.4em;">Input / Output</span></p>
<ul>
<li>
<p><strong>[execution time limit] 4 seconds (js)</strong></p>
</li>
<li>
<p><strong>[input] array.string listOfNum</strong></p>
<p>An array of unique strings representing the list of all of Jan's friends' phone numbers.</p>
<p><em>Guaranteed constraints:</em><br>
<code>1 ≤ listOfNum.length ≤ 10<sup>4</sup></code><br>
<code>1 ≤ listOfNum[i].length ≤ 10</code><br>
<code>listOfNum[i] ∈ {"0" - "9"} </code></p>
</li>
<li>
<p><strong>[output] boolean</strong></p>
<ul>
<li>Return <code>true</code> if the list of numbers is error-free, and <code>false</code> if it contains a prefix of one of the other numbers.</li>
</ul>
</li>
</ul>
</div>
