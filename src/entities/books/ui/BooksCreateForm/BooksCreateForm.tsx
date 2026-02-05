import { useForm } from 'react-hook-form'
import type { BookType } from '../../types/BookType'
import { BookStorage } from '../../models/BooksStorage'
import { useContext } from 'react'
import { BooksContext } from '../../../../app/Context/Context'
import './BooksCreateForm.css'

function BooksCreateForm({setIsOpen}  : {setIsOpen : React.Dispatch<React.SetStateAction<boolean>>}) {
    const context = useContext(BooksContext)
        if(!context){
            throw new Error('Проверка!')
        }
        const {setBooks} = context
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm({
        defaultValues: {
            id: Date.now(),
            name: '',
            author: '',
            image: '',
            status: 'желаемое'
        }
    })

    const onSubmit = (data: BookType) => {
        const respone = BookStorage.addBook(data)
        if(respone.error){
            console.log(respone.error)
        }
        else{
            setBooks(prev => [...prev, data])
            alert(`Книга ${data.name} успешно создана`)
        }
        reset()
    }

    return (
        <div className="modal__form">
            <button className='close-btn' onClick={() => setIsOpen(prev => !prev)}>✕</button>
            <div>
            <h2>Добавить  книгу</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input placeholder="Название" {...register('name', { required: 'Обязательное поле' })}/>
                {errors.name && <p className='error'>{errors.name.message}</p>}
                <input placeholder="Автор" {...register('author', { required: 'Обязательное поле' })}/>
                {errors.author && <p className='error'>{errors.author.message}</p>}
                <input placeholder="Ссылка на обложку" {...register('image', { required: 'Обязательное поле' })}/>
                {errors.image && <p className='error'>{errors.image.message}</p>}              
                <button type="submit">Добавить</button>
            </form>
            </div>
        </div>
    )
}
export default BooksCreateForm