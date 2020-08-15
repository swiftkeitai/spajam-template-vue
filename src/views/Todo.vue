<template>
  <div class="todo">
    <TodoList />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import TodoList from "@/components/TodoList.vue";

@Component({
  components: {
    TodoList
  }
})
export default class Todo extends Vue {}
</script>