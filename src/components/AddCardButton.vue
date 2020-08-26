<template>
  <v-dialog v-model="dialog" persistent max-width="600px">
    <template v-slot:activator="{ on, attrs }">
      <v-btn icon v-bind="attrs" v-on="on">
        <v-icon>mdi-card-plus-outline</v-icon>
      </v-btn>
    </template>
    <v-card>
      <v-card-title>Add task</v-card-title>
      <v-card-text>
        <v-container>
          <v-row>
            <v-col cols="12">
              <v-text-field
                label="Title"
                v-model="title"
                required
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="6">
              <v-text-field
                label="SubTitle"
                v-model="subtitle"
                required
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="6">
              <v-select
                :items="['goal', 'todo', 'inprogress', 'done']"
                label="Status"
                v-model="status"
                required
              ></v-select>
            </v-col>
          </v-row>
        </v-container>
        <small>
          <strong>Recommended usage</strong>
          <ul>
            <li>Title：何をやるのか</li>
            <li>SubTitle：いつやるのか</li>
            <li>Status：進捗状況</li>
          </ul>
        </small>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="blue darken-1" text @click="dialog = false">Cancel</v-btn>
        <v-btn color="green darken-1" text @click="addTask()">Save</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import firebase from "@/plugins/firebaseInit";

export default {
  data: () => ({
    dialog: false,
    id: null,
    title: null,
    subtitle: null,
    status: null
  }),
  methods: {
    addTask() {
      firebase
        .firestore()
        .collection("tasks")
        .add({
          title: this.title,
          subtitle: this.subtitle,
          status: this.status
        });
      this.dialog = false;
    }
  }
};
</script>
