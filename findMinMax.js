function findMinMax(anArray) {
  var minimumValue = 0, maximumValue = 0, newArray = [];

  for(var i = 0; i < anArray.length; i++){
    if(anArray[i] > maximumValue){ maximumValue = anArray[i];}
  }
  minimumValue = maximumValue;
  for(var j = 0; j < anArray.length; j++){
  if(anArray[j] < minimumValue){ minimumValue = anArray[j];}
}
if(minimumValue == maximumValue){
  newArray.push(minimumValue);
  return newArray;
}
else{
  newArray.push(minimumValue);
  newArray.push(maximumValue);
  return newArray;
}
}
