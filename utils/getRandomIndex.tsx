export function getRandomItem<T extends readonly unknown[]>(arr: T): T[number] {
  if (arr.length === 0) {
    throw new Error('Array kosong')
  }
  return arr[Math.floor(Math.random() * arr.length)]
}