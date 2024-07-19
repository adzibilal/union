'use client'
import React from 'react'
import SectionTitle from '../molecules/SectionTitle'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import { FaStar, FaUser } from 'react-icons/fa'

const TestimonialSection = () => {
    const dataTestimonial = [
        {
            rating: 5,
            testi: 'Proses kerjasama saya dengan UNION berjalan dengan baik. Alhamdulillah, keinginan saya sebagai client selalu didengarkan. Dari proses desain sampai pengerjaan selalu melibatkan saya, top lah UNION ini!',
            ava: '/assets/images/adji.png',
            name: 'Adji',
            profession: 'Bandung'
        },
        {
            rating: 5,
            testi: 'UNION sangat detail, saat mau bangun ruko untuk jualan, konsepnya hanya ada di kepala saya saja dan tidak terlalu mengerti soal bangunan, tetapi team UNION berhasil merepresentasikan apa yang ada di kepala saya dengan baik. Hatur nuhun! 😊',
            ava: '/assets/images/ratna_sari.png',
            name: 'Ratna Sari',
            profession: 'Tasikmalaya'
        },
        {
            rating: 5,
            testi: 'Terima kasih UNION dan tim yang sudah membantu proses renovasi rumah saya menjadi lebih modern dan estetik. Jarak jauh bukan penghalang!',
            ava: '/assets/images/danar.png',
            name: 'Danar',
            profession: 'Solo'
        },
        {
            rating: 4,
            testi: 'Order desain rumah dan interiornya 2lt untuk tanah yang cukup luas ke UNION, tetapi ga butuh waktu lama untuk saya deal langsung sama desainnya. Senang karena meskipun jauh tapi team UNION sangat fast respon sehingga prosesnya sat set!',
            ava: '/assets/images/abi.png',
            name: 'Abi',
            profession: 'Surabaya'
        },
        {
            rating: 5,
            testi: 'Lagi cari jasa desain interior untuk bikin ruangan meeting di kantor, muncul iklan UNION ini, ngobrol sama adminnya ramah, informatif, pokoknya pelayanannya baik. Saya dihubungkan langsung dengan team desain interior untuk diskusi lebih lanjut, sangat terbantu dengan team yang solid seperti UNION 😀',
            ava: '/assets/images/reysa.png',
            name: 'Reysa',
            profession: 'Jakarta'
        },
        {
            rating: 4,
            testi: 'Oke banget buat yang mau bikin kantor atau renovasi, memang sudah sering handling client untuk bikin kantor atau sekedar desain ruangan di kantor, referensinya banyak, mantep deh! Goodluck UNION untuk kedepannya 👏',
            ava: '/assets/images/andi.png',
            name: 'Andi',
            profession: 'Jakarta'
        },
        {
            rating: 5,
            testi: 'Istri saya mau bikin kitchen set karna dirasa sudah butuh supaya dapur ga keliatan berantakan. Request ke UNION bikinin desain yang simple dan ga bikin sempit ruangan, hasilnya diluar ekspektasi saya padahal harganya terjangkau. Istri saya senang karena katanya kelihatan mewah dan mahal sekarang dapur kami😂',
            ava: '/assets/images/taufik.png',
            name: 'Taufik',
            profession: 'Tangerang'
        },
        {
            rating: 5,
            testi: 'Awal konsultasi pembangunan kos-kosan ini saya bilang ke pihak UNION maunya selesai bulan sekian, tanggal sekian. Alhamdulillah proses pengerjaan selesai lebih cepat dari timeline yang saya buat. Terima kasih UNION, soal kualitas gak perlu diragukan 👍',
            ava: '/assets/images/sigit.png',
            name: 'Sigit',
            profession: 'Bekasi'
        },
        {
            rating: 5,
            testi: 'Sudah langganan sejak lama kalau ada keperluan konstruksi pasti ke UNION, kemarin baru bangun lagi untuk ruko cabang ke-dua di daerah Bandung Barat, Alhamdulillah berjalan lancar prosesnya 😀',
            ava: '/assets/images/doni.png',
            name: 'Doni',
            profession: 'Bandung'
        },
        {
            rating: 5,
            testi: 'Rencana renovasi kecil-kecilan rumah warisan peninggalan orang tua supaya terlihat lebih terawat, gamau direnovasi macem-macem. Akhirnya beberapa bagian rumah diganti dengan material yang lebih kuat dan kokoh atas rekomendasi team UNION tanpa merubah vibes rumah masa kecil saya hehe hasil renovasinya membuat rumah orangtua saya lebih hidup, terima kasih UNION🥰',
            ava: '/assets/images/maryam.png',
            name: 'Maryam',
            profession: 'Yogyakarta'
        }
    ]

    return (
        <div className='max-container !mt-32 !mb-52'>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 items-center'>
                <div className=''>
                    <SectionTitle
                        subTitle='Clients Feedback'
                        title='OUR TESTIMONIAL FROM BEST CLIENTS'
                    />
                    <div className='text-zinc-500 leading-relaxed'>
                        Berikut adalah beberapa testimoni dari klien terbaik kami
                        yang sudah merasakan layanan dari UNION. Kami selalu
                        berusaha memberikan yang terbaik untuk klien kami.
                    </div>
                </div>
                <div className=''>
                    <Swiper
                        spaceBetween={30}
                        centeredSlides={true}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false
                        }}
                        pagination={{
                            clickable: true
                        }}
                        modules={[Autoplay]}
                        className='mySwiper'>
                        {dataTestimonial.map((item, index) => (
                            <SwiperSlide key={index}>
                                <div className='border border-zinc-300 p-4'>
                                    <div className='flex items-center gap-2 mb-3'>
                                        {item.rating &&
                                            Array.from({ length: 5 }).map(
                                                (_, index) => (
                                                    <FaStar
                                                        key={index}
                                                        className={`text-u-orange-500 text-xl ${
                                                            index < item.rating
                                                                ? 'text-u-orange-500'
                                                                : 'text-zinc-500'
                                                        }`}
                                                    />
                                                )
                                            )}
                                    </div>
                                    <div className='leading-relaxed text-zinc-500'>
                                        {item.testi}
                                    </div>
                                    <div className='flex gap-3 items-center mt-3'>
                                        <div className='min-w-9 h-9 aspect-square rounded-full bg-zinc-300 flex items-center justify-center text-zinc-500'>
                                            <FaUser />
                                        </div>
                                        <div className=''>
                                            <div className='font-extrabold text-lg uppercase'>
                                                {item.name}
                                            </div>
                                            <div className='uppercase text-u-orange-500 text-sm'>
                                                {item.profession}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </div>
    )
}

export default TestimonialSection
