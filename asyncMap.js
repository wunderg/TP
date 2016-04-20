var Test = {};
Test.setTimeout = setTimeout;

function asyncMap(array, callback) {

}

/*
asyncMap([
    function(cb) {
      setTimeout(function() {
        cb('one');
      }, 200);
    },
    function(cb) {
      setTimeout(function() {
        cb('two');
      }, 100);
    }
  ],
  function(results) {
    // the results array will equal ['one','two'] even though
    // the second function had a shorter timeout.
    console.log(results); // ['one', 'two']
  });

*/
