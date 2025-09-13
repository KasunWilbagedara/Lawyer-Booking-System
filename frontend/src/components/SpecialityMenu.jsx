import React from 'react'
import { specialityData } from '../assets/assets'
import { Link } from 'react-router-dom'

const SpecialityMenu = () => {
  return (
    <div id="speciality" className="flex flex-col items-center gap-4 py-16 text-[#262626] open-sans-regular">
    <h1
  className="text-4xl mb-4 font-bold"
  style={{
    color: '#1f3845',
    textTransform: 'uppercase'
  }}
>
  Our services
</h1>
      <div className="grid grid-cols-3 gap-12 max-w-5xl">
        {specialityData.map((item, index) => (
          <Link
            to={`/lawyers/${item.speciality}`}
            onClick={() => window.scrollTo(0, 0)}
            key={index}
            className="flex flex-col items-center cursor-pointer hover:-translate-y-2 transition-transform duration-300"
          >
            <img
              src={item.image}
              alt={item.speciality}
              className="w-full max-w-[220px] h-[150px] object-cover rounded-md shadow-md"
            />
            <p className="mt-2 text-2xl text-center open-sans-regular">{item.speciality}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default SpecialityMenu