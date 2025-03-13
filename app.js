import { auth, onAuthStateChanged, signOut } from "./firebase.js";

let navbar = document.getElementById("navbar");
let navContents = document.getElementById("nav-contents");

onAuthStateChanged(auth, (user) => {
    if (user) {
        navContents.innerHTML = `
            <a class="navbar-brand ms-lg-5" href="#">
                <img src="pictures/logo.png" alt="Bootstrap" width="75" height="50">
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse me-lg-5" id="navbarSupportedContent">
                <ul class="navbar-nav ms-auto mb-2 mb-lg-0 nav-items-color fs-5">
                    <li class="nav-item">
                        <a class="nav-link" aria-current="page" href="#">Home</a>
                    </li>
                    <li class="nav-item ms-lg-4">
                        <a class="nav-link" href="#joinus">Join Us</a>
                    </li>
                    <li class="nav-item ms-lg-4">
                        <a class="nav-link" href="#efoods">Explore Foods</a>
                    </li>
                    <li class="nav-item ms-lg-4">
                        <a class="nav-link" href="#reviews">Reviews</a>
                    </li>
                    <li>
                        <div class="cart-icon ms-3 mt-2" onclick="toggleCart()">
                            🛒 <span id="cart-count">0</span>
                        </div>
                    </li>
                    <li class="nav-item btn btn-outline-primary p-0 px-lg-4 ms-lg-4">
                        <a class="nav-link fs-5" href="#" id="logout-btn">Logout</a>
                    </li>
                </ul>
            </div>
        `;

        // Attach logout event listener after rendering
        document.getElementById("logout-btn").addEventListener("click", logout);
    }
});

// Logout Function
async function logout() {
    try {
        await signOut(auth);
        window.location.href = "login/login.html"; // Redirect to login page after logout
    } catch (error) {
        console.error("Logout Error:", error);
    }
}


let counter1 = document.getElementById("counter201");
let counter1Value = 6543;
let counter2 = document.getElementById("counter202");
let counter2Value = 1154789;
let counter3 = document.getElementById("counter203");
let counter3Value = 8706;
let counter4 = document.getElementById("counter204");
let counter4Value = 56;

function count1(num) {

    let intervalID = setInterval(function(){
        if(num == counter1Value) {
            clearInterval(intervalID);
            return;
        }
        counter1.innerText = num;
        num++;
    }, 1);
}

function count2(num) {

    let intervalID = setInterval(function(){
        if(num == counter2Value) {
            clearInterval(intervalID);
            return;
        }
        counter2.innerText = num;
        num++;
    }, 1);
}

function count3(num) {

    let intervalID = setInterval(function(){
        if(num == counter3Value) {
            clearInterval(intervalID);
            return;
        }
        counter3.innerText = num;
        num++;
    }, 1);
}
function count4(num) {

    let intervalID = setInterval(function(){
        if(num == counter4Value) {
            clearInterval(intervalID);
            return;
        }
        counter4.innerText = num;
        num++;
    }, 100);
}

count1(4000);
count2(1152000);
count3(5989);
count4(0);


