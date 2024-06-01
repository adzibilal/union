import React from 'react'
import { FaArrowRight } from 'react-icons/fa'

const InfoBox = () => {
    return (
        <div className='max-container'>
            <div className='grid grid-cols-1 md:grid-cols-3'>
                <div className='p-7 bg-zinc-900 text-white flex flex-col gap-4'>
                    <div className='text-3xl font-extrabold'>HOME DESIGN CONSULTATION</div>
                    <div className='text-sm font-light leading-loose'>
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Modi officia accusantium animi, ipsum nesciunt
                        sunt quod sed dicta id, debitis enim, ut impedit nihil
                        minima eos unde. Veritatis, nesciunt iure.
                    </div>
                    <FaArrowRight size={25} />
                </div>
                <div className='p-7 bg-u-orange-500 text-white flex flex-col gap-4'>
                    <div className='text-3xl font-extrabold'>HOME DESIGN 3D 2D INTERIOR SERVICE</div>
                    <div className='text-sm font-light leading-loose'>
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Modi officia accusantium animi, ipsum nesciunt
                        sunt quod sed dicta id, debitis enim, ut impedit nihil
                        minima eos unde. Veritatis, nesciunt iure.
                    </div>
                    <FaArrowRight size={25} />
                </div>
                <div className='p-7 bg-zinc-900 text-white flex flex-col gap-4'>
                    <div className='text-3xl font-extrabold'>HOME DESIGN CONSULTATION</div>
                    <div className='text-sm font-light leading-loose'>
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Modi officia accusantium animi, ipsum nesciunt
                        sunt quod sed dicta id, debitis enim, ut impedit nihil
                        minima eos unde. Veritatis, nesciunt iure.
                    </div>
                    <FaArrowRight size={25} />
                </div>
            </div>
        </div>
    )
}

export default InfoBox
