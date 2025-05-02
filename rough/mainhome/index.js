// document.addEventListener("DOMContentLoaded", function() {
  const stores = [
    {
      "id": "rest_001",
      "category": "restaurants",
      "name": "Spice Junction",
      "image_url": "https://i.pinimg.com/736x/76/9a/f8/769af8c5f4e98aff9560d7ba7583aee5.jpg",
      "location": "123 MG Road, Mumbai, Maharashtra"
    },
    {
      "id": "rest_002",
      "category": "restaurants",
      "name": "Tandoori Delights",
      "image_url": "https://i.pinimg.com/736x/d5/ad/42/d5ad42da851748ccdf9ff3c4a4dd3bd4.jpg",
      "location": "456 Connaught Place, New Delhi, Delhi"
    },
    {
      "id": "rest_003",
      "category": "restaurants",
      "name": "Dosa Paradise",
      "image_url": "https://i.pinimg.com/736x/0b/e4/7a/0be47ad5d2427db37badb02293b14fde.jpg",
      "location": "789 Brigade Road, Bangalore, Karnataka"
    },
    {
      "id": "rest_004",
      "category": "restaurants",
      "name": "Biryani House",
      "image_url": "https://i.pinimg.com/736x/1b/2d/52/1b2d52a869be67eaf04d44b9bf4cc14e.jpg",
      "location": "321 Charminar Road, Hyderabad, Telangana"
    },
    {
      "id": "rest_005",
      "category": "restaurants",
      "name": "Punjabi Dhaba",
      "image_url": "https://i.pinimg.com/736x/d8/eb/f9/d8ebf9ec16e64f508b9be7c95e6c9712.jpg",
      "location": "654 Lawrence Road, Amritsar, Punjab"
    },
    {
      "id": "rest_006",
      "category": "restaurants",
      "name": "Chaat Corner",
      "image_url": "https://i.pinimg.com/736x/68/7e/16/687e16b383db5a854552169aacf463e5.jpg",
      "location": "987 Khari Baoli, Old Delhi, Delhi"
    },
    {
      "id": "rest_007",
      "category": "restaurants",
      "name": "Thali Mahal",
      "image_url": "https://i.pinimg.com/736x/e1/f5/3d/e1f53dd4504e9ecd20f0a9ca06f25849.jpg",
      "location": "741 SG Highway, Ahmedabad, Gujarat"
    },
    {
      "id": "rest_008",
      "category": "restaurants",
      "name": "Kerala Kitchen",
      "image_url": "https://i.pinimg.com/736x/82/6d/5a/826d5a79c6aa1bc42eb433dfe40029d8.jpg",
      "location": "369 Marine Drive, Kochi, Kerala"
    },
    {
      "id": "rest_009", 
      "category": "restaurants",
      "name": "Bengali Bites",
      "image_url": "https://i.pinimg.com/736x/43/a8/22/43a8227025c5d3daaf33ab07498b6dd3.jpg",
      "location": "852 Park Street, Kolkata, West Bengal"
    },
    {
      "id": "rest_010",
      "category": "restaurants",
      "name": "Royal Rajasthani",
      "image_url": "https://i.pinimg.com/736x/b8/c4/0b/b8c40b73d3f7fa78032a7b5c9422486f.jpg",
      "location": "159 MI Road, Jaipur, Rajasthan"
    },
  
    {
      "id": "clothes_001",
      "category": "shopping",
      "name": "Saree Sensation",
      "image_url": "https://i.pinimg.com/736x/3e/49/c8/3e49c811ab09a8efe5bffd3d8ab72036.jpg",
      "location": "123 Fashion Street, Mumbai, Maharashtra"
    },
    {
      "id": "clothes_002",
      "category": "shopping",
      "name": "Ethnic Elegance",
      "image_url": "https://i.pinimg.com/736x/ee/9a/46/ee9a4613d6d50e4521570be52d30719a.jpg",
      "location": "456 Chandni Chowk, Delhi, Delhi"
    },
    {
      "id": "clothes_003",
      "category": "shopping",
      "name": "Silk Emporium",
      "image_url": "https://i.pinimg.com/736x/4a/e9/48/4ae94860d8160431bf267ca6cbfefd32.jpg",
      "location": "789 Commercial Street, Bangalore, Karnataka"
    },
    {
      "id": "clothes_004",
      "category": "shopping",
      "name": "Bandhani Bazaar",
      "image_url": "https://i.pinimg.com/736x/d9/d8/c2/d9d8c205e4be192309cb92867264518f.jpg",
      "location": "321 Relief Road, Ahmedabad, Gujarat"
    },
    {
      "id": "clothes_005",
      "category": "shopping",
      "name": "Modern Kurta",
      "image_url": "https://i.pinimg.com/736x/ee/9a/46/ee9a4613d6d50e4521570be52d30719a.jpg",
      "location": "654 Linking Road, Mumbai, Maharashtra"
    },
    {
      "id": "clothes_006",
      "category": "shopping",
      "name": "Lehenga Luxe",
      "image_url": "https://i.pinimg.com/736x/21/28/1b/21281b4fbe857d8d54c8a2fa08d4f0e0.jpg",
      "location": "987 Lajpat Nagar, Delhi, Delhi"
    },
    {
      "id": "clothes_007",
      "category": "shopping",
      "name": "Designer Dhoti",
      "image_url": "https://i.pinimg.com/736x/f7/46/c0/f746c01c0deaba960d5d9cf6c4526371.jpg",
      "location": "741 Khau Galli, Pune, Maharashtra"
    },
    {
      "id": "clothes_008",
      "category": "shopping",
      "name": "Kashmiri Crafts",
      "image_url": "https://i.pinimg.com/736x/80/ad/94/80ad948132da2431d0319793173297bb.jpg",
      "location": "369 Dal Lake Road, Srinagar, Jammu & Kashmir"
    },
    {
      "id": "clothes_009",
      "category": "shopping",
      "name": "Banarasi Boutique",
      "image_url": "https://i.pinimg.com/736x/b6/81/3e/b6813e90a7fe94ef854b84e50df496d7.jpg",
      "location": "852 Vishwanath Gali, Varanasi, Uttar Pradesh"
    },
    {
      "id": "clothes_010",
      "category": "shopping",
      "name": "Patola Paradise",
      "image_url": "https://i.pinimg.com/736x/4f/d2/a0/4fd2a05c5f12550768412296c0042862.jpg",
      "location": "159 Manek Chowk, Ahmedabad, Gujarat"
    },
  
    {
      "id": "pub_001",
      "category": "nightlife",
      "name": "Bollywood Beats",
      "image_url": "https://i.pinimg.com/736x/b8/31/f3/b831f303eca80505c966a8bd8c585e16.jpg",
      "location": "123 Juhu Beach Road, Mumbai, Maharashtra"
    },
    {
      "id": "pub_002",
      "category": "nightlife",
      "name": "Desi Drinks",
      "image_url": "https://i.pinimg.com/736x/ce/43/1d/ce431dd897a256db7dfca183298b49b8.jpg",
      "location": "456 Hauz Khas Village, Delhi, Delhi"
    },
    {
      "id": "pub_003",
      "category": "nightlife",
      "name": "The Masala Bar",
      "image_url": "https://i.pinimg.com/736x/31/c6/8f/31c68f105ebefe1fdad2929e09c22849.jpg",
      "location": "789 Indiranagar, Bangalore, Karnataka"
    },
    {
      "id": "pub_004",
      "category": "nightlife",
      "name": "Lassi Lounge",
      "image_url": "https://i.pinimg.com/736x/70/53/28/70532832c1f69f421806cb1a939b05d7.jpg",
      "location": "321 Mall Road, Chandigarh, Punjab"
    },
    {
      "id": "pub_005",
      "category": "nightlife",
      "name": "Chai & Chill",
      "image_url": "https://i.pinimg.com/736x/55/69/74/556974c9fc2dd841abf9b4d9d75efb23.jpg",
      "location": "654 FC Road, Pune, Maharashtra"
    },
    {
      "id": "pub_006",
      "category": "nightlife",
      "name": "Goa Beach Club",
      "image_url": "https://i.pinimg.com/736x/28/2d/52/282d5244997facd13177148cd58d2894.jpg",
      "location": "987 Baga Beach, Goa"
    },
    {
      "id": "pub_007", 
      "category": "nightlife",
      "name": "Mehfil Nights",
      "image_url": "https://i.pinimg.com/736x/70/b6/37/70b6377d580a306dd43a1871803f7f7a.jpg",
      "location": "741 Park Street, Kolkata, West Bengal"
    },
    {
      "id": "pub_008",
      "category": "nightlife",
      "name": "Royal Hookah",
      "image_url": "https://i.pinimg.com/736x/30/05/8d/30058d370b20e54d189ebf7469f81c76.jpg",
      "location": "369 City Palace Road, Udaipur, Rajasthan"
    },
    {
      "id": "pub_009",
      "category": "nightlife",
      "name": "Dhol Beats",
      "image_url": "https://i.pinimg.com/736x/1f/16/eb/1f16ebe41b8db538788a7d4a717320a4.jpg",
      "location": "852 Sector 17, Chandigarh, Punjab"
    },
    {
      "id": "pub_010",
      "category": "nightlife",
      "name": "Classical Corner",
      "image_url": "https://i.pinimg.com/736x/65/3d/f0/653df05ad8f0c3a5313348088402d83f.jpg",
      "location": "159 MG Road, Chennai, Tamil Nadu"
    },
  
    {
      "id": "jewelry_001",
      "category": "jewelry",
      "name": "Kundan Kreations",
      "image_url": "https://i.pinimg.com/736x/e3/c7/61/e3c761b8f31e988be80ea791bd0ff012.jpg",
      "location": "123 Zaveri Bazaar, Mumbai, Maharashtra"
    },
    {
      "id": "jewelry_002",
      "category": "jewelry",
      "name": "Meenakari Marvels",
      "image_url": "https://i.pinimg.com/736x/08/50/8f/08508f9f6b7e41da901a9fc7a8a02399.jpg",
      "location": "456 Johari Bazaar, Jaipur, Rajasthan"
    },
    {
      "id": "jewelry_003",
      "category": "jewelry",
      "name": "Gold Galaxy",
      "image_url": "https://i.pinimg.com/736x/a3/82/de/a382ded7e1f267170c3a7ec3be483f0e.jpg",
      "location": "789 T Nagar, Chennai, Tamil Nadu"
    },
    {
      "id": "jewelry_004",
      "category": "jewelry",
      "name": "Temple Jewels",
      "image_url": "https://i.pinimg.com/736x/02/0d/37/020d37cc07cb4dd4b79b9efb2238153a.jpg",
      "location": "321 MG Road, Kochi, Kerala"
    },
    {
      "id": "jewelry_005",
      "category": "jewelry",
      "name": "Diamond Diwali",
      "image_url": "https://i.pinimg.com/736x/64/06/28/640628057ea29e8cf1dbba67bd24ae74.jpg",
      "location": "654 CG Road, Ahmedabad, Gujarat"
    },
    {
      "id": "jewelry_006",
      "category": "jewelry",
      "name": "Polki Paradise",
      "image_url": "https://i.pinimg.com/736x/56/5e/8f/565e8f759996d80dfc516836b59d88af.jpg",
      "location": "987 South Extension, Delhi, Delhi"
    },
    {
      "id": "jewelry_007",
      "category": "jewelry", 
      "name": "Silver Serenity",
      "image_url": "https://i.pinimg.com/736x/13/39/3c/13393c33d558acfc3944f7e98b4ce7c4.jpg",
      "location": "741 Commercial Street, Bangalore, Karnataka"
    },
    {
      "id": "jewelry_008",
      "category": "jewelry",
      "name": "Hyderabadi Heritage",
      "image_url": "https://i.pinimg.com/736x/e8/2f/ae/e82faefbcf27802cc6b690e5fa208c6c.jpg",
      "location": "369 Charminar Road, Hyderabad, Telangana"
    },
    {
      "id": "jewelry_009",
      "category": "jewelry",
      "name": "Bengali Bangles",
      "image_url": "https://i.pinimg.com/736x/54/d9/43/54d943e43ca83c0c214587f5fbf682b9.jpg",
      "location": "852 New Market, Kolkata, West Bengal"
    },
    {
      "id": "jewelry_010",
      "category": "jewelry",
      "name": "Navratna Treasures",
      "image_url": "https://i.pinimg.com/736x/a3/0d/ca/a30dca6fb396c6178c28c3937a1b428a.jpg",
      "location": "159 Sarafa Bazaar, Indore, Madhya Pradesh"
    }
  ];

