/* =========================
   Chad JavaScript
========================= */

document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("loginForm");

    form.addEventListener("submit", (event) => {
        event.preventDefault();

        const username = document.getElementById("username").value.trim();
        const password = document.getElementById("password").value.trim();

        // 1. Clear any existing error message from a previous attempt
        const existingError = document.getElementById("loginErrorMessage");
        if (existingError) {
            existingError.remove();
        }

        // Helper function to dynamically render a stylish error message
        const showError = (message) => {
            const errorElement = document.createElement("p");
            errorElement.id = "loginErrorMessage";
            errorElement.textContent = message;
            
            // Injects the error message at the top of the form fields
            form.insertBefore(errorElement, form.firstChild);
        };

        // Check 1: Fallback Default Master Admin Credentials
        if (username === "admin" && password === "petcare123") {
            window.location.href = "./services.html";
            return;
        }

        // Check 2: Dynamic Local Storage Account Profiles
        const storedUserRaw = localStorage.getItem(username);
        
        if (storedUserRaw) {
            const parsedUser = JSON.parse(storedUserRaw);
            
            if (parsedUser.password === password) {
                window.location.href = "./services.html";
                return;
            }
        }

        // If both checks fail, trigger the UI error message instead of an alert
        showError("Invalid username or password. Please try again.");
    });
});

/* =========================
   Siwaphiwe JavaScript
========================= */


const staffMembers = {
  petSitting: {
    name: 'Nuriyah',
    rating: '⭐ 4.9/5',
    history: 'Nuriyah has 6 years of pet-sitting experience and loves creating calm routines for every animal.',
    image: 'https://i.ibb.co/Gfc9BQyp/nuriyah.png',
    label: 'Pet Sitting'
  },
  dogWalking: {
    name: 'Chad',
    rating: '⭐ 4.8/5',
    history: 'Chad is an energetic dog walker who keeps every walk fun, safe, and tailored to the dog’s pace.',
    image: 'https://i.ibb.co/xqGH6C2M/Chad.png',
    label: 'Dog Walking'
  },
  petGrooming: {
    name: 'Siwaphiwe',
    rating: '⭐ 5.0/5',
    history: 'Siwaphiwe specializes in gentle grooming and coat care, keeping pets comfortable and looking their best.',
    image: 'https://i.ibb.co/Cp3TtKfz/Siwaphiwe.png',
    label: 'Pet Grooming'
  },
  petTransportation: {
    name: 'Karah',
    rating: '⭐ 4.7/5',
    history: 'Karah provides safe and reliable pet transportation for vet visits, grooming appointments, and travel needs.',
    image: 'https://i.ibb.co/Kp2FgX5r/kara.png',
    label: 'Pet Transportation'
  }
};


let currentService = 'petSitting';


function showStaff(service) {
  const member = staffMembers[service];


  if (!member) return;


  currentService = service;


  document.getElementById('staff-image').src = member.image;
  document.getElementById('staff-name').textContent = member.name;
  document.getElementById('staff-rating').textContent = member.rating;
  document.getElementById('staff-history').textContent = member.history;
  document.getElementById('booking-service').value = member.label;
  document.getElementById('booking-staff').value = member.name;


  document.getElementById('book-now-btn').hidden = false;
}


function openBookingForm() {
  const form = document.getElementById('booking-form');
  const serviceInput = document.getElementById('booking-service');
  const staffInput = document.getElementById('booking-staff');


  if (!staffMembers[currentService]) return;


  serviceInput.value = staffMembers[currentService].label;
  staffInput.value = staffMembers[currentService].name;
  form.hidden = false;
  form.scrollIntoView({ behavior: 'smooth', block: 'start' });
}


showStaff('petSitting');


document.getElementById('book-now-btn').addEventListener('click', openBookingForm);
