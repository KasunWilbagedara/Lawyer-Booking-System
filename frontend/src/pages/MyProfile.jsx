import React, { useContext, useState } from 'react'
import { AppContext } from '../context/AppContext'
import axios from 'axios'
import { toast } from 'react-toastify'
import { assets } from '../assets/assets'

const MyProfile = () => {
    const [isEdit, setIsEdit] = useState(false)
    const [image, setImage] = useState(false)
    const { token, backendUrl, userData, setUserData, loadUserProfileData } = useContext(AppContext)

    const updateUserProfileData = async () => {
        try {
            const formData = new FormData();
            formData.append('name', userData.name)
            formData.append('phone', userData.phone)
            formData.append('address', JSON.stringify(userData.address))
            formData.append('gender', userData.gender)
            formData.append('dob', userData.dob)
            image && formData.append('image', image)

            const { data } = await axios.post(backendUrl + '/api/user/update-profile', formData, { headers: { token } })

            if (data.success) {
                toast.success(data.message)
                await loadUserProfileData()
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

    return userData ? (
        <div className="flex justify-center items-center min-h-screen bg-white">
            <div className="shadow-xl rounded-xl p-8 max-w-xl w-full flex flex-col items-center gap-6">
                <div className="relative">
                    {isEdit ? (
                        <label htmlFor="image" className="cursor-pointer">
                            <img
                                className="w-32 h-32 object-cover rounded-full border-4 border-primary"
                                src={image ? URL.createObjectURL(image) : userData.image}
                                alt="Profile"
                            />
                            <img
                                className="w-10 absolute bottom-2 right-2"
                                src={image ? '' : assets.upload_icon}
                                alt=""
                            />
                            <input
                                onChange={(e) => setImage(e.target.files[0])}
                                type="file"
                                id="image"
                                hidden
                            />
                        </label>
                    ) : (
                        <img
                            className="w-32 h-32 object-cover rounded-full border-4 border-primary"
                            src={userData.image}
                            alt="Profile"
                        />
                    )}
                </div>
                <div className="w-full text-center">
                    {isEdit ? (
                        <input
                            className="bg-gray-100 text-2xl font-bold rounded px-4 py-2 w-2/3 mx-auto open-sans-regular"
                            type="text"
                            onChange={(e) => setUserData(prev => ({ ...prev, name: e.target.value }))}
                            value={userData.name}
                        />
                    ) : (
                        <p className="font-bold text-2xl text-[#1f3845] mt-2 open-sans-regular">{userData.name}</p>
                    )}
                    <p className="text-gray-600 open-sans-regular">{userData.email}</p>
                </div>
                <hr className="w-full border-t border-gray-200" />
                <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <p className="text-primary font-bold mb-2 open-sans-regular">Contact Information</p>
                        <div className="space-y-2">
                            <div>
                                <span className="font-semibold open-sans-regular">Phone:</span>
                                {isEdit ? (
                                    <input
                                        className="bg-gray-100 rounded px-2 py-1 ml-2 w-32 open-sans-regular"
                                        type="text"
                                        onChange={(e) => setUserData(prev => ({ ...prev, phone: e.target.value }))}
                                        value={userData.phone}
                                    />
                                ) : (
                                    <span className="ml-2 text-blue-500 open-sans-regular">{userData.phone}</span>
                                )}
                            </div>
                            <div>
                                <span className="font-semibold open-sans-regular">Address:</span>
                                {isEdit ? (
                                    <span className="ml-2 flex flex-col gap-1">
                                        <input
                                            className="bg-gray-100 rounded px-2 py-1 open-sans-regular"
                                            type="text"
                                            onChange={(e) => setUserData(prev => ({ ...prev, address: { ...prev.address, line1: e.target.value } }))}
                                            value={userData.address.line1}
                                            placeholder="Line 1"
                                        />
                                        <input
                                            className="bg-gray-100 rounded px-2 py-1 open-sans-regular"
                                            type="text"
                                            onChange={(e) => setUserData(prev => ({ ...prev, address: { ...prev.address, line2: e.target.value } }))}
                                            value={userData.address.line2}
                                            placeholder="Line 2"
                                        />
                                    </span>
                                ) : (
                                    <span className="ml-2 text-gray-500 open-sans-regular">{userData.address.line1} <br /> {userData.address.line2}</span>
                                )}
                            </div>
                        </div>
                    </div>
                    <div>
                        <p className="text-primary font-bold mb-2 open-sans-regular">Basic Information</p>
                        <div className="space-y-2">
                            <div>
                                <span className="font-semibold open-sans-regular">Gender:</span>
                                {isEdit ? (
                                    <select
                                        className="bg-gray-100 rounded px-2 py-1 ml-2 open-sans-regular"
                                        onChange={(e) => setUserData(prev => ({ ...prev, gender: e.target.value }))}
                                        value={userData.gender}
                                    >
                                        <option value="Not Selected">Not Selected</option>
                                        <option value="Male">Male</option>
                                        <option value="Female">Female</option>
                                    </select>
                                ) : (
                                    <span className="ml-2 text-gray-500 open-sans-regular">{userData.gender}</span>
                                )}
                            </div>
                            <div>
                                <span className="font-semibold open-sans-regular">Birthday:</span>
                                {isEdit ? (
                                    <input
                                        className="bg-gray-100 rounded px-2 py-1 ml-2 open-sans-regular"
                                        type="date"
                                        onChange={(e) => setUserData(prev => ({ ...prev, dob: e.target.value }))}
                                        value={userData.dob}
                                    />
                                ) : (
                                    <span className="ml-2 text-gray-500 open-sans-regular">{userData.dob}</span>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full flex justify-center mt-6">
                    {isEdit ? (
                        <button
                            onClick={updateUserProfileData}
                            className="bg-primary text-white px-8 py-2 rounded-full font-bold open-sans-regular hover:bg-primary-dark transition-all"
                        >
                            Save Information
                        </button>
                    ) : (
                        <button
                            onClick={() => setIsEdit(true)}
                            className="border border-primary text-primary px-8 py-2 rounded-full font-bold open-sans-regular hover:bg-primary hover:text-white transition-all"
                        >
                            Edit
                        </button>
                    )}
                </div>
            </div>
        </div>
    ) : null
}

export default MyProfile