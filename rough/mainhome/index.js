

// document.addEventListener("DOMContentLoaded", function() {
const stores = [
  {
    "id": "rest_001",
    "category": "restaurants",
    "name": "The Gourmet Spot",
    "image_url": "https://i.pinimg.com/736x/76/9a/f8/769af8c5f4e98aff9560d7ba7583aee5.jpg",
    "location": "123 Main St, New York, NY"
  },
  {
    "id": "rest_002",
    "category": "restaurants",
    "name": "Sushi Paradise",
    "image_url": "https://i.pinimg.com/736x/d5/ad/42/d5ad42da851748ccdf9ff3c4a4dd3bd4.jpg",
    "location": "456 Elm St, Los Angeles, CA"
  },
  {
    "id": "rest_003",
    "category": "restaurants",
    "name": "Pasta Heaven",
    "image_url": "https://i.pinimg.com/736x/0b/e4/7a/0be47ad5d2427db37badb02293b14fde.jpg",
    "location": "789 Oak St, Chicago, IL"
  },
  {
    "id": "rest_004",
    "category": "restaurants",
    "name": "Grill Master",
    "image_url": "https://i.pinimg.com/736x/1b/2d/52/1b2d52a869be67eaf04d44b9bf4cc14e.jpg",
    "location": "321 Maple Ave, Houston, TX"
  },
  {
    "id": "rest_005",
    "category": "restaurants",
    "name": "Vegan Delight",
    "image_url": "https://i.pinimg.com/736x/d8/eb/f9/d8ebf9ec16e64f508b9be7c95e6c9712.jpg",
    "location": "654 Pine St, San Francisco, CA"
  },
  {
    "id": "rest_006",
    "category": "restaurants",
    "name": "Burger Bliss",
    "image_url": "https://i.pinimg.com/736x/68/7e/16/687e16b383db5a854552169aacf463e5.jpg",
    "location": "987 Willow St, Miami, FL"
  },
  {
    "id": "rest_007",
    "category": "restaurants",
    "name": "Taco Fiesta",
    "image_url": "https://i.pinimg.com/736x/e1/f5/3d/e1f53dd4504e9ecd20f0a9ca06f25849.jpg",
    "location": "741 Palm St, Austin, TX"
  },
  {
    "id": "rest_008",
    "category": "restaurants",
    "name": "Steakhouse Elite",
    "image_url": "https://i.pinimg.com/736x/82/6d/5a/826d5a79c6aa1bc42eb433dfe40029d8.jpg",
    "location": "369 Cedar St, Denver, CO"
  },
  {
    "id": "rest_009", "category": "restaurants",
    "name": "Deli Delights",
    "image_url": "https://i.pinimg.com/736x/43/a8/22/43a8227025c5d3daaf33ab07498b6dd3.jpg",
    "location": "852 Spruce St, Seattle, WA"
  },
  {
    "id": "rest_010",
    "category": "restaurants",
    "name": "BBQ Junction",
    "image_url": "https://i.pinimg.com/736x/b8/c4/0b/b8c40b73d3f7fa78032a7b5c9422486f.jpg",
    "location": "159 Birch St, Boston, MA"
  },

  {
    "id": "clothes_001",
    "category": "shopping",
    "name": "Fashion Forward",
    "image_url": "https://i.pinimg.com/736x/3e/49/c8/3e49c811ab09a8efe5bffd3d8ab72036.jpg",
    "location": "123 Main St, New York, NY"
  },
  {
    "id": "clothes_002",
    "category": "shopping",
    "name": "Urban Outfit",
    "image_url": "https://i.pinimg.com/736x/ee/9a/46/ee9a4613d6d50e4521570be52d30719a.jpg",
    "location": "456 Elm St, Los Angeles, CA"
  },
  {
    "id": "clothes_003",
    "category": "shopping",
    "name": "Trendy Threads",
    "image_url": "https://i.pinimg.com/736x/4a/e9/48/4ae94860d8160431bf267ca6cbfefd32.jpg",
    "location": "789 Oak St, Chicago, IL"
  },
  {
    "id": "clothes_004",
    "category": "shopping",
    "name": "The Classic Wear",
    "image_url": "https://i.pinimg.com/736x/d9/d8/c2/d9d8c205e4be192309cb92867264518f.jpg",
    "location": "321 Maple Ave, Houston, TX"
  },
  {
    "id": "clothes_005",
    "category": "shopping",
    "name": "Modern Attire",
    "image_url": "https://i.pinimg.com/736x/ee/9a/46/ee9a4613d6d50e4521570be52d30719a.jpg",
    "location": "654 Pine St, San Francisco, CA"
  },
  {
    "id": "clothes_006",
    "category": "shopping",
    "name": "Streetwear Central",
    "image_url": "https://i.pinimg.com/736x/21/28/1b/21281b4fbe857d8d54c8a2fa08d4f0e0.jpg",
    "location": "987 Willow St, Miami, FL"
  },
  {
    "id": "clothes_007",
    "category": "shopping",
    "name": "Luxury Threads",
    "image_url": "https://i.pinimg.com/736x/f7/46/c0/f746c01c0deaba960d5d9cf6c4526371.jpg",
    "location": "741 Palm St, Austin, TX"
  },
  {
    "id": "clothes_008",
    "category": "shopping",
    "name": "Vintage Vogue",
    "image_url": "https://i.pinimg.com/736x/80/ad/94/80ad948132da2431d0319793173297bb.jpg",
    "location": "369 Cedar St, Denver, CO"
  },
  {
    "id": "clothes_009",
    "category": "shopping",
    "name": "Casual Chic",
    "image_url": "https://i.pinimg.com/736x/b6/81/3e/b6813e90a7fe94ef854b84e50df496d7.jpg",
    "location": "852 Spruce St, Seattle, WA"
  },
  {
    "id": "clothes_010",
    "category": "shopping",
    "name": "The Fashion Hub",
    "image_url": "https://i.pinimg.com/736x/4f/d2/a0/4fd2a05c5f12550768412296c0042862.jpg",
    "location": "159 Birch St, Boston, MA"
  },

  {
    "id": "pub_001",
    "category": "nightlife",
    "name": "The Tipsy Tavern",
    "image_url": "https://i.pinimg.com/736x/b8/31/f3/b831f303eca80505c966a8bd8c585e16.jpg",
    "location": "123 Main St, New York, NY"
  },
  {
    "id": "pub_002",
    "category": "nightlife",
    "name": "Golden Ale House",
    "image_url": "https://i.pinimg.com/736x/ce/43/1d/ce431dd897a256db7dfca183298b49b8.jpg",
    "location": "456 Elm St, Los Angeles, CA"
  },
  {
    "id": "pub_003",
    "category": "nightlife",
    "name": "The Crafty Pint",
    "image_url": "https://i.pinimg.com/736x/31/c6/8f/31c68f105ebefe1fdad2929e09c22849.jpg",
    "location": "789 Oak St, Chicago, IL"
  },
  {
    "id": "pub_004",
    "category": "nightlife",
    "name": "Brew Haven",
    "image_url": "https://i.pinimg.com/736x/70/53/28/70532832c1f69f421806cb1a939b05d7.jpg",
    "location": "321 Maple Ave, Houston, TX"
  },
  {
    "id": "pub_005",
    "category": "nightlife",
    "name": "The Drunken Barrel",
    "image_url": "https://i.pinimg.com/736x/55/69/74/556974c9fc2dd841abf9b4d9d75efb23.jpg",
    "location": "654 Pine St, San Francisco, CA"
  },
  {
    "id": "pub_006",
    "category": "nightlife",
    "name": "Moonlight Lounge",
    "image_url": "https://i.pinimg.com/736x/28/2d/52/282d5244997facd13177148cd58d2894.jpg",
    "location": "987 Willow St, Miami, FL"
  },
  {
    "id": "pub_007", "category": "nightlife",
    "name": "Neon Nights",
    "image_url": "https://i.pinimg.com/736x/70/b6/37/70b6377d580a306dd43a1871803f7f7a.jpg",
    "location": "741 Palm St, Austin, TX"
  },
  {
    "id": "pub_008",
    "category": "nightlife",
    "name": "The Velvet Room",
    "image_url": "https://i.pinimg.com/736x/30/05/8d/30058d370b20e54d189ebf7469f81c76.jpg",
    "location": "369 Cedar St, Denver, CO"
  },
  {
    "id": "pub_009",
    "category": "nightlife",
    "name": "After Hours",
    "image_url": "https://i.pinimg.com/736x/1f/16/eb/1f16ebe41b8db538788a7d4a717320a4.jpg",
    "location": "852 Spruce St, Seattle, WA"
  },
  {
    "id": "pub_010",
    "category": "nightlife",
    "name": "The Chill Spot",
    "image_url": "https://i.pinimg.com/736x/65/3d/f0/653df05ad8f0c3a5313348088402d83f.jpg",
    "location": "159 Birch St, Boston, MA"

  },

  {
    "id": "jewelry_001",
    "category": "jewelry",
    "name": "Gleaming Gems",
    "image_url": "https://i.pinimg.com/736x/e3/c7/61/e3c761b8f31e988be80ea791bd0ff012.jpg",
    "location": "123 Diamond St, New York, NY"
  },
  {
    "id": "jewelry_002",
    "category": "jewelry",
    "name": "The Sparkling Vault",
    "image_url": "https://i.pinimg.com/736x/08/50/8f/08508f9f6b7e41da901a9fc7a8a02399.jpg",
    "location": "456 Sapphire Ave, Los Angeles, CA"
  },
  {
    "id": "jewelry_003",
    "category": "jewelry",
    "name": "Shining Jewels",
    "image_url": "https://i.pinimg.com/736x/a3/82/de/a382ded7e1f267170c3a7ec3be483f0e.jpg",
    "location": "789 Emerald Blvd, Chicago, IL"
  },
  {
    "id": "jewelry_004",
    "category": "jewelry",
    "name": "Luxe & Diamonds",
    "image_url": "https://i.pinimg.com/736x/02/0d/37/020d37cc07cb4dd4b79b9efb2238153a.jpg",
    "location": "321 Ruby Rd, Houston, TX"
  },
  {
    "id": "jewelry_005",
    "category": "jewelry",
    "name": "Precious Stones",
    "image_url": "https://i.pinimg.com/736x/64/06/28/640628057ea29e8cf1dbba67bd24ae74.jpg",
    "location": "654 Pearl St, San Francisco, CA"
  },
  {
    "id": "jewelry_006",
    "category": "jewelry",
    "name": "Opulent Ornaments",
    "image_url": "https://i.pinimg.com/736x/56/5e/8f/565e8f759996d80dfc516836b59d88af.jpg",
    "location": "987 Willow St, Miami, FL"
  },
  {
    "id": "jewelry_007",
    "category": "jewelry", "name": "Diamond Dreams",
    "image_url": "https://i.pinimg.com/736x/13/39/3c/13393c33d558acfc3944f7e98b4ce7c4.jpg",
    "location": "741 Palm St, Austin, TX"
  },
  {
    "id": "jewelry_008",
    "category": "jewelry",
    "name": "Platinum Perfection",
    "image_url": "https://i.pinimg.com/736x/e8/2f/ae/e82faefbcf27802cc6b690e5fa208c6c.jpg",
    "location": "369 Cedar St, Denver, CO"
  },
  {
    "id": "jewelry_009",

    "category": "jewelry",
    "name": "The Jewel Box",
    "image_url": "https://i.pinimg.com/736x/54/d9/43/54d943e43ca83c0c214587f5fbf682b9.jpg",
    "location": "852 Spruce St, Seattle, WA"
  },
  {
    "id": "jewelry_010",
    "category": "jewelry",
    "name": "Timeless Treasures",
    "image_url": "https://i.pinimg.com/736x/a3/0d/ca/a30dca6fb396c6178c28c3937a1b428a.jpg",
    "location": "159 Birch St, Boston, MA"

  }

];




