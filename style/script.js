// Assignment code here

var generateBtn = document.querySelector("#generate");

//assign variables
 var passwordlength ;
 var confirmspecialcharacters;
 var confirmuppercasecharcters;
 var confirmlowercasecharacters;
 var confirmnumericcharacters;
 var passwordcreteria;

//assigning varaibles and array of 4 of the characters 
var numericcharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialcharacters = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];
var uppercasecharacters =[ "A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var lowercasecharacters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//function starts from here

function generatePassword(){
  passwordlength= prompt("Please Enter the length of password between 8 to 128 characters.");
 console.log("Length of the password is : " + passwordlength);
 

//when password length is less than 8 or greater than 128
if(passwordlength < 8 || passwordlength > 128) {
  alert("Password should be between 8 to 128 characters.!!")
  generatePassword();
}
//when password length is between 8 and 128
else if(passwordlength >= 8 && passwordlength <= 128) {
confirmlowercasecharacters = confirm("Would you like to add lowercase characters in your password?");
confirmuppercasecharcters = confirm("Would you like to add uppercase characters in your password?");
confirmnumericcharacters = confirm("Would you like to add numbers in your password?");
confirmspecialcharacters = confirm("Would you like to add special characters in your password?");

}

//when user will not choose any type of character
 if(!confirmlowercasecharacters&& !confirmuppercasecharcters&& !confirmnumericcharacters&& !confirmspecialcharacters){
passwordcreteria = alert("Doesn't meet password creteria!!");
generatePassword();
}
// when user choose 4 of the characters
else if (confirmlowercasecharacters && confirmuppercasecharcters && confirmnumericcharacters && confirmspecialcharacters){
  passwordcreteria = lowercasecharacters.concat(uppercasecharacters,numericcharacters,specialcharacters);
  
}
//whn user choose lowercase,uppercase and numeric characters
else if(confirmlowercasecharacters && confirmuppercasecharcters && confirmnumericcharacters ){
  passwordcreteria = lowercasecharacters.concat(uppercasecharacters,numericcharacters);

}
//when user choose lowercase,uppercase and special charcters
else if(confirmlowercasecharacters && confirmuppercasecharcters && confirmspecialcharacters){
  passwordcreteria = lowercasecharacters.concat(uppercasecharacters,specialcharacters);

}
//when user choose lowercase and uppercase characters
else if(confirmlowercasecharacters && confirmuppercasecharcters ){
  passwordcreteria = lowercasecharacters.concat(uppercasecharacters);

}
//when user choose lowercase and special characters
else if(confirmlowercasecharacters && confirmspecialcharacters){
  passwordcreteria = lowercasecharacters.concat(specialcharacters);

}
//when user choose numeric and uppercase characters
else if(confirmuppercasecharcters && confirmnumericcharacters ){
  passwordcreteria = uppercasecharacters.concat(numericcharacters);
}
//when user choose numeric and special characters
else if( confirmnumericcharacters && confirmspecialcharacters){
  passwordcreteria = numericcharacters.concat(specialcharacters);
 
}
//when user choose special and uppercase characters
else if(confirmuppercasecharcters && confirmspecialcharacters){
  passwordcreteria = uppercasecharacters.concat(specialcharacters);

}
//when user choose lowercase and numeric characters
else if(confirmlowercasecharacters && confirmnumericcharacters ){
  passwordcreteria = lowercasecharacters.concat(numericcharacters);
 
}
//when user only choose lowercase characters 
else if(confirmlowercasecharacters){
passwordcreteria = lowercasecharacters;

}
//when user only choose uppercase characters 
else if (confirmuppercasecharcters){
  passwordcreteria = uppercasecharacters;

}
//when user only choose numeric characters 
else if(confirmnumericcharacters){
  passwordcreteria = numericcharacters;
 
}
//when user only choose special characters 
else if(confirmspecialcharacters){
  passwordcreteria = specialcharacters;
 


}
//random password 
var finalpassword ="";

for(var i = 0; i < passwordlength ; i ++){
  var finalpassword = finalpassword + passwordcreteria[Math.floor(Math.random() * passwordcreteria.length)];

  console.log(finalpassword);
}
return finalpassword;

}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

