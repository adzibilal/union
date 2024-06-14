import ServiceItem from '@/components/molecules/ServiceItem'
import PageHeader from '@/components/organism/PageHeader'
import TestimonialSection from '@/components/organism/TestimonialSection'
import React from 'react'
import { BiBrush, BiBuilding, BiCube, BiHeadphone, BiHealth, BiPhoneCall, BiPlus, BiPlusMedical, BiSolidSchool, BiTrophy } from 'react-icons/bi'

interface ServicesItem {
    title: string
    description: string
    image: string
    icon: React.ReactNode
    link: string
}

const ServicesPage = () => {
    const services = [
        {
            title: 'Konsultasi',
            description:
                'Butuh ide, saran, panduan atau jawaban profesional atas desain terbaik properti Anda? Didampingi langsung oleh ahli arsitektur dan interior, Anda bisa mendapatkan seluruh masukan, inspirasi dan bimbingan atas konsep desain yang melebihi dari ekspektasi Anda. Dapatkan konsultasi gratis dari kami untuk solusi hunian terbaik dambaan Anda.',
            image: '/assets/images/service/consultation.jpg',
            icon: <BiPhoneCall />,
            link: '/contact'
        },
        {
            title: 'Ahli Style Design',
            description:
                'Dimulai dari tema modern minimalis, Scandinavian, transisional, klasik, industrial dan lainnya - tim Union Creative Design sudah terlatih untuk terus up-to-date dengan mengasah kemampuan desain masing-masing. Rutin berkecimpung dalam variasi proyek properti, baik residensial, komersial, landscape, dan lain sebagainya, menjadikan kami sebagai ahli yang berpengalaman dalam mewujudkan seluruh properti dambaan Anda.',
            image: '/assets/images/service/style.jpg',
            icon: <BiBrush />,
            link: '/contact'
        },
        {
            title: 'Visualisasi 3D',
            description:
                'Menggunakan desain 3D untuk visualisasi realistis, klien akan mendapatkan gambaran multi perspektif, termasuk dari eksterior dan interior. Seluruh detail akan disajikan secara lengkap dan teliti, tanpa luput dari pengamatan dan input profesional dari tim kami.',
            image: '/assets/images/service/3d.jpg',
            icon: <BiCube />,
            link: '/contact'
        },
        {
            title: 'Safety First',
            description:
                'Baik aspek keselamatan dari properti klien maupun pekerja, kami memiliki standard pengerjaan konstruksi yang menuruti praktek lapangan yang terbaik dan paling aman. Dengan prosedur kerjadan metode konstruksi yang telah teruji, kami yakin bahwa safety adalah salah satu kunci utama dalam menyelesaikan proyek yang benar-benar memuaskan seluruh pihak.',
            image: '/assets/images/service/safetyfirst.jpg',
            icon: <BiPlusMedical />,
            link: '/contact'
        },
        {
            title: 'Profesionalisme Tinggi',
            description:
                'Awal dari profesionalisme adalah menjaga kepercayaan terbesar yang telah diberikan oleh setiap klien kami. Seluruh personil tim konstruksi memegang komitmen atas profesionalisme, termasuk disiplinwaktu dan efisiensi kerja yang merupakan cermin dari integritas bekerja.',
            image: '/assets/images/service/professional.jpg',
            icon: <BiTrophy />,
            link: '/contact'
        },
        {
            title: 'Pemahaman Arsitektural',
            description:
                'Perusahaan kami hanya memberdayakan pekerja lapangan yang sudah mahir dan teruji di bidangnya. Seorang pengawas lapangan berpengalaman juga senantiasa hadir untukmemastikan seluruh pengerjaan lapangan, termasuk material dan standar pengerjaan, telah sesuai dengan teknis dan ekspektasi klien.',
            image: '/assets/images/service/architectural.jpg',
            icon: <BiSolidSchool />,
            link: '/contact'
        }
    ]
    return (
        <div>
            <PageHeader
                title='LAYANAN KAMI'
                subtitle='Meningkatkan kualitas hidup pelanggan melalui desain yang memenuhi aspek estetika, fungsi, dan
                ketahanan yang diwujudkan dalam sebuah konsep yang memiliki nilai seni yang tinggi'
            />

            <div className='max-container'>
                <div className='my-10 flex flex-col gap-10'>
                    {services.map((service: ServicesItem, index: number) => (
                        <ServiceItem
                            key={index}
                            index={index + 1}
                            {...service}
                        />
                    ))}
                </div>

                <TestimonialSection />
            </div>
        </div>
    )
}

export default ServicesPage
