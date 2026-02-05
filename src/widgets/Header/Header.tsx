import { useContext, useState } from "react"
import { Link } from "react-router"
import { BooksContext } from "../../app/Context/Context"
import './Header.css'
import { BookStorage } from "../../entities/books/models/BooksStorage"
import BooksCreateForm from "../../entities/books/ui/BooksCreateForm/booksCreateForm"


function Header() {
    const context = useContext(BooksContext)
    if(!context){
        throw new Error('Проверка!')
    }
    const[isOpen, setIsOpen] = useState<boolean>(false)
    const {user, setUser} = context

    const onClickButtonHandler = () => {
        if(user){
            if(confirm('Вы точно хотите выйти?')){
                alert('Вы успешно вышли!')
                setUser(prev => !prev)
                BookStorage.clearStorage()
            }
        }
        else{
            alert('Вы успешно вошли!')
            setUser(prev => !prev)
        }
    }
  return (
    <nav>
        {user ?<>
        <div className="information__container"> 
        <Link to={'/'}>Главная</Link>
        <Link to={'/user-books'}>Мой книги</Link>
        <a href="#" onClick={() => setIsOpen(prev => !prev)}>{isOpen ? "Закрыть" :"Добавить"}</a>
        {isOpen ? <BooksCreateForm setIsOpen={setIsOpen}/> : <></>}
        </div>
        </>: <></>  }
        <div className="button__container">
            <button onClick={onClickButtonHandler} className="btn__login">{user ? 'выйти' : 'войти'}</button>
        </div>
        
    </nav>
  )
}

export default Header