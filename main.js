const inputText = document.querySelector("#input-text");
const labelText = document.querySelector("#label-text");

const inputPass = document.querySelector("#input-pass");
const labelPass = document.querySelector("#label-pass");

const eyeBtn = document.querySelector(".fa-regular");

inputText.addEventListener("input", () => {
   if (inputText.value !== "") {
      labelText.classList.remove("input-inactive-label")
      labelText.classList.add("input-active-label");
   } else {
      labelText.classList.remove("input-active-label")
      labelText.classList.add("input-inactive-label");
   }
});

inputPass.addEventListener("input", () => {
   if (inputPass.value !== "") {
      labelPass.classList.remove("input-inactive-label")
      labelPass.classList.add("input-active-label");
   } else {
      labelPass.classList.remove("input-active-label")
      labelPass.classList.add("input-inactive-label");
   }
});

eyeBtn.addEventListener("click", () => {
   if (inputPass.type == "password") {
      inputPass.type = "text";
      eyeBtn.classList.remove("fa-eye-slash");
      eyeBtn.classList.add("fa-eye"); 
   } else {
      inputPass.type = "password";
      eyeBtn.classList.remove("fa-eye");
      eyeBtn.classList.add("fa-eye-slash");
   }
});