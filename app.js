document.getElementById("submit_button").addEventListener("click", function(event){
    event.preventDefault();

    const emailInput = document.getElementById("email");
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const error = document.getElementById("error");
    const cfrmEmail = document.getElementById("cfmEmail");

    if (emailRegex.test(emailInput.value)){
        localStorage.setItem('userEmail', emailInput.value);
        console.log("valid");
        error.style.display = "none";
        window.location.href = "success.html"
    }else{
        console.log("invalid");
        error.style.display = "block";
        emailInput.style.border = "1px solid tomato"
        emailInput.style.backgroundColor = "hsl(4, 81%, 90%)"
    }    
})
