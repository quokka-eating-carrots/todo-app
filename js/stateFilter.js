import { stateBtns, todoListEl, allDeleteBtn } from "./store.js";

// 상태 필터 핸들러
export const stateHandler = stateBtns.forEach(state => {
  state.addEventListener('click', e => {
    if (state.classList.contains('all')) {
      const todoEl = todoListEl.querySelectorAll('.todo')
      todoEl.forEach(todo => {
        todo.style.display = 'flex'
        allDeleteBtn.classList.remove('hidden')
      })
    } else if (state.classList.contains('not-done')) {
      const todoEl = todoListEl.querySelectorAll('.todo')
      todoEl.forEach(todo => {
        todo.style.display = todo.classList.contains('todo-done-state') ? 'none' : 'flex'
        allDeleteBtn.classList.add('hidden')
      })
    } else if (state.classList.contains('done')) {
      const todoEl = todoListEl.querySelectorAll('.todo')
      todoEl.forEach(todo => {
        todo.style.display = todo.classList.contains('todo-done-state') ? 'flex' : 'none'
        allDeleteBtn.classList.add('hidden')
      })
    }
  })
})
