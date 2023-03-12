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
          return <div>carregando...</div>
        }

        return (
            <div>
                <p>{details.description}</p>
            </div>
        )
    }

