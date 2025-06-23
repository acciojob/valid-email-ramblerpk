function validEmail(str) {
  //your JS code here.
	if (str.trim() === '') {
        return false;
    }

    // Define the regex pattern for a valid email
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,3}$/;

    // Test the string against the regex pattern
    return emailPattern.test(str);
}

// Do not change the code below.
const str = prompt("Enter an email address.");
alert(validEmail(str));
