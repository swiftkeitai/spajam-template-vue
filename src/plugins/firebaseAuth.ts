import firebase from '@/plugins/firebaseInit';
import store from "@/store";

export default {
  // ログイン
  login() {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider)
  },
  // ログアウトしてvuexからも削除
  logout() {
    firebase.auth().signOut()
  },
  // コンポーネントで最初にこの関数が呼ばれる
  onAuth() {
    firebase.auth().onAuthStateChanged(user => {
      user = user ? user : null;
      store.commit('onAuthStateChanged', user);
      store.commit('onUserStatusChanged', user?.uid ? true : false); // ログインしているかbool値で渡す
    });
  }
};