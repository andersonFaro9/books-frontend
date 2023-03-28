import Image from 'next/image'
import kids from '../../images/kids.svg'

export function Main() {
  return (
    <>
      <div className='flex  items-center flex-col  md:grid grid-flow-col md:gap-56 md:m-12'>
        <Image src={kids} width={300} height={300} alt='images' />

        <div className='flex p-5 flex-col font-Butterfly text-5xl text-center  text-green-700 md:font-extrabold md:text-green-700  md:text-6xl md:pl-28 pt-10 '>
          Peça sua historinha infantil favorita!
        </div>
      </div>
    </>
  )
}
