// Given two strings,
// write a program that efficiently finds
// the longest common subsequence.
module.exports = {
  superCounter: 0,

  commonSub: function(str0, str1) {
    var subsequence = "";
    var prev_seq = "";
    var flag = false;
    var counter = 0;
    for (var i = 0; i < str0.length; i++) {
      prev_seq = "";
      counter = 0;
      for (var j = 0; j < str1.length; j++) {
        this.superCounter++;
        if (str0[i + counter] === str1[j]) {
          counter++;
          flag = true;
          prev_seq += str1[j];
          if (prev_seq.length > subsequence.length) {
            subsequence = prev_seq;
          }
        } else {
          counter = 0;
          prev_seq = "";
          falg = false;
        }
      }
    }
    // console.log(this.superCounter);
    return subsequence;
  },
}


