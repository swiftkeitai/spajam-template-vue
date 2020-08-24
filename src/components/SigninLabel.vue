<template>
  <div v-if="userStatus">
    <p>{{ user.displayName }}</p>
  </div>
  <div v-else>
    <p>ログインしていません</p>
  </div>
</template>

<script>
export default {
  computed: {
    user() {
      return this.$store.getters.user;
    },
    userStatus() {
      // ログインするとtrue
      return this.$store.getters.isSignedIn;
    }
  }
};
</script>