// Function to get logged-in users from localStorage
function getLoggedInUser() {
  let users = JSON.parse(localStorage.getItem("loggedInUsers")) || [];
  return users.length > 0 ? users[users.length - 1] : null;  // Show the most recent user
}

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
document.addEventListener("DOMContentLoaded", function() {
  updateWelcomeMessage();
  
  // Initialize radio button functionality
  const nameInputContainer = document.getElementById("nameInputContainer");
  const useNameRadio = document.getElementById("useName");
  const anonymousRadio = document.getElementById("anonymous");
  
  if (useNameRadio && anonymousRadio) {
    useNameRadio.addEventListener("change", function() {
      if (this.checked) {
        nameInputContainer.style.display = "block";
      }
    });
    
    anonymousRadio.addEventListener("change", function() {
      if (this.checked) {
        nameInputContainer.style.display = "none";
      }
    });
    
    // Set initial state based on logged in user
    const loggedInUser = getLoggedInUser();
    if (loggedInUser) {
      document.getElementById("name").value = loggedInUser.name;
      useNameRadio.checked = true;
      nameInputContainer.style.display = "block";
    } else {
      anonymousRadio.checked = true;
      nameInputContainer.style.display = "none";
    }
  }
  
  // Initialize star rating functionality
  let starsContainer = document.querySelector(".rating-stars");
  if (starsContainer) {
    starsContainer.addEventListener("click", function (event) {
      let clickedStar = event.target;

      // Check if a star (i element) was clicked
      if (clickedStar.tagName === "I") {
        let rating = parseInt(clickedStar.getAttribute("data-value"));

        // Remove "selected" from all stars
        document.querySelectorAll(".rating-stars i").forEach(star => {
          star.classList.remove("selected");
        });

        // Add "selected" class to clicked star and all previous ones
        for (let i = 0; i < rating; i++) {
          document.querySelectorAll(".rating-stars i")[i].classList.add("selected");
        }
      }
    });
  }
});

