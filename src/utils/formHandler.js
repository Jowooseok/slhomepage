import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../firebaseConfig";

export const handleSubmit = async (e, email, setEmail) => {
  e.preventDefault();

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email || !emailRegex.test(email)) {
    alert("Please enter a valid email.");
    return;
  }

  try {
    await addDoc(collection(db, "emails"), {
      email,
      createdAt: serverTimestamp(),
    });
    setEmail("");
    alert("Thank you for subscribing! You will soon receive updates from SL Protocol.");
  } catch (err) {
    console.error("Error adding document: ", err);
    alert("There was an error subscribing. Please try again later.");
  }
};
