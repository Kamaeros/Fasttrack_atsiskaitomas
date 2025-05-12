let isPasswordGenerated = false;
document.getElementById("generatePassword").addEventListener("click", function() {
    const lenght = document.getElementById("passwordLength").value;
    const useUppercase = document.getElementById("uppercase").checked;
    const useLowercase = document.getElementById("lowercase").checked;
    const useNumbers = document.getElementById("numbers").checked;
    const useSymbols = document.getElementById("symbols").checked;

    const uppercaseChars= "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowercaseChars= "abcdefghijklmnopqrstuvwxyz";
    const numbersChars= "0123456789";
    const symbolsChars= "!@#$%^&*()_+[]{}|;:,.<>?";

    let allcharts = "";

    if (useUppercase) {allcharts += uppercaseChars;}
    if (useLowercase) {allcharts += lowercaseChars;}
    if (useNumbers) {allcharts += numbersChars;}
    if (useSymbols) {allcharts += symbolsChars;}

    if (allcharts === "") {
        alert("Pasirinkite bent vieną simbolių tipą");
        isPasswordGenerated = false;
        return;
    }
    let password = "";
    for (let i = 0; i < lenght; i++) {
        password += allcharts.charAt(Math.floor(Math.random() * allcharts.length));
    }
    document.getElementById("password-output").textContent =  password;
    isPasswordGenerated = true;

});
document.getElementById("copyPassword").addEventListener("click", function() {
    if (!isPasswordGenerated) {
        alert("Pirmiausia sugeneruokite slaptažodį");
        return;
    }
    const passwordText = document.getElementById("password-output").textContent;
    navigator.clipboard.writeText(passwordText).then(function() {
        alert("Slaptažodis nukopijuotas į iškarpinę!");
    }, function(err) {
        console.error("Kopijavimas nepavyko: ", err);
    });
});
document.getElementById("clearPassword").addEventListener("click", function() {
    document.getElementById("password-output").textContent = ""
    isPasswordGenerated = false;
})
