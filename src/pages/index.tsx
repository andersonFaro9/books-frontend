import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link';
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
    //  TO DO: COMENTAR O CÓDIGO EXPLICANDO SE FAZ
     
  return (
    <>
      <ul>
        {books.map((item) => (
          //Você deve passar o parâmetro da  rota do nestjs
          //Ficando dessa forma no navegador: http://localhost:3001/05a43ff7-8bcc-4133-afaa-b22ba1ae35c7
          <Link href={`/details/${item.id}`} key={item.id}>
            <li className='flex  flex-col  leading-10' key={item.id}>
              <p className='text-lg font-bold'>
                Titulo:
                <span className='text-base font-normal'>{item.title}</span>
              </p>

              <p className='text-lg font-bold'>
                Autor:
                <span className='text-base font-normal'>{item.author}</span>
              </p>
              <p className='text-lg font-bold'>
                Bar code:
                <span className='text-base font-normal'> {item.bar_code} </span>
              </p>
              <p className='text-lg font-bold'>
                {' '}
                Ano:
                <span className='text-base font-normal'>{item.year}</span>
              </p>

              <p className='text-lg font-bold'>
                Descrição:
                <span className='text-base font-normal'>
                  {' '}
                  {item.description}
                </span>{' '}
              </p>

              <br />
            </li>
          </Link>
        ))}
      </ul>
    </>
  )
}
