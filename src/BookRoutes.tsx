import React from 'react'
import { Route, Routes } from 'react-router-dom'
import BooksLayout from './BooksLayout'
import Book from './pages/Book'
import BookList from './pages/BookList'
import NewBook from './pages/NewBook'

const BookRoutes = () => {
  return (
    <>
        <Routes>
            <Route element={<BooksLayout />}>
                <Route index element={<BookList />} />
                <Route path=":id" element={<Book />} />
                <Route path="new" element={<NewBook />} />
            </Route>
        </Routes>
    </>
  )
}

export default BookRoutes