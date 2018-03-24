// INSTRUCTIONS FROM QUALIFIED.IO
// Write a function that counts how many different ways you can make change for an amount of money, 
// given an array of coin denominations. For example, there are 3 ways to give change for 4 if you have 
// coins with denomination 1 and 2:

// 1+1+1+1, 1+1+2, 2+2.
// The order of coins does not matter:

// 1+1+2 == 2+1+1
// Also, assume that you have an infinite ammount of coins.

// Your function should take an amount to change and an array of unique denominations for the coins:
//   countChange(4, [1,2]) // => 3
//   countChange(10, [5,2,3]) // => 4
//   countChange(11, [5,7]) //  => 0

// COMMENTS FROM LISA
// I did this problem before in Python. This was at the beginning of my programming career, and I 
// did it the super-long way, with nested loops, one hard-coded for each coin. Since neither you 
// nor I have all day, I did some research about recursive methods for solving this type of problem, 
// and I'm gonna see if I can make that work for me today.

// CONCLUSIONS / WHAT I LEARNED
// This solution can accept arrays of any length.
// The coin denominations can be in any order.
// Breakpoints are actually not that helpful once the recursion gets hopping.
// Whiteboarding, diagramming or writing things out is more helpful.
// Now that I've been out of school for a while, I'd like to get more practice with this stuff, to keep my skills fresh. 
// Function definitions can be nested. I may have known that before, but I don't use it often.
// Previous knowledge confirmed: Spelling is important. Naming is hard. Infinite loops = BAD.

function countChange(amount, coinList) {
  var resultCount = 0;

  function calculate(index, value) {
    var coinValue = coinList[index];

    if (index === 0) {
      // Check for solutions only when we get to the last coin in the list
      if (value % coinValue === 0) {
        // Value will be 0 in all solutions with 0 of the last coin
        resultCount ++;
      }
      // No infinite looping, thank you
      return;
    }

    while (value >= 0) {
      // First time through: Check for solutions involving none of this coin
      // Then with one, two, three ... of this coin.
      // When value === 0: check for solutions involving only this coin
      // When value <0: number of this coin that fits in total has been exceeded, time to stop
      calculate(index-1, value);
      value -= coinValue;
    }
  }

  calculate(coinList.length - 1, amount);
  return resultCount;
}
