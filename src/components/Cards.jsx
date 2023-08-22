import React, { useEffect, useState } from 'react'
import axios from 'axios'
import hero from '../assets/windwaker.webp'

const Cards = () => {
  const [zelda, setZelda] = useState([]);

  useEffect(() => {
    fetchGames();
  }, []);

  const fetchGames = async () => {
    try {
      const response = await axios.get('https://zelda.fanapis.com/api/games');
      setZelda(response.data.data);
      console.log(response.data);
    } catch (error) {
      console.error('Error fetching projects:', error);
    }
  };

  return (
    <>
    <section className='flex flex-wrap justify-between px-8 py-5'>
    {zelda.map((game) => (
      <div className="max-w-sm cards rounded overflow-hidden shadow-lg mt-5">
        <div className='flag absolute bg-emerald-500 px-2 py-1 mt-2 rounded-r-lg text-white font-bold'><p>{game.publisher}</p></div>
        <img className="w-full h-52 object-cover" src={hero} alt="Sunset in the mountains" />
        <div className="px-6 py-8">
          <div className="font-bold text-xl mb-2">
            <h1 className="text-emerald-400 text-center mb-5">{game.name}</h1>
            <h6 className='text-emerald-200 text-[14px] text-end'>{game.released_date}</h6>
          </div>
          <p className="text-white text-base text-justify description">{game.description}</p>
        </div>
      </div>
    ))}
    </section>
    </>
  )
}

export default Cards
