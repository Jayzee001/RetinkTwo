import group from './Asset/Group.svg'
import brain from "./Asset/artificial-intelligence-svgrepo-com 1brain.svg"
import file from './Asset/Groupbrand.png'
import vector from './Asset/Vector.svg'
import vector2 from './Asset/Vectorpublish.svg'
import { SocialIcon } from 'react-social-icons';
import { MdOutlineEditNote, MdShowChart } from 'react-icons/md';
import { BsFillPencilFill } from 'react-icons/bs'
import { FiBriefcase } from 'react-icons/fi'





export const category = [
    {
        display: 'https://i.pinimg.com/236x/a1/87/19/a187193a6de0675ffb33a6675bb2013b.jpg',
        title: 'Logos',
        describe:' Have a unique & creative logo designed to express and represent your brand identity.'
    },
    {
        display: 'https://i.pinimg.com/236x/ae/74/f9/ae74f938c352134d6d6aede87eb6a689.jpg',
        title: 'Blog Writing',
        describe:' Write SEO enriched blog posts as long or short articles on any topic of your choice .'
    },
    {
        display: 'https://i.pinimg.com/236x/fc/89/12/fc8912cc817702f6bd7dd5d7c563f89d.jpg',
        title: 'Animated Videos',
        describe:'Bring animated characters to life to keep your viewers engaged and  entertained.'
    },
    {
        display: 'https://i.pinimg.com/564x/cd/bb/9e/cdbb9e0e60f0515ebbb3532e9a5edbba.jpg',
        title: 'Copywriting',
        describe:'Introduce your product to potential customers in a clear and creative video.'
    },
    {
        display: 'https://i.pinimg.com/236x/b3/ca/27/b3ca2744ae93fc6170da418c732eabb3.jpg',
        title: 'Product Demo',
        describe:'Have creative and compelling copies written to boost your product, brand, service or company.'
    },
    {
        display: 'https://i.pinimg.com/236x/d1/4e/9e/d14e9e037ace1e927c599efe8adc3113.jpg',
        title: 'Social Media Ads',
        describe:'Boost sales and awareness with tailor made ads from experts.'
    }
]




export const ourAbility = [
    {
        title: 'MakeAI-assisted Content Choices',
        describe: "Access and Order from an extensive catalogue in any language and on your budget’s terms. If unsure, our AI guides you to the best.", 
        icon : brain
    },
    {
        title: 'Upload and maintain your Brand identity',
        describe: 'Add your preferences and brand assets to ensure the contents is consistent with your brand identity. No brand asset? We can make for you!',
        icon: file
    },
    {
        title: 'Be informed as we create',
        describe: 'Your details are translated and sent to the AI, FP, or both (per your choice) as you relax and receive continuous updates.',
        icon: group
    },
    {
        title: 'Receive and Review',
        describe: 'The finished content is delivered and you can make corrections that we will effect to satisfy your requirements.',
        icon: vector
    },
    {
        title: 'Publish and Monitor your contents’ progress',
        describe: 'The finished content is delivered and you can make corrections that we will effect to satisfy your requirements.',
        icon: vector2
    }
]

const fb = <SocialIcon style={{height:'25px', width:'30px'}} url="https://www.facebook.com/nwanze.johnmary?mibextid=ZbWKwL" />
const whatsapp = <SocialIcon style={{height:'25px', width:'30px'}} url="https://wa.me/2349032289003?text=Hello!%20Thanks%20for%20reaching%20out%20to%20me...%20%0AHow%20can%20I%20help%20you?" />
const twitter = <SocialIcon url="Check out Johnmary Nwanze (@JohnmNwanze): https://x.com/JohnmNwanze?t=QxH8jD5Cr6aR5_Qlwe4M-A&s=08" />
const insta = <SocialIcon style={{height:'25px', width:'30px'}} url='instagram'/>
const yout = <SocialIcon style={{height:'25px', width:'30px'}} url='youtube.com'/>
const pint = <SocialIcon style={{height:'25px', width:'30px'}} url='pinterest.com'/>
const linked = <SocialIcon style={{height:'25px', width:'30px'}} url='linkedin.com'/>



export const Social_Icon = [
    {
        app: whatsapp
    },
    {
        app: fb
    },
    {
        app: twitter
    },
    {
        app: insta
    },
    {
        app: yout
    },
    {
        app: pint
    },
    {
        app: linked
    },
]




const pen = < FiBriefcase  style={{color:'purple'}} />
const chart = < MdShowChart style={{color:'green'}} />
const edit = < BsFillPencilFill style={{color:'blue'}} />
const edit2 = < MdOutlineEditNote  style={{color:'orange'}}/>



export const tabs = [
    {
        title:'Blog writng',
        icons: pen,
        iconTwo: chart,
        write:'Generate the best blog post to fit your audience with just few clicks of a button '
    },
    {
        title:'Product description',
        icons: edit2,
        iconTwo: chart,
        write:'Instantly generate engaging product descriptions that sell product that are fast moving'
    },
    {
        title:'Article Writing',
        icons: edit,
        iconTwo:chart ,
        write:'Automatically create unique factual articles at the touch of a button'
    },
    {
        title:'Blog Writing',
        icons: pen,
        iconTwo: chart,
        write:'Generate the best blog post to fit your audience with just few clicks of a button '
    },
    {
        title:'what you want we provide',
        icons: edit,
        iconTwo: chart,
        write:'Instantly generate engaging product descriptions that sell cars and other tools'
    },
    {
        title: 'Something different',
        icons:edit2 ,
        iconTwo:chart ,
        write:'Automatically create unique factual articles at the touch of a button'
    }
]