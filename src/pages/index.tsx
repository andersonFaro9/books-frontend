import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react';
import {api} from './api/api'

interface IBooks {
  id:string;
  title:string;
  author:string;
  year:string;
  bar_code:string;
  description:string;
}

export default function Home() {


  const [books, setBooks] = useState<IBooks[]>([]);
   
    useEffect ( () =>{
        getBooks()
      
    }, [])

 
     async function getBooks () {
     
        try {
          const myBooks = await api
            .get('/books')
            .then((response) => setBooks(response.data))
          console.log(myBooks)
        } catch (err) {
          console.error(err)
        }
     }
     
  return (
    <>
      <ul>
        {books.map((item) => (
          <li className='flex  flex-col  leading-10'key={item.id}>
           
            Titulo: {item.title} <br/>
           
            Autor:
            {item.author}
            <br />
            Bar code:
            
            {item.bar_code}
            <br />
            Ano:
            {item.year}
            <br />
            Descrição: 
            {item.description}
          </li>
        ))}
      </ul>
    </>
  )
}
