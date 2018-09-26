<div class="markdown"><p><em>Good Luck Charms</em> is a popular sugary breakfast cereal made of fun and tasty marshmallow shapes, mixed in with a pile of boring wooden pieces resembling cat food.</p>
<p>You've just poured yourself a big bowl of Good Luck Charms, but you suddenly realized that you're running late and you need to get to computer school immediately! You only have time for one bite of your cereal.</p>
<p>You've mentally divided your bowl into a grid, and its contents are represented by two matrices of equal dimensions - <code>marshmallows</code> and <code>woodenPieces</code>, each representing the number of pieces in each sector, for their respective types. Your task is to find the 'sweetest' bite, according to the following principles:</p>
<ul>
<li>Your spoon has dimensions 3 x 3, so given an <code>[x, y]</code> location, your spoonful will end up with all the pieces in all 8 of the neighbouring sectors (up, down, left, right, and diagonal).</li>
<li>It's possible to choose a location that has fewer than 8 neighbours (like in a corner or on an edge).</li>
<li>Each marshmallow piece has a sweetness of <code>1</code>, while every non-marshmallow piece has a sweetness of <code>-2</code>.</li>
<li>You're trying to find the coordinates <code>[x, y]</code> of a location where the surrounding 3 x 3 region has the greatest sweetness (<code>(number of marshmallows) - 2 * (number of non-marshmallows)</code>)</li>
<li>If you can't find a single bite with at least twice as many marshmallows as wooden bits, it's just not worth it. You'll go to computer school without taking a bite at all. Return <code>[-1, -1]</code>.</li>
<li>You can't get the marshmallows without also getting the non-marshmallows.</li>
</ul>
<p><span style="color:#44BFA3;font-size:1.4em;">Example</span></p>
<ul>
<li>
<p>For</p>
<pre><code>marshmallows = [[2,8,3,2], 
                [8,9,7,5], 
                [9,10,8,4], 
                [5,13,9,2]]
</code></pre>
<p>and</p>
<pre><code>woodenPieces = [[3,2,2,1], 
                [2,2,2,1], 
                [1,1,3,1], 
                [3,1,2,2]]
</code></pre>
<p>the output should be <code>sweetestSpoonful(marshmallows, woodenPieces) = [2, 1]</code>.</p>
<p><img src="https://codesignal.s3.amazonaws.com/uploads/1536861132810/sweetestSpoonful.png" alt="example"></p>
<p>At the location <code>[2, 1]</code>, the neighbouring totals are <code>8 + 9 + 7 + 9 + 10 + 8 + 5 + 13 + 9 = 78</code> marshmallows and <code>2 + 2 + 2 + 1 + 1 + 3 + 3 + 1 + 2 = 17</code> non-marshmallows. So, the total sweetness is <code>78 - 2 * 17 = 44</code>, which is greater than at any other location.</p>
</li>
<li>
<p>For</p>
<pre><code>marshmallows = [[1,14,6], 
                [1,10,4], 
                [12,13,14]]
</code></pre>
<p>and</p>
<pre><code>woodenPieces = [[14,4,10], 
                [11,7,5], 
                [3,9,1]]
</code></pre>
<p>the output should be <code>sweetestSpoonful(marshmallows, woodenPieces) = [-1, -1]</code>.</p>
<p>There isn't a single bowl location with more than twice as many marshmallows as non-marshmallows.</p>
</li>
</ul>
<p><span style="color:#44BFA3;font-size:1.4em;">Input / Output</span></p>
<ul>
<li>
<p><strong>[execution time limit] 5 seconds (coffee)</strong></p>
</li>
<li>
<p><strong>[input] array.array.integer marshmallows</strong></p>
<p>An matrix of integers representing how many marshmallow pieces are in each sector.</p>
<p><em>Guaranteed constraints:</em><br>
<code>1 ≤ marshmallows.length ≤ 100</code><br>
<code>1 ≤ marshmallows[i].length ≤ 100</code><br>
<code>0 ≤ marshmallows[i][j] ≤ 10<sup>6</sup></code></p>
</li>
<li>
<p><strong>[input] array.array.integer woodenPieces</strong></p>
<p>An matrix of integers representing how many non-marshmallow pieces are in each sector.</p>
<p><em>Guaranteed constraints:</em><br>
<code>woodenPieces.length = marshmallows.length</code><br>
<code>woodenPieces[i].length = marshmallows[i].length</code><br>
<code>0 ≤ woodenPieces[i][j] ≤ 10<sup>6</sup></code></p>
</li>
<li>
<p><strong>[output] array.integer</strong></p>
<ul>
<li>A 2-element array representing the coordinates of the center of the sweetest bite (ie: the spot that has the greatest sweetness in its neighbouring 3 x 3 region), or <code>[-1, -1]</code> if there's no bite possible with more than twice as many marshmallows</li>
</ul>
</li>
</ul>
</div>
