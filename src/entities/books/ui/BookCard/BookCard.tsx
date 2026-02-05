import { useContext, useState } from "react"
import type { BookType } from "../../types/BookType"
import './BookCard.css'
import { BookStorage } from "../../models/BooksStorage"
import { BooksContext } from "../../../../app/Context/Context"

function BookCard({book} : {book : BookType}) {
    const context = useContext(BooksContext)
    if(!context){
        throw new Error('Проверка!')
    }
    const {setBooks} = context

    const[isOpen, setIsOpen] = useState<boolean>(false)
    const statusArray: string[] = ['желаемое', 'читаю', 'прочитал', 'позже']
    const OnUpdateStatus = (status : string, id : number) => {
        const data = BookStorage.updateStatus(status, id)
        if(!data.error){
            setBooks(prev => prev.map(book => book.id === id ? {...book, status : status} : book))
            setIsOpen(prev => !prev)
        }
        else{
            console.log(data.message)
            setIsOpen(prev => !prev)
        }
    }
  return (
    <div className="book__card__container">
        <img src={book.image} alt={book.name} />
        <div className="book__information"><h2>{book.name}</h2> 
        <div className="book__information__wrapper">
  <button 
    onClick={() => setIsOpen(prev => !prev)} 
    className="book__information__btn"
  >
    {isOpen ? '✕' : '…'}
  </button>
  
  {isOpen && (
    <div className="status__menu__container">
      {statusArray.map((status, index) => (
        <button 
          key={index} 
          className={book.status === status ? 'status__menu__button__choosen' :'status__menu__button' }
          disabled={book.status === status ? true :false}
          onClick={() => OnUpdateStatus(status, book.id)}
        >
          {status}
        </button>
      ))}
    </div>
  )}
</div>
        </div>
        
        <p>{book.author}</p>
    </div>
  )
}

export default BookCard