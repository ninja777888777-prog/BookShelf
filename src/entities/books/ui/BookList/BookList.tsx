import { useContext } from "react"
import { BooksContext } from "../../../../app/Context/Context"
import BookCard from "../BookCard/BookCard"


function BookList() {
    const context = useContext(BooksContext)
    if(!context){
        throw new Error('Проверка!')
    }
    const {books, user} = context

    return (
        <>
            {user ? (
                <div className="books__container">
                    {books.map(book => (
                        <BookCard key={book.id} book={book} />
                    ))}
                </div>
            ) : (
                <div className="auth-message">
                    Пожалуйста, войдите для просмотра книг
                </div>
            )}
        </>
    )
}


export default BookList