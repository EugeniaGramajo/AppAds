import firebase from './firebaseConfig';

// Utiliza el servicio de autenticación de Firebase
firebase.auth().signInWithEmailAndPassword(email, password)
  .then((userCredential) => {
    // El usuario inició sesión correctamente
    const user = userCredential.user;
    console.log(user);
  })
  .catch((error) => {
    // Ocurrió un error al iniciar sesión
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode, errorMessage);
  });
