import { Card, Chip } from '@nextui-org/react'
import React, {useState} from 'react'
import { delay, motion } from 'framer-motion'
import TokenomicsImage from '../../assets/images/draggy2.jpg'

const Tokenomics = () => {
    const [copied, setCopied] = useState(false)
    const handleOnclick = (e) =>{
        e.preventDefault()
        const copyText = async () => {
            await navigator.clipboard.writeText("0xd12A99dbC40036CEc6f1b776dccd2d36f5953B94")
        }

        if(copyText) {
            console.log(copyText)
            setCopied(true)
        }
        
    }
  return (
    <Card id='tokenomics' className='relative flex flex-col gap-5 bg-transparent p-10 w-[80%] my-32'>
        <motion.div
            initial={{opacity: 0}}
            whileInView={[{opacity:1}, {transform:'translateX(-35px)', transition:{delay:3.5, duration:2, ease:'easeOut'}}]}
            transition={{duration:3, ease:"easeInOut", delay:0}}
            className='text-4xl font-extrabold text-slate-50 text-center mb-5 z-20'
            >
                TOKENOMICS
        </motion.div>
        
        <Chip className='tax_fee bg-red-700 text-white'>0 Tax fee</Chip>
        <div className='_tsupply'>
            <Chip className='rounded-r-sm bg-red-700 text-white'>Total Supply:</Chip>
            <Chip className='rounded-l-sm'>420,690,000,000,000</Chip>
        </div>
        <div className='_caddress max-md:flex z-10'>
            <Chip className='rounded-r-sm bg-red-700 text-white'>C.A</Chip>
            <Chip className='rounded-l-sm select-none'>0xd12A99dbC40036CEc6f1b776dccd2d36f5953B94 <span className={`text-black font-extrabold mx-4 cursor-pointer`} 
            onClick={handleOnclick}
            >{copied ? "copied" : "copy"}</span></Chip>
        </div>
        <div className='token_d text-white rounded-sm p-4'>
            Liquidity burnt & Contract Renounced. 
         <hr /> <br />   Draggy is a Community take over (CTO) token.
         <hr /> <br />  No Dev. Contract is SAFU.</div>
         <motion.img src={TokenomicsImage} alt='draggy-intro-img'
            initial={{
                top: 0,
                right: '-50px',
                opacity: .5,
                filter: 'grayscale(100%)',
                zIndex: 10,
                transform: 'scale(.5)',
              }}
              whileInView={{
                transform: 'translateY(0px) scale(1)',
                filter: 'grayscale(0%)',
                opacity: 1,
                width:'500px',
                objectPosition:'top',
                objectFit: 'cover'
              }}
              transition={{
                duration: 5, 
                ease: 'easeInOut',
              }}
              viewport={{amount: 0.6}}
              

      className='absolute z-10 w-[400px] h-[800] top-0'
      />
    </Card>
  )
}

export default Tokenomics
