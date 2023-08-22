import React, { useEffect } from 'react'
import hero from '../assets/hero.png'
import triforce from '../assets/Triforce.svg.png'

const Hero = () => {

  return (
    <>
      <section className='section-hero'>
        <div className='background'></div>
        <div className='absolute top-0 hero flex justify-between items-center w-full px-8 py-5'>
          <div >
            <img className='w-24' src={triforce} alt="" />
          </div>
          <div className=''>
            <a href="#" className='button bg-emerald-500 px-6 rounded-full font-semibold hover:bg-emerald-600 transition py-2 text-white'>Jogos</a>
          </div>
        </div>
        <div className='absolute top-0 flex justify-between lg:flex-row flex-col px-8 py-5 items-center w-full lg:h-screen lg:pt-0 pt-[10rem]'>
          <div className="lg:w-1/2 w-full">
            <h1 className='text-white text-5xl font-bold'>The Legend of Zelda</h1>
            <p className='text-white font-extralight mt-4 w-50 text-justify'>"The Legend of Zelda" é uma série popular de jogos eletrônicos desenvolvida e publicada pela Nintendo. A série foi criada por Shigeru Miyamoto e Takashi Tezuka e estreou em 1986 com o jogo de mesmo nome. Ela se tornou uma das franquias de jogos mais icônicas e influentes da indústria.</p>
          </div>
          <div className="w-1/3 ">
            <img className='w-80 lg:flex hidden' src={hero} alt="" />
          </div>
        </div>
      </section>

    
    </>
  )
}

export default Hero
