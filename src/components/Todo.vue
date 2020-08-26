<template>
  <v-card class="d-flex flex-column" color="green lighten-5" tile>
    <v-card-title>
      ToDo
      <v-spacer></v-spacer>
      <AddCardButton />
    </v-card-title>
    <v-card
      v-for="task in tasks"
      :key="task"
      class="mx-auto mb-2"
      width="90%"
      tile
    >
      <v-container>
        <v-container class="py-0">
          <v-row>
            <v-card-title class="py-0"> {{ task.data.title }} </v-card-title>
            <v-spacer></v-spacer>
            <DeleteCardButton :task="task" />
          </v-row>
        </v-container>
        <v-card-subtitle class="py-0">
          {{ task.data.subtitle }}
        </v-card-subtitle>
      </v-container>
    </v-card>
  </v-card>
</template>

<script>
import { Component, Vue } from "vue-property-decorator";
import AddCardButton from "@/components/AddCardButton";
import DeleteCardButton from "@/components/DeleteCardButton";
import firebase from "@/plugins/firebaseInit";

@Component({
  components: {
    AddCardButton,
    DeleteCardButton
  },
  data: () => ({
    tasks: []
  }),
  created() {
    // fetch data from firestore
    {
      firebase
        .firestore()
        .collection("tasks")
        .where("status", "==", "todo")
        .onSnapshot(snapshot => {
          for (const change of snapshot.docChanges()) {
            if (change.type === "added") {
              this.tasks.push({ data: change.doc.data(), id: change.doc.id });
            } else if (change.type === "removed") {
              this.tasks = this.tasks.filter(task => {
                return task.id !== change.doc.id;
              });
            }
          }
        });
    }
  }
})
export default class Todo extends Vue {}
</script>
