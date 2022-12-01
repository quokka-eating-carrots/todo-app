import { getTodo, createTodo } from './todoAPI.js'
import { todoListEl, addBtn, inputEl } from './store.js'
import bunnys from './ramdomBunny.js'

// 기존 할 일 렌더링
export const renderTodo = async () => {
  const todoList = await getTodo()
  if (todoList) {
    for (let todo of todoList) {
      todoListEl.innerHTML += /* html */ `
      <div class="todo ${todo.done ? 'todo-done-state' : ''}" id="${todo.id}">
        <img src="./images/${bunnys()}" alt="토끼 프로필" />
        <input value="${todo.title}" />
        <div class="state-box">
          <div class="state-btn">
            <button type='text' class='material-symbols-outlined done'>done</button>
            <button type='text' class='material-symbols-outlined delete'>delete</button>
          </div>
          <div class="editDate">${todo.updatedAt.slice(0, 10)}</div>
        </div>
      </div>
      `
    }
  } else return
}

// 할 일 추가 렌더링
export const addBtnHandler = addBtn.addEventListener('click', async (e) => {
  e.preventDefault()
  await getTodo()
  let title = inputEl.value
  let order = (todoListEl.querySelectorAll('.todo').length) + 1
  const todo = await createTodo(title, order)
  if (title.length === 0) {
    alert("내용을 입력해 주세요")
  } else {
    todoListEl.innerHTML += /* html */ `
    <div class="todo" id="${todo.id}">
      <img src="./images/${bunnys()}" alt="토끼 프로필" />
      <input value="${inputEl.value}" />
      <div class="state-box">
        <div class="state-btn">
          <button type='text' class='material-symbols-outlined done'>done</button>
          <button type='text' class='material-symbols-outlined delete'>delete</button>
        </div>
        <div class="editDate">${todo.updatedAt.slice(0, 10)}</div>
      </div>
    </div>
  `
  }
  inputEl.value = ''
})