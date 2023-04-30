import React from 'react'

export default function ProductsScreen  () {
  return (
    <div className='h-full w-full'>
        <h1 className='m-auto text-center'>Products</h1>
        <div className='md:w-[100%] mt-5 p-2'>
          <div className='grid grid-cols-[300px_minmax(600px,_1fr)] gap-9 mr-8 ml-8'>
            <div className='bg-white border border-dashed border-black border-2'>
              <span>Filters</span>
            </div>
            <div className='grid grid-cols-[250px_250px] gap-5 md:grid-cols-[auto_auto_auto] text-center'>
              <div className='bg-white border border-dashed border-black border-2 w-[15rem] h-[22rem] m-auto hover:shadow-2xl'>
                <span className='text-lg'>NAME PRODUCT</span>
                <img src="../favicon.ico" alt="products" />
                <span>PRICE</span>
              </div>
              <div className='bg-white border border-dashed border-black border-2 w-[15rem] h-[22rem] m-auto hover:shadow-2xl'>CARD</div>
              <div className='bg-white border border-dashed border-black border-2 w-[15rem] h-[22rem] m-auto hover:shadow-2xl'>CARD</div>
              <div className='bg-white border border-dashed border-black border-2 w-[15rem] h-[22rem] m-auto hover:shadow-2xl'>CARD</div>
              <div className='bg-white border border-dashed border-black border-2 w-[15rem] h-[22rem] m-auto hover:shadow-2xl'>CARD</div>
              <div className='bg-white border border-dashed border-black border-2 w-[15rem] h-[22rem] m-auto hover:shadow-2xl'>CARD</div>
            </div>
            {/* <div className='grid grid-cols-[250px_250px_250px] gap-10 md:grid-cols-[auto_auto_auto_auto]'>
              <div className='bg-white border border-dashed border-black border-2 w-[15rem] h-[22rem] m-auto'>CARD</div>
              <div className='bg-white border border-dashed border-black border-2 w-[15rem] h-[22rem] m-auto'>CARD</div>
              <div className='bg-white border border-dashed border-black border-2 w-[15rem] h-[22rem] m-auto'>CARD</div>
              <div className='bg-white border border-dashed border-black border-2 w-[15rem] h-[22rem] m-auto'>CARD</div>
            </div> */}
          </div>
        </div>
    </div>
  )
}

