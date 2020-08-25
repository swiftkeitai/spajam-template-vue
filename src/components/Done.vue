<template>
  <v-card class="d-flex flex-column" color="green lighten-5" tile>
    <v-card-title>Done</v-card-title>
    <v-card
      v-for="task in tasks"
      :key="task"
      class="mx-auto mb-2"
      width="90%"
      tile
    >
      <v-card-title> {{ task.title }} </v-card-title>
      <v-card-subtitle> {{ task.subtitle }} </v-card-subtitle>
    </v-card>
  </v-card>
</template>

<script>
import firebase from "@/plugins/firebaseInit";

export default {
  data() {
    return {
      tasks: []
    };
  },
  created() {
    // fetch data from firestore
    {
      firebase
        .firestore()
        .collection("tasks")
        .where("status", "==", "done")
        .get()
        .then(snapshot => {
          snapshot.forEach(doc => {
            this.tasks.push(doc.data());
          });
        });
    }
  }
};
</script>
