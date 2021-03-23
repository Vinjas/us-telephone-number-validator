function telephoneCheck(str) {
  if(str.match(/^\d{10}$/) 
  || str.match(/^\d{3}-\d{3}-\d{4}$/)
  || str.match(/^1*\s*\d{3}-*\s*\d{3}-*\s*\d{4}$/)
  || str.match(/^1*\s*\({1}\d{3}\){1}\s*\d{3}-\d{4}$/)
  
  ){
    return true;
  } else {
    return false
  }

}
