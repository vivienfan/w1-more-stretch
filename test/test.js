var assert = require("chai").assert;
var commonSub = require("../lib/common-sub");
var minMod = require("../lib/min-modification");

describe("common longest subsequence", function() {
  it ("should return \"he longest subsequence\" when\n\
       str0 = \"This is the longest subsequence.\" \n\
       str1 = \"The longest subsequence is all a lie.\"", function(){
    var result = commonSub.commonSub("This is the longest subsequence.", "The longest subsequence is all a lie.");
    assert.isTrue(result === "he longest subsequence");
  });

  it ("should return \"\" when\n\
       str0 = \"aaa000aa0aaa0000000aa\"\n\
       str1 = \"suiwelfo9jdkfjouwer\"", function() {
    var result = commonSub.commonSub("aaa000aa0aaa0000000aa", "suiwelfo9jdkfjouwer");
    assert.isTrue(result === "");
  });
});

describe("minimum modification", function() {
  it ("should", function() {
    // minModification("This is the longest subsequence.", "The longest subsequence is all a lie.");
    assert.isTrue(true);
  });
});