function displayCards(cat) {
  let catWiseData = document.getElementById("catWiseData");

  catWiseData.innerHTML = "";
  catWiseData.style.display = "flex";
  catWiseData.style.flexWrap = "wrap";
  catWiseData.style.gap = "15px";
  catWiseData.style.padding = "20px";
  catWiseData.style.alignItems = "center";
  catWiseData.style.alignContent = "center";
  catWiseData.style.justifyContent = "center";

  let filteredData = stores.filter(x => x.category === cat);
  filteredData.forEach((item) => {
    let shopdiv = document.createElement("div");
  
    // Apply inline styles for card layout
    shopdiv.style.border = "1px solid #ddd";
    shopdiv.style.borderRadius = "10px";
    shopdiv.style.boxShadow = "0 4px 8px rgba(0,0,0,0.1)";
    shopdiv.style.margin = "10px";
    shopdiv.style.padding = "15px";
    shopdiv.style.width = "450px";
    shopdiv.style.textAlign = "center";
    shopdiv.style.justifyContent = "center";
    shopdiv.style.display = "inline-block";
    shopdiv.style.transition = "transform 0.3s ease-in-out";
    shopdiv.style.backgroundColor = "#fff";
    shopdiv.style.cursor = "pointer";

    shopdiv.addEventListener("mouseover", () => {
      shopdiv.style.transform = "scale(1.05)";
    });
    shopdiv.addEventListener("mouseout", () => {
      shopdiv.style.transform = "scale(1)";
    });

    // Image styling
    let img = document.createElement("img");
    img.src = item.image_url;
    img.alt = item.name;
    img.style.width = "100%";
    img.style.height = "180px";
    img.style.borderRadius = "8px";
    img.style.objectFit = "cover";

    // Title
    let title = document.createElement("h2");
    title.innerText = item.name;
    title.style.fontSize = "18px";
    title.style.margin = "10px 0";
    title.style.color = "#333";

    // Location
    let location = document.createElement("p");
    location.innerHTML = `<strong>Location:</strong> ${item.location}`;
    location.style.fontSize = "14px";
    location.style.color = "#666";
    
    // Append elements to card
    shopdiv.appendChild(img);
    shopdiv.appendChild(title);
    shopdiv.appendChild(location);
    catWiseData.appendChild(shopdiv);

    // When card is clicked, open in new page with details
    shopdiv.addEventListener("click", () => {
      openStoreDetailsPage(item);
    });
  });
}

