// Function to get logged-in users from localStorage

// Function to update the welcome message
// function updateWelcomeMessage() {
//     let loggedInUser = getLoggedInUser();
//     let welcomeMessage = document.getElementById("welcomeMessage");

//     if (loggedInUser) {
//         welcomeMessage.textContent = `Welcome, ${loggedInUser.name}!`;
//     } else {
//         welcomeMessage.textContent = "";
//     }
// }

// Run the function when the page loads
// document.addEventListener("DOMContentLoaded", updateWelcomeMessage);



// Function to get users from localStorage
//Store Multiple Users in Local Storage
// Helper function to get users from localStorage with proper error handling
function getUsers() {
    try {
        const data = localStorage.getItem('users');
        
        // If no data exists yet in localStorage
        if (!data) {
            console.log("No users found in localStorage, returning empty array");
            return [];
        }
        
        // Try to parse the data
        const parsedData = JSON.parse(data);
        
        // Check if the parsed data is actually an array
        if (!Array.isArray(parsedData)) {
            console.error("Users data is not an array:", parsedData);
            // If not an array, return an empty array to prevent errors
            return [];
        }
        
        return parsedData;
    } catch (error) {
        console.error("Error getting users from localStorage:", error);
        // Return empty array on error to prevent further errors
        return [];
    }
}

