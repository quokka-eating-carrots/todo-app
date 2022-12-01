import { todoListEl, allDeleteBtn } from './store.js'
import { deleteTodo, editTodo, getTodo } from './todoAPI.js'


// 완료, 삭제 버튼
export const deleteHandler = todoListEl.addEventListener('click', event => {
  const { target } = event
  const todoEl = target.closest('.todo')
  const btn = target.closest('button')
  const id = todoEl.id
  const title = todoEl.querySelector('input').value
  let done = false
  if (!btn) return
  if (btn.matches('.delete')) {
    deleteTodo(id)
    todoEl.remove()
  } else if (btn.matches('.done')) {
    todoEl.classList.toggle('todo-done-state')
    if (todoEl.classList.contains('todo-done-state')) {
      done = true
    } else done = false
    editTodo(id, title, done)
  }
})

// 기존 todo 수정
export const changeTodo = todoListEl.addEventListener('click', event => {
  const { target } = event
  const todoEl = target.closest('.todo')
  const id = todoEl.id
  const existingTodo = target.closest('input')
  let done = false
  if (todoEl.classList.contains('todo-done-state')) {
    done = true
  } else done = false
  if (!existingTodo) return;
  existingTodo.addEventListener('keydown', e => {
    if (e.key === 'Enter') {
      const title = existingTodo.value
      editTodo(id, title, done)
    }
  })
})

// 전체 삭제 버튼
allDeleteBtn.addEventListener('click', async () => {
  const todoList = await getTodo()
  if (todoList) {
    todoList.forEach(todo => {
      const id = todo.id
      deleteTodo(id)
      todoListEl.innerHTML = ''
    })
  }
})