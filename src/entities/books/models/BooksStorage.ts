import type { BookType } from "../types/BookType";

export const BookStorage = {
    getBooks: (): BookType[] | null => {
        const localBooks = localStorage.getItem('books')
        if(localBooks){
            return JSON.parse(localBooks)
        }
        return null
    },
    setBooks: (books : BookType[]) => {
        localStorage.setItem('books', JSON.stringify(books))
    },

    addBook(book: BookType): {message: string, error: boolean} {
    const localBooks = BookStorage.getBooks() || [];
    const BookIsExisting = localBooks.find(
        e => e.name.toLowerCase() === book.name.toLowerCase()
    );
    if (BookIsExisting) {
        return {message: `Книга "${book.name}" уже существует в библиотеке!`, error: true};
        }
    const updatedBooks = [...localBooks, book];
    localStorage.setItem('books', JSON.stringify(updatedBooks));
    return {message: `Книга "${book.name}" успешно добавлена!`, error: false};
},
    updateStatus: (status: string, id: number) : {message: string, error: boolean} => {
        const localBooks = BookStorage.getBooks()
        if(localBooks){
            const updatedBooks = localBooks.map(book => book.id === id ? {...book, status : status} : book)
            BookStorage.setBooks(updatedBooks)
            return{
                message: 'Успешно обновлено!',
                error: false
            }
        }
        return{
            message: 'Нет сторейджа',
            error: true
        }

    },
    clearStorage: () => localStorage.removeItem('books')
}