// Wait for the DOM to be fully loaded before attaching event listeners
document.addEventListener('DOMContentLoaded', function() {
    console.log("DOM fully loaded, attaching event listeners");
    
    // Get the form elements
    const signupForm = document.getElementById('signupForm');
    const loginForm = document.getElementById('loginForm');
    
    // Attach signup event listener if the form exists
    if (signupForm) {
        console.log("Signup form found, attaching listener");
        signupForm.addEventListener('submit', function(event) {
            event.preventDefault();
            console.log("Signup form submitted");
            
            let name = document.getElementById('signupName').value;
            let email = document.getElementById('signupEmail').value;
            let password = document.getElementById('signupPassword').value;
            
            console.log("Form values:", { name, email });
            
            let users = getUsers();
            console.log("Current users:", users);
            
            // Check if users is actually an array before using array methods
            if (!Array.isArray(users)) {
                console.error("users is not an array:", users);
                users = []; // Reset to empty array to prevent errors
            }
            
            // Check if user already exists
            const userExists = users.some(user => user && user.email === email);
            if (userExists) {
                Swal.fire({
                    title: 'Signup Failed!',
                    text: 'User already exists. Please use a different email.',
                    icon: 'error'
                });
                return;
            }
            
            let newUser = { name, email, password };
            users.push(newUser);
            
            // Save updated users array
            try {
                localStorage.setItem('users', JSON.stringify(users));
                console.log("User saved successfully");
            } catch (error) {
                console.error("Error saving user to localStorage:", error);
                Swal.fire({
                    title: 'Error',
                    text: 'There was a problem saving your account. Please try again.',
                    icon: 'error'
                });
                return;
            }
            
            Swal.fire({
                title: 'Sign Up Successful!',
                text: `Welcome, ${name}! Please log in.`,
                icon: 'success'
            }).then(() => {
                document.getElementById('signupForm').reset();
                
                // Safe modal closing
                try {
                    const signupModal = document.getElementById('signupModal');
                    const modalInstance = bootstrap.Modal.getInstance(signupModal);
                    if (modalInstance) {
                        modalInstance.hide();
                    }
                } catch (error) {
                    console.error("Error closing modal:", error);
                }
            });
        });
    } else {
        console.error("Signup form not found in the DOM");
    }
    
    // Attach login event listener if the form exists
    if (loginForm) {
        console.log("Login form found, attaching listener");
        loginForm.addEventListener('submit', function(event) {
            event.preventDefault();
            console.log("Login form submitted");
            
            let email = document.getElementById('loginEmail').value;
            let password = document.getElementById('loginPassword').value;
            
            console.log("Login attempt for:", email);
            
            let users = getUsers();
            console.log("Users for login check:", users);
            
            // Check if users is actually an array before using array methods
            if (!Array.isArray(users)) {
                console.error("users is not an array for login:", users);
                users = []; // Reset to empty array to prevent errors
            }
            
            // Find matching user with safe access
            let matchedUser = null;
            for (let i = 0; i < users.length; i++) {
                const user = users[i];
                if (user && user.email === email && user.password === password) {
                    matchedUser = user;
                    break;
                }
            }
            
            if (matchedUser) {
                console.log("Login successful for:", matchedUser.name);
                
                Swal.fire({
                    title: "Login Successful!",
                    text: `Redirecting to your dashboard...`,
                    icon: "success",
                    timer: 2000,
                    showConfirmButton: false
                }).then(() => {
                    // Store the current logged in user
                    localStorage.setItem("currentUser", JSON.stringify(matchedUser));
                    
                    // Also store in loggedInUsers array if needed
                    let loggedInUsers = [];
                    try {
                        const storedUsers = localStorage.getItem("loggedInUsers");
                        if (storedUsers) {
                            const parsed = JSON.parse(storedUsers);
                            if (Array.isArray(parsed)) {
                                loggedInUsers = parsed;
                            }
                        }
                    } catch (error) {
                        console.error("Error parsing loggedInUsers:", error);
                    }
                    
                    loggedInUsers.push(matchedUser);
                    localStorage.setItem("loggedInUsers", JSON.stringify(loggedInUsers));
                    
                    // Redirect to dashboard
                    // window.location.href = "./mainhome/main.html";
                    window.location.href = './mainhome/index.html';

                });
            } else {
                console.log("Login failed - no matching user found");
                
                Swal.fire({
                    title: "Login Failed",
                    text: "Invalid email or password. Please try again.",
                    icon: "error"
                });
            }
            
            document.getElementById('loginForm').reset();
        });
    } else {
        console.error("Login form not found in the DOM");
    }
    
    // Debug function to check localStorage values
    window.checkUsers = function() {
        console.log("Raw users in localStorage:", localStorage.getItem("users"));
        console.log("Parsed users:", getUsers());
        console.log("Raw loggedInUsers:", localStorage.getItem("loggedInUsers"));
        console.log("Current user:", localStorage.getItem("currentUser"));
        
        // Try to reset users if needed
        window.resetUsers = function() {
            localStorage.setItem("users", "[]");
            localStorage.setItem("loggedInUsers", "[]");
            localStorage.removeItem("currentUser");
            console.log("All user data has been reset.");
        };
    };
    
    // Run the check on load
    window.checkUsers();
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



//guest loign
// Add guest login button to the login modal
document.addEventListener('DOMContentLoaded', function() {
    // Get reference to the login form
    const loginForm = document.getElementById('loginForm');
    
    // Create a div to hold the guest login button for styling
    const guestLoginDiv = document.createElement('div');
    guestLoginDiv.className = 'text-center mt-3';
    
    // Create guest login button
    const guestLoginButton = document.createElement('button');
    guestLoginButton.type = 'button';
    guestLoginButton.className = 'btn btn-outline-secondary w-100';
    guestLoginButton.textContent = 'Login as Guest';
    
    // Add click event listener for guest login
    guestLoginButton.addEventListener('click', function(e) {
      e.preventDefault();
      
      // Store guest user info in session storage
      sessionStorage.setItem('currentUser', JSON.stringify({
        email: 'guest@example.com',
        name: 'Guest User',
        isGuest: true
      }));
      
      // Navigate to dashboard
      window.location.href = './mainhome/index.html';
    });
    
    // Add the guest login button to the div, then to the form
    guestLoginDiv.appendChild(guestLoginButton);
    loginForm.appendChild(guestLoginDiv);
  });