function dataTypes( anArgument ) {
  if( anArgument == null || undefined ){ return 'no value';}
  else if( typeof anArgument === "string" ){ return anArgument.length;}
  else if( typeof anArgument === "number" ){
    if( anArgument < 100 ){ return 'less than 100';}
    else if( anArgument > 100 ){ return 'more than 100';}
    else{return 'equal to 100'}
  }
  else if( typeof anArgument === "boolean" ){ return anArgument;}
  else if( typeof anArgument === "object" ){
    if(anArgument[2] != null){ return anArgument[2]}
    else{ return }
  }
  else if( typeof anArgument === "function"){ 
    anArgument(true); 
    return 'called callback';
  }
  else{ return 'no value'}
} 
