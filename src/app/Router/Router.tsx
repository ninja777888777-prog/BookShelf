import {createBrowserRouter} from 'react-router'
import Layout from '../Layout/Layout'
import ErrorPage from '../../pages/Error/ErrorPage'
import BookPage from '../../pages/books/BookPage'
import MyBookPage from '../../pages/books/MyBookPage'

const router = createBrowserRouter([
{
    element: <Layout/>,
    path: '/',
    errorElement: <ErrorPage/>,
    children: [
        {
            element: <BookPage/>,
            path: '/'
        },
        {
            element: <MyBookPage/>,
            path: '/user-books'
        },
    ]
}
])
export default router