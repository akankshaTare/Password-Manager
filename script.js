// Simulating encrypted storage in localStorage
const encryptionKey = "encryption_key"; // In real-world applications, use secure encryption methods.
const passwords = JSON.parse(localStorage.getItem("passwords")) || {};

// Show Add Password Form
function showAddPassword() {
    document.getElementById("addPasswordForm").style.display = "block";
    document.getElementById("retrievePasswordForm").style.display = "none";
}

// Show Retrieve Password Form
function showRetrievePassword() {
    document.getElementById("addPasswordForm").style.display = "none";
    document.getElementById("retrievePasswordForm").style.display = "block";
}

// Add Password
function addPassword() {
    const account = document.getElementById("addAccount").value;
    const password = document.getElementById("addPassword").value;

    if (account && password) {
        // Encrypt password
        const encryptedPassword = btoa(password); // Basic encoding (Replace with actual encryption)
        passwords[account] = encryptedPassword;
        localStorage.setItem("passwords", JSON.stringify(passwords));
        alert("Password saved!");
        document.getElementById("addAccount").value = "";
        document.getElementById("addPassword").value = "";
    } else {
        alert("Please fill in all fields.");
    }
}

// Retrieve Password
function retrievePassword() {
    const account = document.getElementById("retrieveAccount").value;

    if (account in passwords) {
        // Decrypt password
        const decryptedPassword = atob(passwords[account]); // Basic decoding (Replace with actual decryption)
        document.getElementById("passwordDisplay").innerText = `Password: ${decryptedPassword}`;

    } else {
        document.getElementById("passwordDisplay").innerText = "Account not found!";
    }
}
