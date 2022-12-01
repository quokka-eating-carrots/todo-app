const bunnyImg = ["list-1.png", "list-2.png", "list-3.png", "list-4.png", "list-5.png"]

export default function bunnys() {
  const randomBunny = bunnyImg[Math.floor(Math.random() * bunnyImg.length)]
  return randomBunny
}