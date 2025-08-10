import React from 'react'
import { useNavigate } from 'react-router-dom'
import { TopLawyers } from '../assets/assets'  // Assuming you export it properly

const TopLawyersComponent = () => {
  const navigate = useNavigate()

  return (
    <div className="bg-[#193241] py-12 flex flex-col items-center text-[#D68524]">
      <h1 className="text-3xl font-semibold mb-8">Top Lawyers</h1>
      <div className="flex gap-6">
        {TopLawyers.map((lawyer, index) => (
          <div
            key={index}
            onClick={() => {
              // For now no routing is given for lawyers; add if needed
              // navigate(`/lawyer/${lawyer.id}`);
              window.scrollTo(0, 0)
            }}
            className="bg-white rounded-lg overflow-hidden shadow-lg cursor-pointer max-w-[220px] hover:scale-105 transition-transform duration-300"
          >
            <img
              src={lawyer.image}
              alt={lawyer.speciality}
              className="w-full object-cover"
              style={{ aspectRatio: '4 / 5' }}
            />
            <div className="p-4 text-center text-black">
              <p className="font-semibold text-lg">{lawyer.speciality}</p>
              <p className="text-sm mt-1">
                Founder and Managing Partner
              </p>
              <p className="text-sm">Colombo, Sri Lanka</p>
            </div>
          </div>
        ))}
      </div>
      <button
        onClick={() => {
          navigate('/lawyers')
          window.scrollTo(0, 0)
        }}
        className="mt-10 bg-[#D68524] text-white rounded-full px-12 py-3 hover:bg-[#b3721f] transition-colors"
      >
        more
      </button>
    </div>
  )
}

export default TopLawyersComponent