// Function to open store details in a new page
function openStoreDetailsPage(item) {
  // Create a new page/div that covers the entire screen
  let detailsPage = document.createElement("div");
  detailsPage.style.position = "fixed";
  detailsPage.style.top = "0";
  detailsPage.style.left = "0";
  detailsPage.style.width = "100%";
  detailsPage.style.height = "100%";
  detailsPage.style.backgroundColor = "#fff";
  detailsPage.style.zIndex = "1000";
  detailsPage.style.overflow = "auto";
  detailsPage.style.padding = "30px";

  // Add a back button
  let backButton = document.createElement("button");
  backButton.innerText = "← Back";
  backButton.style.padding = "10px 15px";
  backButton.style.backgroundColor = "#f0f0f0";
  backButton.style.border = "none";
  backButton.style.borderRadius = "5px";
  backButton.style.cursor = "pointer";
  backButton.style.marginBottom = "20px";
  backButton.addEventListener("click", () => {
    document.body.removeChild(detailsPage);
  });

  // Create content container
  let contentContainer = document.createElement("div");
  contentContainer.style.display = "flex";
  contentContainer.style.flexDirection = "column";
  contentContainer.style.alignItems = "center";
  contentContainer.style.maxWidth = "800px";
  contentContainer.style.margin = "0 auto";

  // Store image
  let img = document.createElement("img");
  img.src = item.image_url;
  img.alt = item.name;
  img.style.width = "100%";
  img.style.maxHeight = "400px";
  img.style.objectFit = "cover";
  img.style.borderRadius = "10px";
  img.style.marginBottom = "20px";

  // Store details
  let title = document.createElement("h1");
  title.innerText = item.name;
  title.style.fontSize = "28px";
  title.style.margin = "10px 0";

  let category = document.createElement("p");
  category.innerHTML = `<strong>Category:</strong> ${item.category}`;
  category.style.fontSize = "16px";

  let location = document.createElement("p");
  location.innerHTML = `<strong>Location:</strong> ${item.location}`;
  location.style.fontSize = "16px";
  location.style.marginBottom = "20px";

  // Write a review button
  let reviewButton = document.createElement("button");
  reviewButton.innerText = "Write a Review";
  reviewButton.style.padding = "12px 20px";
  reviewButton.style.backgroundColor = "#007bff";
  reviewButton.style.color = "#fff";
  reviewButton.style.border = "none";
  reviewButton.style.borderRadius = "5px";
  reviewButton.style.cursor = "pointer";
  reviewButton.style.fontSize = "16px";
  reviewButton.style.marginTop = "20px";
  reviewButton.addEventListener("click", () => {
    openReviewModal(item.name, item.category);
  });

  // Reviews section
  let reviewsSection = document.createElement("div");
  reviewsSection.style.width = "100%";
  reviewsSection.style.marginTop = "40px";
  
  let reviewsTitle = document.createElement("h2");
  reviewsTitle.innerText = "Reviews";
  reviewsTitle.style.textAlign = "left";
  reviewsTitle.style.width = "100%";
  reviewsTitle.style.borderBottom = "1px solid #ddd";
  reviewsTitle.style.paddingBottom = "10px";
  
  reviewsSection.appendChild(reviewsTitle);
  
  // Get reviews for this store
  const storedReviews = JSON.parse(localStorage.getItem("ReviewsfromUsers")) || [];
  const storeReviews = storedReviews.filter(review => review.storeName === item.name);
  
  // Sort reviews by date (newest first)
  storeReviews.sort((a, b) => new Date(b.date) - new Date(a.date));
  
  if (storeReviews.length === 0) {
    let noReviews = document.createElement("p");
    noReviews.innerText = "No reviews yet. Be the first to leave a review!";
    noReviews.style.textAlign = "center";
    noReviews.style.marginTop = "20px";
    noReviews.style.color = "#666";
    reviewsSection.appendChild(noReviews);
  } else {
    // Display reviews
    storeReviews.forEach(review => {
      let reviewCard = document.createElement("div");
      reviewCard.style.border = "1px solid #eee";
      reviewCard.style.borderRadius = "8px";
      reviewCard.style.padding = "15px";
      reviewCard.style.margin = "15px 0";
      reviewCard.style.backgroundColor = "#f9f9f9";
      
      let reviewHeader = document.createElement("div");
      reviewHeader.style.display = "flex";
      reviewHeader.style.justifyContent = "space-between";
      reviewHeader.style.marginBottom = "10px";
      
      let reviewer = document.createElement("strong");
      reviewer.innerText = review.username;
      
      let stars = document.createElement("div");
      stars.innerHTML = "★".repeat(review.stars) + "☆".repeat(5 - review.stars);
      stars.style.color = "#ffc107";
      
      reviewHeader.appendChild(reviewer);
      reviewHeader.appendChild(stars);
      
      let reviewContent = document.createElement("p");
      reviewContent.innerText = review.text;
      reviewContent.style.marginBottom = "10px";
      
      let reviewDate = document.createElement("div");
      reviewDate.innerText = review.date;
      reviewDate.style.fontSize = "0.8em";
      reviewDate.style.color = "#666";
      reviewDate.style.textAlign = "right";
      
      reviewCard.appendChild(reviewHeader);
      reviewCard.appendChild(reviewContent);
      reviewCard.appendChild(reviewDate);
      
      reviewsSection.appendChild(reviewCard);
    });
  }

  // Append all elements
  contentContainer.appendChild(img);
  contentContainer.appendChild(title);
  contentContainer.appendChild(category);
  contentContainer.appendChild(location);
  contentContainer.appendChild(reviewButton);
  contentContainer.appendChild(reviewsSection);

  detailsPage.appendChild(backButton);
  detailsPage.appendChild(contentContainer);
  document.body.appendChild(detailsPage);
}

