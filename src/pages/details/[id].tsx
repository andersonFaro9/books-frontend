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
            <p className='text-lg md:flex justify-center mt-24 font-bold'>
              Descrição:
              <span className='text-base font-normal'>
                &nbsp;{details.description}
              </span>
            </p>
          </>
        )
    }

