import { API_URL, headers } from './store.js'

// 할 일 목록 조회
export const getTodo = async () => {
  const res = await fetch(API_URL, {
    method: 'GET',
    headers: headers
  })
  const todoList = await res.json()
  return todoList
}

// 할 일 추가
export const createTodo = async (title) => {
  const res = await fetch(API_URL, {
    method: 'POST',
    headers: headers,
    body: JSON.stringify({
      title: title,
    })
  })
  const json = await res.json()
  return json
}

// 할 일 삭제
export const deleteTodo = async (id) => {
  await fetch(API_URL + `/${id}`, {
    method: 'DELETE',
    headers: headers,
  })
}

// 할 일 수정
export const editTodo = async (id, title, done) => {
  await fetch(API_URL + `/${id}`, {
    method: "PUT",
    headers: headers,
    body: JSON.stringify({
      title: title,
      done: done
    })
  })
}