// Function to open the review modal
function openReviewModal(storeName, category) {
  document.getElementById("storeName").innerText = `Review for: ${storeName}`;
  document.getElementById("reviewText").value = "";
  document.querySelectorAll(".rating-stars i").forEach(star => star.classList.remove("selected"));
  
  // Store the category in the modal's dataset for later use
  const modal = document.getElementById("reviewModal");
  modal.dataset.category = category;
  modal.dataset.storeName = storeName;
  
  // Set up name/anonymous options
  const loggedInUser = getLoggedInUser();
  const nameInput = document.getElementById("name");
  
  if (loggedInUser) {
    nameInput.value = loggedInUser.name;
    document.getElementById("useName").checked = true;
    document.getElementById("nameInputContainer").style.display = "block";
  } else {
    document.getElementById("anonymous").checked = true;
    document.getElementById("nameInputContainer").style.display = "none";
  }
  
  let reviewModal = new bootstrap.Modal(document.getElementById("reviewModal"));
  reviewModal.show();
}

// Submit review functionality with SweetAlert
// Update the submit review functionality
document.getElementById("submitReview").addEventListener("click", function() {
  // Get form values
  const reviewText = document.getElementById("reviewText").value;
  const selectedStars = document.querySelectorAll(".rating-stars i.selected").length;
  const modal = document.getElementById("reviewModal");
  const category = modal.dataset.category;
  const storeName = modal.dataset.storeName;
  const postAnonymously = document.getElementById("anonymous").checked;
  const userName = postAnonymously ? "Anonymous" : document.getElementById("name").value;

  // Validation
  if (selectedStars === 0) {
    Swal.fire("Oops!", "Please select a star rating before submitting!", "warning");
    return;
  }
  if (reviewText.trim() === "") {
    Swal.fire("Oops!", "Please write a review before submitting!", "warning");
    return;
  }
  if (!postAnonymously && userName.trim() === "") {
    Swal.fire("Oops!", "Please enter your name or select anonymous!", "warning");
    return;
  }

  // Create new review
  const newReview = {
    username: userName,
    text: reviewText,
    stars: selectedStars,
    category: category,
    storeName: storeName,
    date: new Date().toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    })
  };

  // Save to localStorage
  let existingReviews = JSON.parse(localStorage.getItem("ReviewsfromUsers")) || [];
  existingReviews.push(newReview);
  localStorage.setItem("ReviewsfromUsers", JSON.stringify(existingReviews));

  // Close modal
  const reviewModal = bootstrap.Modal.getInstance(document.getElementById("reviewModal"));
  if (reviewModal) {
    reviewModal.hide();
  }

  // Clear form
  document.getElementById("reviewText").value = "";
  document.querySelectorAll(".rating-stars i").forEach(star => star.classList.remove("selected"));

  // Immediately update the UI
  updateReviewsUI(storeName, newReview);

  // Show success message
  Swal.fire({
    title: "Review Submitted!",
    text: "Thank you for your feedback.",
    icon: "success",
    confirmButtonText: "OK"
  });
  updateReviewsUI(newReview)
});

