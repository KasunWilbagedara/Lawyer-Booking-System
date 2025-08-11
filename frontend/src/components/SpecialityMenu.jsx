import React from 'react'
import { specialityData } from '../assets/assets'
import { Link } from 'react-router-dom'

const SpecialityMenu = () => {
  return (
    <div id="speciality" className="flex flex-col items-center gap-4 py-16 text-[#262626]">
      <h1 className="text-3xl font-medium mb-4">Our Services</h1>
      <div className="grid grid-cols-3 gap-8 max-w-4xl">
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
              className="w-full max-w-[180px] h-[120px] object-cover rounded-md shadow-md"
            />
            <p className="mt-2 text-xs text-center">{item.speciality}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default SpecialityMenu
