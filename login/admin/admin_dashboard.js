import { auth,onAuthStateChanged, signOut, db} from "../../firebase.js";
import { collection, getDocs } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js";


onAuthStateChanged(auth, (user) =>{
    if(!user){
        window.location.href = "../login.html"; 
    }
})

let logoutbtn = document.getElementById("logoutBtn");

logoutbtn.addEventListener("click", ()=>{
    signOut(auth)
    .then(()=>{
        window.location.href = "../login.html";
    })
})

async function getFoods() {
    const querySnapshot = await getDocs(collection(db, "food"));
    querySnapshot.forEach((doc) => {
        const currFood = doc.data();
        const row = `
            <tr>
                <td>${currFood.name}</td>
                <td>${currFood.price}</td>
                <td>${currFood.serving}</td>
                <td>${currFood.time}</td>
                <td>${currFood.category}</td>
                <td><img src="${currFood.imageURL}" alt="Product Image" height="150" width="250"></td>
                <td>
                    <button class="btn btn-warning btn-sm edit-btn" data-id="${doc.id}">Edit</button>
                    <button class="btn btn-danger btn-sm delete-btn" data-id="${doc.id}">Delete</button>
                </td>
            </tr>
        `;
        productTableBody.innerHTML += row;
    });

    
}

getFoods();