// Function to update UI with new review
function updateReviewsUI(storeName, newReview) {
  // Find the open details page
  const detailsPage = document.querySelector("div[style*='position: fixed; top: 0']");
  if (!detailsPage) return;

  // Find the reviews section
  const reviewsSection = detailsPage.querySelector("div[style*='marginTop: 40px']");
  if (!reviewsSection) return;

  // Remove "no reviews" message if present
  const noReviewsMsg = reviewsSection.querySelector("p");
  if (noReviewsMsg && noReviewsMsg.textContent.includes("No reviews yet")) {
    reviewsSection.removeChild(noReviewsMsg);
  }

  // Create new review card
  const reviewCard = document.createElement("div");
  reviewCard.style.border = "1px solid #eee";
  reviewCard.style.borderRadius = "8px";
  reviewCard.style.padding = "15px";
  reviewCard.style.margin = "15px 0";
  reviewCard.style.backgroundColor = "#f9f9f9";
  reviewCard.style.animation = "fadeIn 0.5s";

  // Add animation style if not already present
  if (!document.querySelector("style[data-review-animation]")) {
    const style = document.createElement("style");
    style.dataset.reviewAnimation = "true";
    style.textContent = `
      @keyframes fadeIn {
        from { opacity: 0; transform: translateY(10px); }
        to { opacity: 1; transform: translateY(0); }
      }
    `;
    document.head.appendChild(style);
  }

  // Build review card content
  const reviewHeader = document.createElement("div");
  reviewHeader.style.display = "flex";
  reviewHeader.style.justifyContent = "space-between";
  reviewHeader.style.marginBottom = "10px";

  const reviewer = document.createElement("strong");
  reviewer.textContent = newReview.username;

  const stars = document.createElement("div");
  stars.innerHTML = "★".repeat(newReview.stars) + "☆".repeat(5 - newReview.stars);
  stars.style.color = "#ffc107";

  const reviewContent = document.createElement("p");
  reviewContent.textContent = newReview.text;
  reviewContent.style.marginBottom = "10px";

  const reviewDate = document.createElement("div");
  reviewDate.textContent = newReview.date;
  reviewDate.style.fontSize = "0.8em";
  reviewDate.style.color = "#666";
  reviewDate.style.textAlign = "right";

  // Assemble card
  reviewHeader.appendChild(reviewer);
  reviewHeader.appendChild(stars);
  reviewCard.appendChild(reviewHeader);
  reviewCard.appendChild(reviewContent);
  reviewCard.appendChild(reviewDate);

  // Insert at top of reviews section
  const reviewsTitle = reviewsSection.querySelector("h2");
  if (reviewsTitle) {
    reviewsSection.insertBefore(reviewCard, reviewsTitle.nextSibling);
  } else {
    reviewsSection.appendChild(reviewCard);
  }

  // Also update the store's average rating if needed
  updateStoreRating(storeName);
}

