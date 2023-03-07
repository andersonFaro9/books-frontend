

import { useRouter } from 'next/router';
import { useEffect, useState } from 'react'

import {api} from './api/api'

type IDescription ={
    description:string;
    id:string;
}


export default function Details () {
    
    const [details, setDetails] = useState<IDescription[]>([]);
    
    const [id] = useState<IDescription[]>([])
    //  const router = useRouter()
    //  const { id } = router.query
     


    useEffect( ()=>{
        getDetails()
    },[])
    
    async function getDetails () {

      
      // try {
      //   const myBooks = await api
      //     .get(`/books/${details.id}`)
      //     .then((response) => setDetails(response.data))
      //     console.log(myBooks)
      // } catch (err) {
      //   console.error(err)
      // }


      try {
        const response = await api.get(`books/${id}`, {
          params: {
            
            id,
          },
        })

        setDetails (response.data)
      }
      catch(error) {
        console.log(error)
      }
  
    }

    if (!details) {
      return <div>carregando...</div>
    }

    return (
      <div>
        {details.map((item)=>
            (<li key = {item.id}>
              
                <p>{item.description}</p>
            </li>
        ))}
        
      </div>
    )
}


