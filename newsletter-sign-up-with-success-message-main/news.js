const form = document.querySelector("#form")
const name=document.getElementById("name");
let popup = document.getElementById("popup");
let popupbg = document.getElementById("popupbg");
const email=document.getElementById("emailInput");
const closeBtn = document.getElementById("close");
const errorMsg=document.getElementsByClassName("error-box");
const openPopup = () => {
popup.style.display = "block";
popupbg.style.display = "block";
}
const closePopup = () => {
popup.style.display = "none";
popupbg.style.display = "none";
}
function isvalidateEmail(str){
const reg=new RegExp("[a-z0-9]+@[a-z]+.[a-z]{2,3}");
return reg.test(str);
}
function updateName(email){
name.textContent=email;
console.log(email);
}
function showErrorMessage(){
name.textContent="Invalid Email";
console.log("hello in");
}
form.addEventListener("submit",function(event) {
event.preventDefault();
const email=form.querySelector("#emailInput");
const valid=isvalidateEmail(email.value);
console.log("susmitha",valid);

if(!valid){
  showErrorMessage();
  
   alert("Please enter a  email");
 }
 if(valid){
  updateName(email.value)
  openPopup(); 
}
document.getElementById("emailInput").value="";
});
window.addEventListener("click",(event)=>{
if(event.target==popupbg){
closePopup();
}
})
closeBtn.addEventListener("click",function(event) {
closePopup();
})