// Optional: Function to update store's average rating
function updateStoreRating(storeName) {
  const store = stores.find(s => s.name === storeName);
  if (!store || !store.rating) return;
  
  const allReviews = JSON.parse(localStorage.getItem("ReviewsfromUsers")) || [];
  const storeReviews = allReviews.filter(r => r.storeName === storeName);
  
  if (storeReviews.length > 0) {
    const avgRating = storeReviews.reduce((sum, review) => sum + review.stars, 0) / storeReviews.length;
    store.rating = parseFloat(avgRating.toFixed(1));
    store.reviews = storeReviews.length;
  }
}
// Event listeners for category buttons
const res_btn = document.getElementById("res_div");
res_btn.addEventListener("click", () => displayCards("restaurants"));

const night_btn = document.getElementById("night_div");
night_btn.addEventListener("click", () => displayCards("nightlife"));

const pub_btn = document.getElementById("shop_div");
pub_btn.addEventListener("click", () => displayCards("shopping"));

const jwle_btn = document.getElementById("jew_div");
jwle_btn.addEventListener("click", () => displayCards("jewelry"));

// Search functionality
document.getElementById("searchInput").addEventListener("input", function() {
  const searchQuery = this.value.toLowerCase();
  const filteredStores = stores.filter(store =>
    store.category.toLowerCase().includes(searchQuery) ||
    store.name.toLowerCase().includes(searchQuery)
  );
  displaySearchResults(filteredStores);
});

