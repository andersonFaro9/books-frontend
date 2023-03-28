import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link';
import { useEffect, useState } from 'react';
import {api} from './api/api'
import { Header } from '@/components/header';
import { Main } from '@/components/main';
import kids from '../images/kids.svg'
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
   const [loading, setLoading] = useState(false)
    useEffect ( () =>{
        getBooks()
      
    }, [])

 
     async function getBooks () {
     
      setLoading(true);
        try {
          const myBooks = await api
            .get('/books')
            .then((response) => setBooks(response.data))
          console.log(myBooks)
          setLoading(false)
        } catch (err) {
          console.error(err)
        }

        
     } 
  
     
  return (
    <>
      <Header />
      <Main />
      {loading ? (
        <div
          className='flex justify-center font-Butterfly
        font-extrabold text-6xl text-red-600'
        >
          Carregando, aguarde...
        </div>
      ) : (
        <ul className='flex flex-wrap md:flex-cols-2 gap-1 ml-5 justify-center md:justify-around'>
          {books.map((item) => (
            //Você deve passar o parâmetro da  rota do nestjs
            //Ficando dessa forma no navegador: http://loc                                                                                                                                                                                                                                                                                                                                                                                                                                                                            alhost:3001/05a43ff7-8bcc-4133-afaa-b22ba1ae35c7

            <Link href={`/details/${item.id}`} key={item.id}>
              <li
                className='bg-yellow-500 rounded-2xl w-80 p-5 leading-8 md:rounded-3xl hover:bg-yellow-400'
                key={item.id}
              >
                <p className='text-3xl font-extrabold font-Butterfly'>
                  Título: &nbsp;
                  <span className='indent-2 text-xl font-black '>
                    {item.title}
                  </span>
                </p>

                <p className='text-3xl font-bold font-Butterfly'>
                  Autor: &nbsp;
                  <span className='text-xl  font-black'>
                    {item.author}
                  </span>
                </p>
                <p className='text-3xl font-bold font-Butterfly'>
                  Bar code: &nbsp;
                  <span className='text-2xl font-black'>{item.bar_code}</span>
                </p>
                <p className='text-3xl font-bold font-Butterfly'>
                  Ano: &nbsp;
                  <span className='text-2xl font-black'>{item.year}</span>
                </p>
                <div className=' flex justify-center '>
                  <button
                    className='flex  font-bold font-Butterfly text-white rounded-lg w-40 pt-2 h-12
                   text-white-700 text-2xl mt-5 bg-blue-700 md:hover:bg-blue-600 justify-center'
                  >
                    Enviar
                  </button>
                </div>
              </li>
            </Link>
          ))}
        </ul>
      )}
    </>
  )
}
