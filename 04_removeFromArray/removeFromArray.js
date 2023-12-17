const removeFromArray = function(list, toDelete){
    const index= list.indexOf(toDelete);
    list.splice(index,1);
    return list;
  
  }

// Do not edit below this line
module.exports = removeFromArray;
