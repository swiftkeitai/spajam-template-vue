<template>
  <div class="todo">
    <TodoList />
  </div>
</template>

<script lang="ts">
<<<<<<< HEAD
import { Component, Vue } from "vue-property-decorator";
import TodoList from "@/components/TodoList.vue";
=======
import { Component, Vue } from 'vue-property-decorator';
import TodoList from '@/components/TodoList.vue';
>>>>>>> cc5eec89f2aa02294c9efb1be9b0491351828932

@Component({
  components: {
    TodoList
  }
})
export default class Todo extends Vue {}
<<<<<<< HEAD
</script>
=======
</script>
>>>>>>> cc5eec89f2aa02294c9efb1be9b0491351828932
