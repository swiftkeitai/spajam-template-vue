<template>
  <v-btn round v-if="userStatus" @click="doLogout">
    ログアウト
  </v-btn>
  <v-btn round v-else @click="doLogin">
    ログイン
  </v-btn>
</template>

<script>
import Firebase from "@/plugins/firebaseAuth";
export default {
  created: function() {
    Firebase.onAuth();
  },
  computed: {
    userStatus() {
      // ログインするとtrue
      return this.$store.getters.isSignedIn;
    }
  },
  methods: {
    // ログイン処理
    doLogin() {
      Firebase.login();
    },
    // ログアウト処理
    doLogout() {
      Firebase.logout();
    }
  }
};
</script>
