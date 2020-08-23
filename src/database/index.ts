import firebase from '../plugins/firebase';
import {
  UserDocument
} from './model';

export const insertUser = async (userDoc: UserDocument) => {
  const db = firebase.firestore();
  const docRef = db.collection('users').doc(userDoc.uid);
  await docRef.set(userDoc);
};

export const isCreatedUser = async (uid: string) => {
  const db = firebase.firestore();
  const user = await db.collection('users').doc(uid).get();
  return user.exists;
};