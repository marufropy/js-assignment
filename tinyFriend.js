function tinyFriend(friends){
    if(friends.length == 0){
        return "error! empty array given."
    }
    else{
        var result = friends[0];
        for(var i = 1; i < friends.length; i++){
            if(friends[i].length < result.length){
                result = friends[i];
            }
        }
        return result;    
    }
}

var friends = ["brad", "leonardo", "tom", "ross", "chandler", "joey", "jennifer", "megan", "emilia", "rachel", "monica", "phoebe"];
var friend = tinyFriend(friends);
console.log(friend);