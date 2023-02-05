import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react';
import {api} from './api/api'

type IBooks = {
  id:string;
  title:string;
  description:string;
}

export default function Home() {


  const [books, setBook] = useState<IBooks[]>([]);

  const getBooks = async () => {
    try {
      const myBooks = await api
        .get('/books')
        .then((response) => setBook(response.data))
      console.log(myBooks)

    }catch(err) {
        console.error(err)
    }
  }

  useEffect( () => {
    getBooks()

  }, [])

   
  return (
    <>
      <ul>
        {books.map((item) => (
          <li
            className=' flex flex-col leading-10'
            key={item.id}
          >
            <span className=' text-2xl'>
              {item.title} <br />
            </span>
            {item.description}
          </li>
        ))}
      </ul>
    </>
  )
}
