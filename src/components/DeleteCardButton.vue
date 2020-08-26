<template>
  <v-dialog v-model="dialog" persistent max-width="600px">
    <template v-slot:activator="{ on, attrs }">
      <v-btn icon v-bind="attrs" v-on="on">
        <v-icon small>mdi-trash-can-outline</v-icon>
      </v-btn>
    </template>
    <v-card>
      <v-card-title>Really delete task?</v-card-title>
      <v-card-text> Title: {{ task.title }} </v-card-text>
      <v-card-text> SubTitle: {{ task.subtitle }} </v-card-text>
      <v-card-text> Status: {{ task.status }} </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="blue darken-1" text @click="dialog = false">Cancel</v-btn>
        <v-btn color="red darken-1" text @click="deleteTask(task.id)"
          >Delete</v-btn
        >
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import firebase from "@/plugins/firebaseInit";

export default {
  data: () => ({
    dialog: false,
    title: null,
    subtitle: null,
    status: null,
    tasks: []
  }),
  props: ["task"],
  methods: {
    deleteTask(id) {
      // delete docs from firestore
      firebase
        .firestore()
        .collection("tasks")
        .doc(id)
        .delete()
        .then(() => {
          this.tasks = this.tasks.filter(task => {
            return task.id != id;
          });
        });
    }
  }
};
</script>
