import { musicEl } from './store.js'

const songs = [
  "NewJeans - Hype Boy",
  "NewJeans - Attention",
  "NewJeans - Cookie",
  "NewJeans - Hurt"
]

// 음악 이름 랜덤
export default musicEl.innerText = songs[Math.floor(Math.random() * songs.length)]