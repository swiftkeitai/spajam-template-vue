<template>
  <v-app-bar color="green darken-4" app dark>
    <v-avatar :tile="true">
      <img :src="require('@/assets/logo.png')" alt="logo" />
    </v-avatar>
    <v-toolbar-title>TodoList</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-btn icon>
      <v-icon>mdi-magnify</v-icon>
    </v-btn>
  </v-app-bar>
</template>