function displaySearchResults(filteredStores) {
  const container = document.querySelector(".container");
  const table = document.getElementById("allReviewsContainer");
  
  // Hide these elements when showing search results
  if (table) table.style.display = "none";
  if (container) container.style.display = "none";

  const catWiseData = document.getElementById("catWiseData");
  if (!catWiseData) return; // Guard clause if element doesn't exist
  
  catWiseData.innerHTML = "";
  catWiseData.style.display = "grid";
  catWiseData.style.gridTemplateColumns = "repeat(auto-fit, minmax(280px, 1fr))";
  catWiseData.style.gap = "20px";
  catWiseData.style.padding = "20px";

  if (filteredStores.length === 0) {
    catWiseData.innerHTML = "<p style='text-align:center; font-size:18px; color:#555;'>No results found.</p>";
    return;
  }

  filteredStores.forEach((item) => {
    let shopdiv = document.createElement("div");
    shopdiv.classList.add("shop-card");

    let img = document.createElement("img");
    img.src = item.image_url;
    img.alt = item.name;
    img.classList.add("shop-img");

    let title = document.createElement("h3");
    title.innerText = item.name;
    title.classList.add("shop-title");

    let location = document.createElement("p");
    location.innerHTML = `<strong>Location:</strong> ${item.location}`;
    location.classList.add("shop-location");

    shopdiv.appendChild(img);
    shopdiv.appendChild(title);
    shopdiv.appendChild(location);
    catWiseData.appendChild(shopdiv);

    shopdiv.addEventListener("click", () => {
      openStoreDetailsPage(item);
    });
  });
}


function handleLogout() {
  Swal.fire({
      title: 'Logout Confirmation',
      text: 'Are you sure you want to logout?',
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#0D4DFF',
      cancelButtonColor: '#ff4444',
      confirmButtonText: 'Yes, Logout'
  }).then((result) => {
      if (result.isConfirmed) {
          // Add your logout logic here
          window.location.href = '../index.html';
      }
  });
}