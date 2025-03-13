import { 
    auth, 
    db, 
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword, 
    signOut,
    onAuthStateChanged 
  } from '../firebase.js';
  
  // Import additional Firestore functions needed for v9
  import { 
    doc, 
    getDoc, 
    setDoc 
  } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js";
  
  // DOM Elements
  const loginForm = document.getElementById('login-form');
  const signupForm = document.getElementById('signup-form');
  const loginError = document.getElementById('login-error');
  const signupError = document.getElementById('signup-error');
  
  // Login functionality
  loginForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    // Get user inputs
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;
    
    // Clear previous errors
    loginError.classList.add('d-none');
    
    try {
      // Sign in user
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      
      // Check user role
      await checkUserRole(userCredential.user.uid);
    } catch (error) {
      // Display error message
      loginError.textContent = error.message;
      loginError.classList.remove('d-none');
    }
  });
  
  // Sign up functionality
  signupForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    // Get user inputs
    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;
    
    // Clear previous errors
    signupError.classList.add('d-none');
    
    try {
      // Create new user
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      
      // Add user data to Firestore with 'user' role
      const userDocRef = doc(db, "users", userCredential.user.uid);
      await setDoc(userDocRef, {
        email: email,
        role: 'user', // Default role is user
        createdAt: new Date()
      });
      
      // Redirect to home or dashboard page
      window.location.href = '../index.html';
    } catch (error) {
      // Display error message
      signupError.textContent = error.message;
      signupError.classList.remove('d-none');
    }
  });
  
  // Check user role function
  // Check user role function
async function checkUserRole(userId) {
    try {
        const userDocRef = doc(db, "users", userId);
        const userDoc = await getDoc(userDocRef);

        if (userDoc.exists()) {
            const userData = userDoc.data();
            if (userData.role === 'admin') {
                // Redirect admin to admin dashboard
                window.location.href = 'admin/admin_dashboard.html';
            } else {
                // Regular user - proceed to home page or dashboard
                window.location.href = '../index.html';
            }
        } else {
            // If user document doesn't exist, assume it's a regular user
            await setDoc(userDocRef, {
                email: auth.currentUser.email,
                role: 'user',
                createdAt: new Date()
            });
            window.location.href = 'index.html';
        }
    } catch (error) {
        console.error("Error checking user role:", error);
        loginError.textContent = 'An error occurred. Please try again.';
        loginError.classList.remove('d-none');
    }
}

  
  // Check auth state on page load
  onAuthStateChanged(auth, (user) => {
    if (user) {
      // Check if user is trying to access the login page while already logged in
      checkUserRole(user.uid);
    }
  });