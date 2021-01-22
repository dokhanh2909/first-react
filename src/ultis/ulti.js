import "firebase";
import "firebase/firestore";
import firebase from "firebase/app";
import { firebaseConfig } from "../config/config.firebase";

try {
  firebase.initializeApp(firebaseConfig);
} catch (e) {
  console.log("Firebase app was installed");
}

const db = firebase.firestore();

export function showInfo() {
  console.log(firebaseConfig);
}

// export function signUp(userInformation) {
//   return new Promise((resolve, reject) => {
//     const { username, password } = userInformation;
//     console.log(userInformation);
//     db.collection("user")
//       .where("username", "==", username)
//       .get()
//       .then((querySnapshot) => {
//         if (querySnapshot.empty) {
//           // sign up here
//           db.collection("user")
//             .add({
//               username: username,
//               password: password,
//             })
//             .then((data) => {
//               console.log("Sign up successful!");
//               console.log(data.id);
//             })
//             .catch((err) => console.log(err));
//         } else {
//           console.log("Username is existed");
//         }
//       });
//   });
// }

export function signUp(userInformation) {
  return new Promise((resolve, reject) => {
    const { username, password } = userInformation;
    console.log(userInformation);
    db.collection("user")
      .where("username", "==", username)
      .get()
      .then((querySnapshot) => {
        if (!querySnapshot.empty) {
          throw new Error("Username was existed!");
        }
      })
      .then(() => {
        db.collection("user")
          .add({
            username: username,
            password: password,
          })
          .then((data) => {
            console.log("Sign up successful!");
            console.log(data.id);
          });
      });
  });
}