function displayCards(cat) {
  let catWiseData = document.getElementById("catWiseData")
  catWiseData.innerHTML = "";
  catWiseData.style.display = "flex"
  catWiseData.style.flexWrap = "wrap"
  catWiseData.style.gap = "15px";
  catWiseData.style.padding = "20px";
  catWiseData.style.alignItems = "center"
  catWiseData.style.alignContent = "center"
  catWiseData.style.justifyContent = "center"


  let filteredData = stores.filter(x => x.category === cat);
  filteredData.forEach((item) => {
    let shopdiv = document.createElement("div")
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



    // shopdiv.addEventListener("click",()=>{
    //   openReviewModal(item.name)
    // })
    shopdiv.addEventListener("click", () => {
      openReviewModal(item.name, item.category); // Pass the category as well
    });



  })
}


const res_btn = document.getElementById("res_div")
res_btn.addEventListener("click", () => displayCards("restaurants"))

const night_btn = document.getElementById("night_div")
night_btn.addEventListener("click", () => displayCards("nightlife"))
const pub_btn = document.getElementById("shop_div")
pub_btn.addEventListener("click", () => displayCards("shopping"))
const jwle_btn = document.getElementById("jew_div")
jwle_btn.addEventListener("click", () => displayCards("jewelry"))



function openReviewModal(storeName) {
  document.getElementById("storeName").innerText = `Review for: ${storeName}`;
  document.getElementById("reviewText").value = "";
  // document.getElementById("reviewImage").value = "";
  document.querySelectorAll(".rating-stars i").forEach(star => star.classList.remove("selected"));
  let reviewModal = new bootstrap.Modal(document.getElementById("reviewModal"));
  reviewModal.show();
}




