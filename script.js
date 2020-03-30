// Assignment Code
var generateBtn = document.querySelector("#generate");
var numberlist = [0,1,2,3,4,5,6,7,8,9];
var lowercase = [a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z];
var uppercase = [A,B,C,D,E,F,G,H,U,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z];


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Option ALerts
generateBtn.addEventListener("click", function(){
    confirm("Do you want to generate a password?");
    if (true) prompt("Length: How many characters will your password have?")
    
});

