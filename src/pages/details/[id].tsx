    import { Header } from "@/components/header";
import { useRouter } from "next/router";

    import { useEffect,useState } from "react";

    import {api} from '../api/api'

    type IDescription  = {
        description: string;
        id:string;

    }


    export default function Details () {

        const [details, setDetails] = useState<IDescription>();
        const router  = useRouter()
        const {id} = router.query


        useEffect (() => {
            if(id) {
              getDetails()
            }
        },[id])


        async function getDetails() {
            try {
                const response = await api.get(`books/${id}`)
                setDetails(response.data)
            }catch(error) {
                console.log(error)
            }
        }

        if (!details) {
          return <div className="flex justify-center font-Butterfly
        font-extrabold text-6xl text-red-600">Carregando, aguarde...</div>
        }

        return (
          <>
            <Header />
            <p className='mt-10 text-black font-bold text-4xl text-center'>Descrição:</p>
            <div className='text-lg md:flex justify-center mt-8 font-bold'>
              <p className='font-normal text-center md:text-3xl'>{details.description}</p>
            </div>
          </>
        )
    }

