#html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Password Manager</title>
    <link rel="stylesheet" href="style.css">
   
</head>
<body>
    <script src="script.js"></script>
    <div class="container">
        <h1>Password Manager</h1>
        <div id="menu">
            <button onclick="showAddPassword()">Add Password</button>
            <button onclick="showRetrievePassword()">Retrieve Password</button>
            
        </div>

        <!-- Add Password Form -->
        <div id="addPasswordForm" class="form" style="display: none;">
            <h2>Add Password</h2>
            <input type="text" id="addAccount" placeholder="Account Name">
            <input type="password" id="addPassword" placeholder="Password">
            <button onclick="addPassword()">Save</button>
        </div>

        <!-- Retrieve Password Form -->
        <div id="retrievePasswordForm" class="form" style="display: none;">
            <h2>Retrieve Password</h2>
            <input type="text" id="retrieveAccount" placeholder="Account Name">
            <button onclick="retrievePassword()">Retrieve</button>
            <p id="passwordDisplay"></p>
        </div>
    </div>
    </div>
    
</body>
</html>

#css
body {
    font-family: Arial;
    margin: 10px;
    padding: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-image: url(data:image/jpeg;base64,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);
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
   
}
#container{
    border: solid white ;
}

.container {
    text-align: center;
    background-position: 5cm;
    padding: 20px;
    border: 1px solid white;
    border-radius: 30px;
    box-shadow:white;
    width: 300px;
}

h1 {
    font-size: 24px;
    margin-bottom: 20px;
}

button {
    margin: 10px 0;
    padding: 10px 20px;
    border:none;
    background: #007BFF;
    color: white;
    border-radius: 5px;
    cursor: pointer;
}

button:hover {
    background: #0056b3;
}

input {
    display: block;
    width: 95%;
    padding: 10px;
    margin: 10px 0;
    border: 1px solid #ccc;
    border-radius: 1px;
}

.form {
    margin-top: 20px;
}

#passwordDisplay {
    margin-top: 10px;
    font-weight: bold;
    border: 5px solid white;
    border-radius: 2px;
    background-color: white;
    
}

#js
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
