import React from 'react'
import { useOutletContext, useParams } from 'react-router-dom';

const Book = () => {
  const { id } = useParams();
  const obj = useOutletContext<{hello: any}>();

  return (
    <h1>Book {id} {obj.hello}</h1>
  )
}

export default Book;