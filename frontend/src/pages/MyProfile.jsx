import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../context/AppContext'
import axios from 'axios'
import { toast } from 'react-toastify'
import { assets } from '../assets/assets'

const MyProfile = () => {

    const [isEdit, setIsEdit] = useState(false)

    const [image, setImage] = useState(false)

    const { token, backendUrl, clientData, setClientData, loadClientProfileData } = useContext(AppContext)

    // Function to update client profile data using API
    const updateClientProfileData = async () => {

        try {

            const formData = new FormData();

            formData.append('name', clientData.name)
            formData.append('phone', clientData.phone)
            formData.append('address', JSON.stringify(clientData.address))
            formData.append('gender', clientData.gender)
            formData.append('dob', clientData.dob)

            image && formData.append('image', image)

            const { data } = await axios.post(backendUrl + '/api/client/update-profile', formData, { headers: { token } })

            if (data.success) {
                toast.success(data.message)
                await loadClientProfileData()
                setIsEdit(false)
                setImage(false)
            } else {
                toast.error(data.message)
            }

        } catch (error) {
            console.log(error)
            toast.error(error.message)
        }

    }

    return clientData ? (
        <div className='max-w-lg flex flex-col gap-2 text-sm pt-5'>

            {isEdit
                ? <label htmlFor='image' >
                    <div className='inline-block relative cursor-pointer'>
                        <img className='w-36 rounded opacity-75' src={image ? URL.createObjectURL(image) : clientData.image} alt="" />
                        <img className='w-10 absolute bottom-12 right-12' src={image ? '' : assets.upload_icon} alt="" />
                    </div>
                    <input onChange={(e) => setImage(e.target.files[0])} type="file" id="image" hidden />
                </label>
                : <img className='w-36 rounded' src={clientData.image} alt="" />
            }

            {isEdit
                ? <input className='bg-gray-50 text-3xl font-medium max-w-60' type="text" onChange={(e) => setClientData(prev => ({ ...prev, name: e.target.value }))} value={clientData.name} />
                : <p className='font-medium text-3xl text-[#262626] mt-4'>{clientData.name}</p>
            }

            <hr className='bg-[#ADADAD] h-[1px] border-none' />

            <div>
                <p className='text-gray-600 underline mt-3'>CONTACT INFORMATION</p>
                <div className='grid grid-cols-[1fr_3fr] gap-y-2.5 mt-3 text-[#363636]'>
                    <p className='font-medium'>Email id:</p>
                    <p className='text-blue-500'>{clientData.email}</p>
                    <p className='font-medium'>Phone:</p>

                    {isEdit
                        ? <input className='bg-gray-50 max-w-52' type="text" onChange={(e) => setClientData(prev => ({ ...prev, phone: e.target.value }))} value={clientData.phone} />
                        : <p className='text-blue-500'>{clientData.phone}</p>
                    }

                    <p className='font-medium'>Address:</p>

                    {isEdit
                        ? <p>
                            <input className='bg-gray-50' type="text" onChange={(e) => setClientData(prev => ({ ...prev, address: { ...prev.address, line1: e.target.value } }))} value={clientData.address.line1} />
                            <br />
                            <input className='bg-gray-50' type="text" onChange={(e) => setClientData(prev => ({ ...prev, address: { ...prev.address, line2: e.target.value } }))} value={clientData.address.line2} /></p>
                        : <p className='text-gray-500'>{clientData.address.line1} <br /> {clientData.address.line2}</p>
                    }

                </div>
            </div>
            <div>
                <p className='text-[#797979] underline mt-3'>BASIC INFORMATION</p>
                <div className='grid grid-cols-[1fr_3fr] gap-y-2.5 mt-3 text-gray-600'>
                    <p className='font-medium'>Gender:</p>

                    {isEdit
                        ? <select className='max-w-20 bg-gray-50' onChange={(e) => setClientData(prev => ({ ...prev, gender: e.target.value }))} value={clientData.gender} >
                            <option value="Not Selected">Not Selected</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                        </select>
                        : <p className='text-gray-500'>{clientData.gender}</p>
                    }

                    <p className='font-medium'>Birthday:</p>

                    {isEdit
                        ? <input className='max-w-28 bg-gray-50' type='date' onChange={(e) => setClientData(prev => ({ ...prev, dob: e.target.value }))} value={clientData.dob} />
                        : <p className='text-gray-500'>{clientData.dob}</p>
                    }

                </div>
            </div>
            <div className='mt-10'>

                {isEdit
                    ? <button onClick={updateClientProfileData} className='border border-primary px-8 py-2 rounded-full hover:bg-primary hover:text-white transition-all'>Save information</button>
                    : <button onClick={() => setIsEdit(true)} className='border border-primary px-8 py-2 rounded-full hover:bg-primary hover:text-white transition-all'>Edit</button>
                }

            </div>
        </div>
    ) : null
}

export default MyProfile
