<template>
  <v-card class="d-flex flex-column" color="green lighten-5" tile>
    <v-card-title>Goal</v-card-title>
    <v-card v-for="n in 5" :key="n" class="mx-auto mb-2" width="90%" tile>
      <v-card-title>Title {{ n }}</v-card-title>
      <v-card-subtitle>SubTitle {{ n }}</v-card-subtitle>
    </v-card>
  </v-card>
</template>
