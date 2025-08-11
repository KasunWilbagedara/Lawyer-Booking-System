import appointment_img from './appointment_img.png'
import header_img from './header_img.png'
import group_profiles from './group_profiles.png'
import profile_pic from './profile_pic.png'
import contact_image from './contact_image.png'
import about_image from './about_image.png'
import logo from './logo.png'
import dropdown_icon from './dropdown_icon.svg'
import menu_icon from './menu_icon.svg'
import cross_icon from './cross_icon.png'
import chats_icon from './chats_icon.svg'
import verified_icon from './verified_icon.svg'
import arrow_icon from './arrow_icon.svg'
import info_icon from './info_icon.svg'
import upload_icon from './upload_icon.png'
import stripe_logo from './stripe_logo.png'
import razorpay_logo from './razorpay_logo.png'
import law1 from './law1.png'
import law2 from './law2.png'
import law3 from './law3.png'
import law4 from './law4.png'
import law5 from './law5.png'
import law6 from './law6.png'
import law7 from './law7.png'
import law8 from './law8.png'
import law9 from './law9.png'
import law10 from './law10.png'
import law11 from './law11.png'
import law12 from './law12.png'
import law13 from './law13.png'
import law14 from './law14.png'
import law15 from './law15.png'
import Bankruptcy from './Bankruptcy.jpeg'
import AdministrativeLaw from './AdministrativeLaw.jpg'
import CriminalLaw from './CriminalLaw.jpeg' 
import FamilyLaw from './FamilyLaw.jpg'
import HealthLaw from './HealthLaw.jpg'
import PropertyLaw from './PropertyLaw.webp'
import ceo1 from './ceo1.png'
import ceo2 from './ceo2.png'
import bg from './bg.jpg'
import about_imagebg from './about_imagebg.jpg'


export const assets = {
    about_imagebg,
    bg,
    appointment_img,
    header_img,
    group_profiles,
    logo,
    chats_icon,
    verified_icon,
    info_icon,
    profile_pic,
    arrow_icon,
    contact_image,
    about_image,
    menu_icon,
    cross_icon,
    dropdown_icon,
    upload_icon,
    stripe_logo,
    razorpay_logo
}

export const specialityData = [
    {
        speciality: 'Criminal Law',
        image: CriminalLaw

    },
    {
        speciality: 'Family Law',
        image: FamilyLaw
    },
    {
        speciality: 'Bankruptcy',
        image: Bankruptcy
    },
    {
        speciality: 'Property Law',
        image: PropertyLaw
    },
    {
        speciality: 'Health Law',
        image: HealthLaw
    },
    {
        speciality: 'Administrative Law',
        image: AdministrativeLaw
    },
]

export const TopLawyers = [
    {
        speciality: 'Mrs. L. James',
        image: ceo1

    },
    {
        speciality: 'Mr. L james',
        image: ceo2
    },
    
    
]

export const lawyer = [
  {
    _id: 'law1',
    name: 'John Smith',
    image: law1,
    speciality: 'Criminal Law',
    degree: 'LLB',
    experience: '8 Years',
    about: 'Experienced criminal lawyer specializing in defense and prosecution.',
    fees: 150,
    address: {
      line1: '123 Justice Ave',
      line2: 'Law City'
    },
    available: true
  },
  {
    _id: 'law2',
    name: 'Sarah Johnson',
    image: law2,
    speciality: 'Family Law',
    degree: 'LLM',
    experience: '5 Years',
    about: 'Passionate about family rights and custody battles.',
    fees: 120,
    address: {
      line1: '456 Peace St',
      line2: 'Law City'
    },
    available: false
  },
  {
    _id: 'law3',
    name: 'Michael Brown',
    image: law3,
    speciality: 'Bankruptcy',
    degree: 'LLB',
    experience: '6 Years',
    about: 'Helping clients navigate financial difficulties with bankruptcy law.',
    fees: 130,
    address: {
      line1: '789 Finance Rd',
      line2: 'Law City'
    },
    available: true
  },
  {
    _id: 'law4',
    name: 'Emily Davis',
    image: law4,
    speciality: 'Property Law',
    degree: 'LLB',
    experience: '7 Years',
    about: 'Expert in real estate disputes and property transactions.',
    fees: 140,
    address: {
      line1: '321 Estate Blvd',
      line2: 'Law City'
    },
    available: true
  },
  {
    _id: 'law5',
    name: 'David Wilson',
    image: law5,
    speciality: 'Health Law',
    degree: 'LLM',
    experience: '4 Years',
    about: 'Specializes in healthcare regulations and compliance.',
    fees: 110,
    address: {
      line1: '654 Wellness Way',
      line2: 'Law City'
    },
    available: false
  },
  {
    _id: 'law6',
    name: 'Linda Martinez',
    image: law6,
    speciality: 'Administrative Law',
    degree: 'LLB',
    experience: '9 Years',
    about: 'Experienced in government and administrative legal matters.',
    fees: 160,
    address: {
      line1: '987 Government Ln',
      line2: 'Law City'
    },
    available: true
  },
]