import { doc, getDoc, updateDoc, setDoc, serverTimestamp } from "firebase/firestore";
import { db } from "./firebase";

export async function ensureUserDoc(user) {
  const userRef = doc(db, "users", user.uid);
  const snap = await getDoc(userRef);

  if (!snap.exists()) {
    await setDoc(userRef, {
      email: user.email,
      createdAt: serverTimestamp(),
      skills: {
        push: null,
        pull: null,
      },
    });
  }
}

export async function updateSkill(uid, type, skillName) {
  const ref = doc(db, "users", uid);

  const snap = await getDoc(ref);
  if (!snap.exists()) return;

  const data = snap.data();
  const oldSkill = data?.skills?.[type];

  if (oldSkill === skillName) {
    return;
  }

  await updateDoc(ref, {
    [`skills.${type}`]: skillName,
    updatedAt: serverTimestamp()
  });
}