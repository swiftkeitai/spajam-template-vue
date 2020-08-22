<template>
  <v-content>
    <v-row class="ma-3">
      <v-col cols="3"><Goal /></v-col>
      <v-col cols="3"><Todo /></v-col>
      <v-col cols="3"><Inprogress /></v-col>
      <v-col cols="3"><Done /></v-col>
    </v-row>
  </v-content>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Goal from "@/components/Goal.vue";
import Todo from "@/components/Todo.vue";
import Inprogress from "@/components/Inprogress.vue";
import Done from "@/components/Done.vue";

@Component({
  components: {
    Goal,
    Todo,
    Inprogress,
    Done
  }
})
export default class Home extends Vue {}
</script>
