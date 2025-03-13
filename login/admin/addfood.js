import { db } from "../../firebase.js";  
import { collection, addDoc } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js";

let foodName = document.getElementById("foodName");
let foodPrice = document.getElementById("foodPrice");
let foodServing = document.getElementById("foodServing");
let foodTime = document.getElementById("foodTime");
let foodCategory = document.getElementById("foodCategory");
let foodImageURL = document.getElementById("foodImageURL");
let form = document.getElementById("addFoodForm");
form.addEventListener("submit",async (e)=>{
    e.preventDefault();
    let name = foodName.value;
    let price = foodPrice.value;
    let serving = foodServing.value;
    let imageURL = foodImageURL.value;
    let time = foodTime.value;
    let category = foodCategory.value; 
    await addDoc(collection(db, "food"), {
        name,
        price,
        imageURL,
        serving,
        time,
        category
    })
        foodName.value = "";
        foodCategory.value = "";
        foodImageURL.value = "";
        foodTime.value = "";
        foodPrice.value = "";
        foodServing.value = "";
})