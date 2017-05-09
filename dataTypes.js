function dataTypes( alphas,digits,bool,anArray,aFunction ) {
  // if( arguments.length == 0 ){ return 'no value';}
  if( alphas != null ){ return alphas.length;}
  else if( digits != null ){
    if( digits< 100 ){ return 'less than 100';}
    else if( digits > 100 ){ return 'more than 100';}
    else{return 'equal to 100'}
  }
  else if( bool != null ){ return bool;}
  else if( anArray != null ){
    if(anArray[2] != null){ return anArray[2]}
    else{ return;}
  }
  else if(aFunction != null){ return aFunction(true); }
  else{ return 'no value'}
} 
