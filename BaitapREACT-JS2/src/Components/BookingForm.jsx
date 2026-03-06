import React from 'react'
import Seat from './Seat'

const BookingForm = () => {
    
  return (
    <div 
      className="min-h-screen bg-[url('https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=2070')] bg-cover bg-center bg-no-repeat bg-fixed">
      <div className="min-h-screen bg-black/70 py-10">
        
        <header className='text-center text-3xl text-white uppercase font-bold tracking-widest'>
          Movie Seat Selection
        </header>

        <div className="max-w-4xl mx-auto mt-10 p-6 bg-gray-100 shadow rounded-lg backdrop-blur-sm">
           <p className="text-orange-400 text-center">
              Fill The Required Details Below And Select Your Seats           
           </p>

           <div className='flex flex-wrap justify-between p-5'>
            <div>
                <h1>Name</h1>
                <form type="text" className=''>

                </form>
            </div>

            <div>
                <h1>Number of Seat</h1>
                <form type="number"></form>
            </div>
        </div>
        </div>

      </div>

      <Seat />
    </div>
  )
}

export default BookingForm