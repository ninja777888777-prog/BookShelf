import { BooksContext } from "../../../../app/Context/Context"
import { useContext } from "react"
import BookCard from "../BookCard/BookCard"

function BooksByStatus() {
    const context = useContext(BooksContext)
    if(!context){
        throw new Error('Проверка!')
    }
    
    const { books, user } = context
    const statusArray: string[] = ['Желаемое', 'Читаю', 'Прочитал', 'Позже']
    const booksByStatus: Record<string, typeof books > = {}
    
    statusArray.forEach(status => {
        booksByStatus[status] = books.filter(book => book.status === status.toLocaleLowerCase())
    })
    return user ? (
    <div className="books-by-status__container">
        {statusArray.map(status => (
            <div key={status}>
                <h2>{status} ({booksByStatus[status]?.length || 0})</h2>
                <div className="books__container">
                    {booksByStatus[status]?.map(book => (
                        <BookCard key={book.id} book={book} />
                    ))}
                </div>
            </div>
        ))}
    </div>
) : (
    <div className="auth-message">
        Пожалуйста, войдите для просмотра книг
    </div>
);
}

export default BooksByStatus