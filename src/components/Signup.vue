<template>
  <v-btn round v-if="!user" @click="login">
    ログイン
  </v-btn>
  <v-btn round v-else @click="logout">
    ログアウト
  </v-btn>
</template>

<script lang="ts">
import Vue from "vue";
import { handleGoogleLogin, handleLogout } from "@/firebase/authentication";
import firebase from "@/plugins/firebase";
export default class Signup extends Vue {
  user: firebase.User | boolean = false;
  created() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.user = user;
      } else {
        this.user = false;
      }
    });
  }
  async login() {
    await handleGoogleLogin();
  }
  async logout() {
    await handleLogout();
  }
}
</script>
