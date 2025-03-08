import { auth,onAuthStateChanged, signOut, db} from "./firebase.js";
import { collection, getDocs } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js";

let foodRoot = document.getElementById("food");
// foodRoot.innerHTML = "";

async function getFood() {
    const querySnapshot = await getDocs(collection(db, "food"));
    querySnapshot.forEach((doc) => {
        const food = doc.data();
        console.log(food);
        const row = 
        `<div class="card col-10 offset-sm-0 col-sm-6 col-md-3 mt-3 mt-md-0 me-4 mb-3">
            <img height="200"
            src=${food.imageURL}
            class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${food.name}</h5>
                <p class="card-text lh-sm">Time: ${food.time} <br> Serving: 1 person</p>
                <span class="fs-3 fw-bolder" style="color: #ee6530;">RS ${food.price}</span>
                <span class="fs-5 text-decoration-line-through text-secondary ms-2">RS 1200</span>
            </div>
            <div class="card-footer">
                <div class="btn btn-orange col-12">Add to Cart</div>
            </div>
        </div>`
        
        foodRoot.innerHTML += row;
        foodRoot.innerHTML += row;
    });

    
}

getFood();