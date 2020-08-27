<template>
  <p v-if="userStatus" class="mb-0 mr-3">{{ user.displayName }}</p>
  <p v-else class="mb-0 mr-3">ログインしていません</p>
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
