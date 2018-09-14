Good Luck Charms is a popular sugary breakfast cereal made of fun and tasty marshmallow shapes, mixed in with a pile of boring wooden pieces resembling cat food.

You've just poured yourself a big bowl of Good Luck Charms, but you suddenly realized that you're running late and you need to get to computer school immediately! You only have time for one bite of your cereal.

You've mentally divided your bowl into a grid, and its contents are represented by two matrices of equal dimensions - marshmallows and woodenPieces, each representing the number of pieces in each sector, for their respective types. Your task is to find the 'sweetest' bite, according to the following principles:

Your spoon has dimensions 3 x 3, so given an [x, y] location, your spoonful will end up with all the pieces in all 8 of the neighbouring sectors (up, down, left, right, and diagonal).
It's possible to choose a location that has fewer than 8 neighbours (like in a corner or on an edge).
Each marshmallow piece has a sweetness of 1, while every non-marshmallow piece has a sweetness of -2.
You're trying to find the coordinates [x, y] of a location where the surrounding 3 x 3 region has the greatest sweetness ((number of marshmallows) - 2 * (number of non-marshmallows))
If you can't find a single bite with at least twice as many marshmallows as wooden bits, it's just not worth it. You'll go to computer school without taking a bite at all. Return [-1, -1].
You can't get the marshmallows without also getting the non-marshmallows.
Example

For

marshmallows = [[2,8,3,2], 
                [8,9,7,5], 
                [9,10,8,4], 
                [5,13,9,2]]
and

woodenPieces = [[3,2,2,1], 
                [2,2,2,1], 
                [1,1,3,1], 
                [3,1,2,2]]
the output should be sweetestSpoonful(marshmallows, woodenPieces) = [2, 1].

example

At the location [2, 1], the neighbouring totals are 8 + 9 + 7 + 9 + 10 + 8 + 5 + 13 + 9 = 78 marshmallows and 2 + 2 + 2 + 1 + 1 + 3 + 3 + 1 + 2 = 17 non-marshmallows. So, the total sweetness is 78 - 2 * 17 = 44, which is greater than at any other location.

For

marshmallows = [[1,14,6], 
                [1,10,4], 
                [12,13,14]]
and

woodenPieces = [[14,4,10], 
                [11,7,5], 
                [3,9,1]]
the output should be sweetestSpoonful(marshmallows, woodenPieces) = [-1, -1].

There isn't a single bowl location with more than twice as many marshmallows as non-marshmallows.