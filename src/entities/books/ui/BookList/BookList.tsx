import { BooksContext } from "../../../../app/Context/Context"
import { useContext, useState } from "react"
import BookCard from "../BookCard/BookCard"

function BooksByStatus() {
    const context = useContext(BooksContext)
    if(!context) throw new Error('Проверка!')
    
    const { books, user } = context
    const [search, setSearch] = useState('')
    const [status, setStatus] = useState('Все')
    
    const statuses = ['Все', 'Желаемое', 'Читаю', 'Прочитал', 'Позже']
    
    const filteredBooks = books.filter(book => {
        const searchMatch = !search || book.name.toLowerCase().includes(search.toLowerCase())
        const statusMatch = status === 'Все' || book.status.toLowerCase() === status.toLowerCase()
        return searchMatch && statusMatch
    })
    
    if (!user) return <div>Войдите для просмотра</div>

    return (
        <>
            <input placeholder="Поиск..." value={search} onChange={e => setSearch(e.target.value)}/>
            <select value={status} onChange={e => setStatus(e.target.value)}>
                {statuses.map(s => <option key={s} value={s}>{s}</option>)}
            </select>
            <div className="books__container">
            {filteredBooks.map(book => (<BookCard key={book.id} book={book} />))}
            </div>
        </>
    )
}

export default BooksByStatus