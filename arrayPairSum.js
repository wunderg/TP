// This is just a modification of the integer difference problem presented elsewhere
module.exports = function(k, array) {
    var hash = {};
    var pairs = [];


    array.forEach(function(number) {

        // Make sure the value in unused and it's a unique pair
        if (hash[k - number] === false && k - number !== number) {

            pairs.push([number, k - number]);

            hash[k - number] = true;
        }

        // If the hash value is not true, set the hash to "unused"
        !hash[k - number] && (hash[number] = false);
    });

    return pairs;
};

// f(10, [3, 4, 5, 6, 7]) // [ [6, 4], [7, 3] ]
// f(8, [3, 4, 5, 4, 4]) // [ [3, 5], [4, 4], [4, 4], [4, 4] ]
