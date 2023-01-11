import React, { useState } from 'react'
import { Link, Outlet, useSearchParams } from 'react-router-dom'

const BooksLayout = () => {
  const [searchParams, setSearchParams] = useSearchParams({ n: '3' });
  const number = searchParams.get("n");
  return (
    <>
        <Link to="/books/1">Book 1</Link>
        <br />
        <Link to="/books/2">Book 2</Link>
        <br />
        <Link to={`/books/${number}`}>Book {number}</Link>
        <br />
        <Link to="/books/new">New Book</Link>
        <Outlet context={{ hello: "world" }}/>
        <input 
          type="input" 
          value={number!} 
          onChange={(e: React.FormEvent<HTMLInputElement>) =>{ 
            const target = e.target as HTMLInputElement
            setSearchParams({ n: target.value});
          }}  
        />
    </>
  )
}

export default BooksLayout