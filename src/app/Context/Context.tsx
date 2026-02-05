import { createContext } from "react"
import type { BookType } from "../../entities/books/types/BookType"
type ContextType = {
    books: BookType[],
    setBooks: React.Dispatch<React.SetStateAction<BookType[]>>,
    user: boolean,
    setUser: React.Dispatch<React.SetStateAction<boolean>>
}

export const BooksContext = createContext<ContextType | null>(null)