/*

  You may look up functions or libraries

  You may use popular libraries like lodash, underscore, jquery, etc.

  You may write pseudo-code for partial credit

  After finishing, you may address corner cases for extra credit

  1.  Design and Code a StopWatch

    Sample Use Case:

    var sw = new StopWatch();

    sw.start().stop().start().log();

      => 0

    <= wait 123 milliseconds

    sw.log();

      => 123;

    <= wait 100 milliseconds

    sw.stop().log();

      => 223

    <= wait 1000 milliseconds

    sw.log();

      => 223

    sw.reset().log();

      => 0

  2.  Design and Code a Racer using the StopWatch you just made

    Sample Use Case:

    var sumeet = new Racer();

    var travis = new Racer();

    var harshit = new Racer();

    console.log(Racer.all[0] === sumeet);

      => true

    console.log(Racer.all[1] === travis);

      => true

    console.log(Racer.all[2] === harshit);

      => true

    Racer.all.start();

    sumeet.stop().log();

      =>0

    <= wait 1000 milliseconds

    harshit.stop().log();

      => 1000

    <= wait 1000 milliseconds

    travis.stop().log();

      => 2000

    console.log(Racer.getWinner() === sumeet);

      => true

*/
//define class called stopwatch
//
//set tracker;
//
//will have start stop log and reset methods
// start will set tracker milliseconds Date.now() = 2131231123
//
//stop will stop countk
// tracker = Date.now - tracker => 4833
//
//log 
//console.ttacker
//reset will set tracker to 0;
//
//

