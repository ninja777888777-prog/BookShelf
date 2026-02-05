import type { BookType } from '../../entities/books/types/BookType'
import { useState } from 'react';
import { BookStorage } from '../../entities/books/models/BooksStorage'
import type { ReactNode } from 'react';
import { BooksContext } from '../Context/Context';
const BooksArray : BookType[] = [
    {
        id: 1,
        name: 'Богатый папа, бедный папа',
        author:'Роберт Кийосаки',
        image: 'https://api.bookmate.ru/assets/books-covers/df/7c/rN65jwOm-ipad.jpeg?image_hash=60402e94d9f863b041e32ce342f1d89d',
        status: 'желаемое',
    },
    {
        id: 2,
        name: 'Бесы',
        author:'Фёдор Достоевский',
        image: 'https://api.bookmate.ru/assets/books-covers/be/69/CWUzigfr-ipad.jpeg?image_hash=1689f59b3758cbb7017ea870dc1d51e5',
        status: 'желаемое',
    },
    {
        id: 3,
        name: 'Крыжовник',
        author:'Антон Чехов',
        image: 'https://api.bookmate.ru/assets/books-covers/7e/af/QAxJkc1f-ipad.png?image_hash=190359303ef4cb51b327ff45752145ac',
        status: 'желаемое',
    },
    {
        id: 4,
        name: 'Граф Монте-Кристо',
        author:'Александр Дюма',
        image: 'https://api.bookmate.ru/assets/books-covers/81/75/YXF114gj-ipad.jpeg?image_hash=7cacce0acd01d852ce3dcb05095e4015',
        status: 'желаемое',
    },
    {
        id: 5,
        name: 'Обломов',
        author:'Иван Гончаров',
        image: 'https://api.bookmate.ru/assets/books-covers/27/4f/TGNMgcqe-ipad.png?image_hash=5f01971b1cae8f5f6147ff41a8f5cf3f',
        status: 'желаемое',
    },
    {
        id: 6,
        name: 'Ревизор',
        author:'Николай Гоголь',
        image: 'https://api.bookmate.ru/assets/books-covers/b1/d5/SCOJhbgb-ipad.jpeg?image_hash=ec9f995e97c08465f6308bcc84ec451e',
        status: 'желаемое',
    },
    {
        id: 7,
        name: 'Гранатовый браслет',
        author:'Александр Куприн',
        image: 'https://api.bookmate.ru/assets/books-covers/97/90/UJXEirbe-ipad.jpeg?image_hash=47a6489a68f0e4088e540e0c9ad7b005',
        status: 'желаемое',
    },
    {
        id: 8,
        name: 'Вий',
        author:'Николай Гоголь',
        image: 'https://api.bookmate.ru/assets/books-covers/9c/32/WIRuaq5m-ipad.jpeg?image_hash=3462c056f9dee52171b1766c36cc2533',
        status: 'желаемое',
    },
    {
        id: 9,
        name: 'Тонкое искусство пофигизма. Парадоксальный способ жить счастливо',
        author:'Марк Мэнсон',
        image: 'https://api.bookmate.ru/assets/audiobooks-covers/47/33/AVSgrfdR-large.jpeg?image_hash=2a2093ac1cb45dc9015feabe9b232b85',
        status: 'желаемое',
    },
    {
        id: 10,
        name: 'Государь',
        author:'Никколо Макиавелли',
        image: 'https://api.bookmate.ru/assets/books-covers/ad/7f/gLD3uhua-ipad.jpeg?image_hash=f6feeea4fe1cc8841573c6cbe3d0d99d',
        status: 'желаемое',
    },
    {
        id: 11,
        name: 'Скорбь Сатаны',
        author:'Мария Корелли',
        image: 'https://api.bookmate.ru/assets/audiobooks-covers/9c/a3/xdwpeoxz-large.jpeg?image_hash=05f8f138c863b29866e0ec31588b8ad2',
        status: 'желаемое',
    },
    {
        id: 12,
        name: 'Вишневый сад',
        author:'Антон Чехов',
        image: 'https://api.bookmate.ru/assets/books-covers/9c/67/ONDR2dl6-ipad.jpeg?image_hash=8fbbbbb239863131aaaad138f8d7d217',
        status: 'желаемое',
    },
    {
        id: 13,
        name: 'Шинель',
        author:'Николай Гоголь',
        image: 'https://api.bookmate.ru/assets/books-covers/f3/b1/TXNAahms-ipad.jpeg?image_hash=85a7f775ba09a4990abbf3b574bc224d',
        status: 'желаемое',
    },
    {
        id: 14,
        name: 'Тарас Бульба',
        author:'Николай Гоголь',
        image: 'https://api.bookmate.ru/assets/books-covers/0c/cc/MxCzJcdh-ipad.jpeg?image_hash=4dfac52a17313910d414ae8621236705',
        status: 'желаемое',
    },
    {
        id: 15,
        name: 'Перевоспитать Тихоню',
        author:'Ася Лавринович',
        image: 'https://api.bookmate.ru/assets/books-covers/89/88/wQd1S8kr-ipad.jpeg?image_hash=670972e4b23f110d69fd73b35da27b6c',
        status: 'желаемое',
    },
    {
        id: 16,
        name: 'Кто не спрятался. История одной компании',
        author:'Яна Вагнер',
        image: 'https://api.bookmate.ru/assets/books-covers/fa/b9/AY1amKEo-ipad.jpeg?image_hash=962ed61f54ec68825f1abd18ac26ca5d',
        status: 'желаемое',
    },
    {
        id: 17,
        name: 'Трудно быть богом',
        author:'Аркадий Стругацкий, Борис Стругацкий',
        image: 'https://api.bookmate.ru/assets/books-covers/b1/d0/HrWlakc7-ipad.png?image_hash=796f6df6faf6fb05001399f1889351cd',
        status: 'желаемое',
    },
    {
        id: 18,
        name: 'Пьянеть',
        author:'Кирилл Рябов',
        image: 'https://api.bookmate.ru/assets/books-covers/7c/73/zMHvO8v6-ipad.jpeg?image_hash=f653542121f4aa7e4cd429e0f76516f2',
        status: 'желаемое',
    },
    {
        id: 19,
        name: 'Мастер и Маргарита',
        author:'Михаил Булгаков',
        image: 'https://api.bookmate.ru/assets/books-covers/0a/d0/MWxAop5b-ipad.jpeg?image_hash=e987f93cdd8d2c0f5313263b8fcf3b93',
        status: 'желаемое',
    },
    {
        id: 20,
        name: 'Мёртвые души',
        author:'Николай Гоголь',
        image: 'https://api.bookmate.ru/assets/books-covers/08/d5/CQWyL6jp-ipad.png?image_hash=c024c621adc6e80add69faacffaf27a9',
        status: 'желаемое',
    },

]


function Provider({children} : {children : ReactNode}) {
    const [books, setBooks] = useState<BookType[]>(() => {
    const LocalBooks = BookStorage.getBooks();
    if(!LocalBooks){
        BookStorage.setBooks(BooksArray)
        return BooksArray
    }
    return LocalBooks;
  })
  const[user, setUser] = useState<boolean>(false)
  const value = {
    books, setBooks, user, setUser
  }
  return (
    <BooksContext.Provider value={value}>
        {children}
    </BooksContext.Provider>
  )
}

export default Provider