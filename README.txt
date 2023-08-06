

#Mars Rover Tech Task



1. Program takes size of plateau as two space separate numbers eg "5 5"
	input must be two numbers

1. Program takes initial location for rover as two ints and direction eg "3 3 N"
	input must be two numbers and "N", "S", "E", "W" for direction, small caps allowed

1. Program takes input of movement instructions eg : "mmllmmllllmmm"
	no spaces and characters must be "L", "R", "M" . Small caps allowed

1. Rover moves using movement instructions
	"L" rotates left
	"R" rotates right
	"M" moves in current facing direction

1. Return to step 2 for next rover


##THINGS TO WATCH OUT FOR


Invalid input causes same prompt again in infinite loop until get correct input

A 5 by 5 plateau is 0 to 5, so 5 is a valid coordinate in 5 by 5 plateau

Map coordinates are inverted on y, 0 is bottom row , top row is plateau height

If rover goes off edge it wraps around, so go off top wraps to bottom, go off left wraps to right
and visa versa



##TO DO

Do not allow rover to be placed at same position as other rovers

Show other rovers on map

Do not allow collisons between rovers

Rovers can be blocked by obstacles
