var http = require('http');
var web3 = require('web3');
var reddit = require('reddit.js');



var subReddits = [
  "Ethereum"
]

// Get timestamp of last call
var last = getTimestamp();

/// For each subreddit grab new comments
for (var i=0, i<subReddits.count, i++){

  for (var j=0, j<comments.count, j++){
    // Check if the comment contains a +/u/EtherTips
    if (comments[j].contains("+/u/Ethertips")){
      // Populate values
      var sender = ""
      var target = "";
      var action = "";
      var value = 0;


      // If sender has enough ether
      if(sender.getBalance >= value){
        // Send private message to target
        reddit.sendPrivMsg(sender, target, value);
      }

    }
  }


  // If so transfer ether from one person to another
}