document.addEventListener("DOMContentLoaded", function () {
  let starsContainer = document.querySelector(".rating-stars");

  // Ensure the container exists
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


//sweetalerts

document.getElementById("submitReview").addEventListener("click", function () {
  let reviewText = document.getElementById("reviewText").value;
  let selectedStars = document.querySelectorAll(".rating-stars i.selected").length;
  // const getdatafromstorage=JSON.parse(localStorage.getItem("ReviewsfromUsers"))
  const modal = document.getElementById("reviewModal");
  const category = modal.dataset.category;  // Get the category
  const userName=document.getElementById("name").value;


  if (selectedStars === 0) {
    Swal.fire("Oops!", "Please select a star rating before submitting!", "warning");
    return;
  }

  if (reviewText.trim() === "") {
    Swal.fire("Oops!", "Please write a review before submitting!", "warning");
    return;
  }
  let existingReviews = JSON.parse(localStorage.getItem("ReviewsfromUsers")) || [];


  let newReview = {
    username:userName,
    text: reviewText,
    stars: selectedStars,
    category: category,
    storeName: document.getElementById("storeName").innerText.replace("Review for: ", "")
  };

  existingReviews.push(newReview);
  localStorage.setItem("ReviewsfromUsers", JSON.stringify(existingReviews));


  Swal.fire({
    title: "Review Submitted!",
    text: "Thank you for your feedback.",
    icon: "success",
    confirmButtonText: "OK"
  }).then(() => {
    let reviewModal = new bootstrap.Modal(document.getElementById("reviewModal"));
    reviewModal.show();
    // reviewModal.hide();
  });
})

//all reviews button

const allReviewsBtn = document.getElementById("allReviewsbtn")
const allReviewsContainer = document.getElementById("allReviewsContainer")
const reviewTable = document.getElementById("reviewTable")
const tableBody = reviewTable.querySelector("tbody");


allReviewsBtn.addEventListener("click", () => {

  const storedReviews = JSON.parse(localStorage.getItem("ReviewsfromUsers")) || [];

  tableBody.innerHTML = "";

  if (storedReviews.length === 0) {
    tableBody.innerHTML = "<tr><td colspan='3'>No reviews yet.</td></tr>"; // Added colspan for store name
  } else {
    storedReviews.forEach(review => {
      const row = tableBody.insertRow();
      const peopleCell = row.insertCell();
      const storeCell = row.insertCell(); // Cell for store name
      const textCell = row.insertCell();
      const ratingCell = row.insertCell();

      peopleCell.textContent = review.username||"anonymus" 
      storeCell.textContent = review.storeName; // Add store name to the table
      textCell.textContent = review.text;
      ratingCell.textContent = review.stars;

    });
  }

  allReviewsContainer.style.display = "block";
  document.getElementById("catWiseData").style.display = "none";

});

// Add a function to filter reviews by category:
function getReviewsByCategory(category) {
  const storedReviews = JSON.parse(localStorage.getItem("ReviewsfromUsers")) || [];
  return storedReviews.filter(review => review.category === category);
}


// Add an event listener to the search input
document.getElementById("searchInput").addEventListener("input", function () {
  const searchQuery = this.value.toLowerCase();
  const filteredStores = stores.filter(store =>
    store.category.toLowerCase().includes(searchQuery) ||
    store.name.toLowerCase().includes(searchQuery)
  );
  displaySearchResults(filteredStores);
});

// Function to display search results
function displaySearchResults(filteredStores) {
  const catWiseData = document.getElementById("catWiseData");
  catWiseData.innerHTML = "";
  catWiseData.style.display = "flex";
  catWiseData.style.flexWrap = "wrap";
  catWiseData.style.gap = "15px";
  catWiseData.style.padding = "20px";
  catWiseData.style.alignItems = "center";
  catWiseData.style.alignContent = "center";
  catWiseData.style.justifyContent = "center";
  catWiseData.style.backgroundColor = "#7AB2B2"

  if (filteredStores.length === 0) {
    catWiseData.innerHTML = "<p>No results found.</p>";
    return;
  }

  filteredStores.forEach((item) => {
    let shopdiv = document.createElement("div");
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
    shopdiv.style.backgroundColor = "#EEF7FF"

    shopdiv.addEventListener("mouseover", () => {
      shopdiv.style.transform = "scale(1.05)";
    });
    shopdiv.addEventListener("mouseout", () => {
      shopdiv.style.transform = "scale(1)";
    });

    let img = document.createElement("img");
    img.src = item.image_url;
    img.alt = item.name;
    img.style.width = "100%";
    img.style.height = "180px";
    img.style.borderRadius = "8px";
    img.style.objectFit = "cover";

    let title = document.createElement("h2");
    title.innerText = item.name;
    title.style.fontSize = "18px";
    title.style.margin = "10px 0";
    title.style.color = "#333";

    let location = document.createElement("p");
    location.innerHTML = `<strong>Location:</strong> ${item.location}`;
    location.style.fontSize = "14px";
    location.style.color = "#666";

    shopdiv.appendChild(img);
    shopdiv.appendChild(title);
    shopdiv.appendChild(location);
    catWiseData.appendChild(shopdiv);

    shopdiv.addEventListener("click", () => {
      openReviewModal(item.name, item.category);
    });
  });
}


