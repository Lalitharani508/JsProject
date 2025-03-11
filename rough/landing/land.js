// Function to get logged-in users from localStorage

// Function to update the welcome message
function updateWelcomeMessage() {
    let loggedInUser = getLoggedInUser();
    let welcomeMessage = document.getElementById("welcomeMessage");

    if (loggedInUser) {
        welcomeMessage.textContent = `Welcome, ${loggedInUser.name}!`;
    } else {
        welcomeMessage.textContent = "";
    }
}

// Run the function when the page loads
document.addEventListener("DOMContentLoaded", updateWelcomeMessage);



// Function to get users from localStorage
//Store Multiple Users in Local Storage
function getUsers() {
    return JSON.parse(localStorage.getItem('users')) || [];
}

// Signup Form Submission
document.getElementById('signupForm').addEventListener('submit', function (event) {
    event.preventDefault();
    let name = document.getElementById('signupName').value;
    let email = document.getElementById('signupEmail').value;
    let password = document.getElementById('signupPassword').value;

    let users = getUsers();

    // Check if user already exists
    if (users.some(user => user.email === email)) {
        Swal.fire({
            title: 'Signup Failed!',
            text: 'User already exists. Please use a different email.',
            icon: 'error'
        });
        return;
    }

    let newUser = { name, email, password };
    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));

    Swal.fire({
        title: 'Sign Up Successful!',
        text: `Welcome, ${name}! Please log in.`,
        icon: 'success'
    });

    document.getElementById('signupForm').reset();
    bootstrap.Modal.getInstance(document.getElementById('signupModal')).hide();
});




// Login Form Submission
document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault();
    let email = document.getElementById("loginEmail").value;
    let password = document.getElementById("loginPassword").value;

    let users = JSON.parse(localStorage.getItem("users")) || [];
    let matchedUser = users.find(user => user.email === email && user.password === password);

    if (matchedUser) {
        Swal.fire({
            title: "Login Successful!",
            text: `Redirecting to your dashboard...`,
            icon: "success",
            timer: 2000,
            showConfirmButton: false
        }).then(() => {
            let loggedInUsers = JSON.parse(localStorage.getItem("loggedInUsers")) || [];
            loggedInUsers.push(matchedUser);  // Store multiple users
            localStorage.setItem("loggedInUsers", JSON.stringify(loggedInUsers));

            window.location.href = "./mainhome/index.html";
        });
    } else {
        Swal.fire({
            title: "Login Failed",
            text: "Invalid email or password. Please try again.",
            icon: "error"
        });
    }

    document.getElementById("loginForm").reset();
});



function swalWelcome() {
    Swal.fire({
        title: "Before Getting Started Please Create a Account!!!",
        showClass: {
          popup: `
            animate__animated
            animate__fadeInUp
            animate__faster
          `
        },
        hideClass: {
          popup: `
            animate__animated
            animate__fadeOutDown
            animate__faster
          `
        }
      }).then(()=>{
        let mymodal=new bootstrap.Modal(document.getElementById("signupModal"))
        mymodal.show()
      })
      

}