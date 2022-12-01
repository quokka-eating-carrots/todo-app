import { addTodoBtn, modalCloseBtn, addTodoListBtn } from './store.js'

// To do 추가하는 모달 켜기
export const addTodoHandler = () => {
  document.querySelector('.add-todo-modal').classList.add('visible')
}

// To do 추가하는 모달 닫기
export const modalCloseHandler = () => {
  document.querySelector('.add-todo-modal').classList.remove('visible')
}

export const addTodoBtnHandler = addTodoBtn.addEventListener('click', addTodoHandler)
export const modalCloseBtnHandler = modalCloseBtn.addEventListener('click', modalCloseHandler)
export const addTodoListBtnHandler = addTodoListBtn.addEventListener('click', modalCloseHandler)