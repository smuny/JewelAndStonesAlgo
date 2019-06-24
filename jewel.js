let J = "aA"
let S = "aAAbbbb"

var numJewelsInStones = function(J, S) {
   let counter = 0
    for (i = 0; i < S.length; i++){
//         setting variable "i" = 0
//         if "i" is less than the length of "S",
//         it'll increase "i" by 1
        for (k = 0; k < J.length; k++){
            if (S.charAt(i) === J.charAt(k)){
//   you want to return the number of match by using counter
                counter ++;
            }
        }
    }
    return counter;
};
