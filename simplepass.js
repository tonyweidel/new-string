//type checkString below
function checkString(str){
  if(str.length>=8 && str.length<=20){
    return str;
  }
  else{
    throw new RangeError("Password must be between 8 and 20 characters!");
  }
}

//type getString below
function getString(str){
  try{
    str=checkString(str);
  }
  catch(e){
    console.log(e.message);
    getString("mitchell");
  }
}
getString("IBuyMitchACandyBar")
