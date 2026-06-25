function check() {
    // 1. Get the number from the input box
    let numStr = document.getElementById("numInput").value;
    let originalNumber = parseInt(numStr);
    
    // 2. Find out how many digits the number has
    let power = numStr.length;
    
    
    let sum = 0;
    for (let i = 0; i < numStr.length; i++) {
        let digit = parseInt(numStr[i]);
         sum += Math.pow(digit, power);
    }
    
    
    if (sum === originalNumber) {
        document.getElementById("result").innerText = "Yes, it is an Armstrong number!";
    } else {
        document.getElementById("result").innerText = "No, it is not.";
    }
}
