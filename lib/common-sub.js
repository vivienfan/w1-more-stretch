// Given two strings,
// write a program that efficiently finds
// the longest common subsequence.
module.exports = {
  // nested for-loops
  commonSub: function(str0, str1) {
    var subsequence = "";
    var prev_seq = "";
    var counter = 0;
    for (var i = 0; i < str0.length; i++) {
      prev_seq = "";
      counter = 0;
      for (var j = 0; j < str1.length; j++) {
        this.superCounter++;
        if (str0[i + counter] === str1[j]) {
          counter++;
          prev_seq += str1[j];
          if (prev_seq.length > subsequence.length) {
            subsequence = prev_seq;
          }
        } else {
          counter = 0;
          prev_seq = "";
        }
      }
    }
    return subsequence;
  },

  // recursion approach:
  longestSubSequence: "",

  recurse: function(str0, str1, subsequence) {
    this.superCounter++;

    // stop recursion if one of them is empty
    if (str0.length === 0 || str1.length === 0) {
      return;
    }

    // if the characters are the same, update the subsequence
    if (str0[0] === str1[0]) {
      subsequence += str0[0];
      if (subsequence.length >= this.longestSubSequence.length) {
        // update the longestSubSequence
        this.longestSubSequence = subsequence;
      }
      // recurse on the substring exluding the common characters in both string
      this.recurse(str0.substring(1), str1.substring(1), subsequence);
    }
    // recurse on the same str0, and str1 exlusing the first character
    this.recurse(str0, str1.substring(1), "");
  },

  commonSubRecursion: function(str0, str1) {
    this.init();
    for (var i = 0; i < str0.length; i++) {
      this.recurse(str0.substring(i), str1, "");
    }
    return this.longestSubSequence;
  },


  // utilities:
  superCounter: 0,

  complexity: function() {
    console.log("common-sub complexity:", superCounter);
  },

  init: function() {
    this.superCounter = 0;
    this.longestSubSequence = "";
  }
}