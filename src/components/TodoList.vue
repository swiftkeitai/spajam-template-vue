<template>
  <div>
    <h1>Vue-TS-TODO</h1>
    <label v-for="[state, text] in Array.from(labels)" :key="state">
<<<<<<< HEAD
      <input type="radio" v-model="current" :value="state">
=======
      <input v-model="current" type="radio" :value="state" />
>>>>>>> cc5eec89f2aa02294c9efb1be9b0491351828932
      {{ text }}
    </label>
    {{ filteredTodos.length }} 件を表示中
    <table>
      <thead>
        <tr>
<<<<<<< HEAD
          <th class="id">ID</th>
          <th class="comment">コメント</th>
          <th class="state">状態</th>
          <th class="button">-</th>
=======
          <th class="id">
            ID
          </th>
          <th class="comment">
            コメント
          </th>
          <th class="state">
            状態
          </th>
          <th class="button">
            -
          </th>
>>>>>>> cc5eec89f2aa02294c9efb1be9b0491351828932
        </tr>
      </thead>
      <tbody>
        <tr v-for="todo in filteredTodos" :key="todo.id">
          <td>{{ todo.id }}</td>
          <td>{{ todo.comment }}</td>
          <td class="state">
            <button @click="toggleState(todo)">
              {{ labels.get(todo.state) }}
            </button>
          </td>
          <td class="button">
            <button @click.shift="removeTodo(todo)">
              削除
            </button>
          </td>
        </tr>
      </tbody>
    </table>

    <p>
      ※削除ボタンはシフトキーを押しながらクリックして下さい
    </p>

    <h2>新しい作業の追加</h2>
    <form class="add-item" @submit.prevent="addTodo">
<<<<<<< HEAD
      コメント <input type="text" ref="comment">
      <button type="submit">追加</button>
=======
      コメント <input ref="comment" type="text" />
      <button type="submit">
        追加
      </button>
>>>>>>> cc5eec89f2aa02294c9efb1be9b0491351828932
    </form>
  </div>
</template>

<script lang="ts">
<<<<<<< HEAD
import { Component, Vue, Watch } from 'vue-property-decorator'
import TodoStorage from '@/plugins/todoStorage'
import { State, TodoItem } from '@/constants/todoItem'

const todoStorage = new TodoStorage
=======
import { Component, Vue, Watch } from 'vue-property-decorator';
import TodoStorage from '@/plugins/todoStorage';
import { State, TodoItem } from '@/constants/todoItem';

const todoStorage = new TodoStorage();
>>>>>>> cc5eec89f2aa02294c9efb1be9b0491351828932

@Component
export default class TodoList extends Vue {
  // 一覧
<<<<<<< HEAD
  private todos: TodoItem[] = []
=======
  private todos: TodoItem[] = [];
>>>>>>> cc5eec89f2aa02294c9efb1be9b0491351828932

  // 絞り込みの項目
  private labels = new Map<State, string>([
    [State.All, '全て'],
    [State.Working, '作業中'],
    [State.Done, '完了']
<<<<<<< HEAD
  ])

  // 現在表示中の作業状態，初期値はAll
  private current: State = State.All
=======
  ]);

  // 現在表示中の作業状態，初期値はAll
  private current: State = State.All;
>>>>>>> cc5eec89f2aa02294c9efb1be9b0491351828932

  // 絞り込み
  private get filteredTodos() {
    return this.todos.filter(t =>
<<<<<<< HEAD
      this.current === State.All ? true : this.current === t.state)
   }

  // コンポーネントのインスタンスが作成された時にストレージからTODO全件取得，これないとリロード時にclearされる
  private created() {
    this.todos = todoStorage.fetchAll()
=======
      this.current === State.All ? true : this.current === t.state
    );
  }

  // コンポーネントのインスタンスが作成された時にストレージからTODO全件取得，これないとリロード時にclearされる
  private created() {
    this.todos = todoStorage.fetchAll();
>>>>>>> cc5eec89f2aa02294c9efb1be9b0491351828932
  }

  // 追加
  private addTodo() {
<<<<<<< HEAD
    const comment = this.$refs.comment as HTMLInputElement
    if (!comment.value.length) {
      return
=======
    const comment = this.$refs.comment as HTMLInputElement;
    if (!comment.value.length) {
      return;
>>>>>>> cc5eec89f2aa02294c9efb1be9b0491351828932
    }
    this.todos.push({
      id: todoStorage.nextId,
      comment: comment.value,
      state: State.Working
<<<<<<< HEAD
    })
    comment.value = ''
=======
    });
    comment.value = '';
>>>>>>> cc5eec89f2aa02294c9efb1be9b0491351828932
  }

  // 削除
  private removeTodo(todo: TodoItem) {
<<<<<<< HEAD
    const index = this.todos.indexOf(todo)
    this.todos.splice(index, 1)
=======
    const index = this.todos.indexOf(todo);
    this.todos.splice(index, 1);
>>>>>>> cc5eec89f2aa02294c9efb1be9b0491351828932
  }

  // 状態を切り替える
  private toggleState(todo: TodoItem) {
<<<<<<< HEAD
    todo.state = todo.state === State.Working ? State.Done : State.Working
=======
    todo.state = todo.state === State.Working ? State.Done : State.Working;
>>>>>>> cc5eec89f2aa02294c9efb1be9b0491351828932
  }

  // 一覧が変更された場合，ストレージに保存する
  @Watch('todos', { deep: true })
  private onTodoChanged(todos: TodoItem[]) {
<<<<<<< HEAD
    todoStorage.save(todos)
=======
    todoStorage.save(todos);
>>>>>>> cc5eec89f2aa02294c9efb1be9b0491351828932
  }
}
</script>

<style>
* {
  box-sizing: border-box;
}
#app {
  max-width: 640px;
  margin: 0 auto;
}
table {
  width: 100%;
  border-collapse: collapse;
}
thead th {
  border-bottom: 2px solid #42b983;
  color: #42b983;
}
th,
th {
  padding: 0 8px;
  line-height: 40px;
}
thead th.id {
  width: 50px;
}
thead th.state {
  width: 100px;
}
thead th.button {
  width: 60px;
}
<<<<<<< HEAD
tbody td.button, tbody td.state {
=======
tbody td.button,
tbody td.state {
>>>>>>> cc5eec89f2aa02294c9efb1be9b0491351828932
  text-align: center;
}
tbody tr td,
tbody tr th {
  border-bottom: 1px solid #ccc;
  transition: All 0.4s;
}
tbody tr.Done td,
tbody tr.Done th {
  background: #f8f8f8;
  color: #bbb;
}
tbody tr:hover td,
tbody tr:hover th {
  background: #f4fbff;
}
button {
  border: none;
  border-radius: 20px;
  line-height: 24px;
  padding: 0 8px;
  background: #42b983;
  color: #fff;
  cursor: pointer;
}
form button {
  margin-left: 10px;
}
<<<<<<< HEAD
</style>
=======
</style>
>>>>>>> cc5eec89f2aa02294c9efb1be9b0491351828932
