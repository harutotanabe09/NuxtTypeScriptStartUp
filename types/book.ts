interface Book {
    id: number
    code: number
    name: string
    category: number[] | null
    status: 0 | 1 | 2 | 3
}
  
export default Book