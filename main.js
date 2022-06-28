//Ninety Nice bootles of bear Lyrics 
/*
3 bottles of beer on the wall, 3 bottles of beer.
Take one down and pass it around, 2 bottles of beer on the wall.

2 bottles of beer on the wall, 2 bottles of beer.
Take one down and pass it around, 1 bottle of beer on the wall.

1 bottle of beer on the wall, 1 bottle of beer.
Take one down and pass it around, no more bottles of beer on the wall.

No more bottles of beer on the wall, no more bottles of beer.
Go to the store and buy some more, 99 bottles of beer on the wall.
*/

function bear() {
    var i = 99;


    while(i >= 1) {

        var bottleWord = "bottles";

        if (i === 1) {
            bottleWord = "bottle";
        }
        else if(1 === 0) {
            i = "No";
        }

        console.log(i + " " + bottleWord + " of beer on the wall, ");
        
        console.log(i + " " + bottleWord + " of beer.")

        i = i - 1;

        console.log(" Take one down and pass it around, " + i + " " + bottleWord + " of beer on the wall.")
        
    }
    
 }