import FaqAccordion from '@/components/atoms/FaqAccordion'
import PageHeader from '@/components/organism/PageHeader'
import React from 'react'

const FaqPage = () => {
    const trendingFaq = [
        {
            question:
                'Apa yang membuat UNION CREATIVE DESIGN berbeda dari perusahaan lain di bidang yang sama?',
            answer: 'UNION CREATIVE DESIGN mengutamakan prinsip GOOD CORPORATE GOVERNANCE, integritas, kreativitas, dan pelayanan prima. Dengan SDM yang berkualitas dan teknologi mutakhir, kami selalu berusaha memberikan solusi terbaik untuk klien kami.'
        },
        {
            question:
                'Bagaimana proses konsultasi untuk proyek desain interior dilakukan?',
            answer: 'Proses konsultasi dimulai dengan memahami kebutuhan dan preferensi klien. Tim kami kemudian akan mengembangkan ide dan solusi kreatif yang disesuaikan dengan keinginan klien, diikuti dengan perencanaan detail dan pelaksanaan proyek.'
        },
        {
            question:
                'Apa saja layanan yang ditawarkan UNION CREATIVE DESIGN dalam bidang promosi/advertising?',
            answer: 'Kami menawarkan layanan promosi baik outdoor seperti neon box, billboard, neon sign, dan indoor melalui media radio, televisi, media massa, serta pameran.'
        },
        {
            question:
                'Apakah UNION CREATIVE DESIGN juga menyediakan layanan instalasi listrik?',
            answer: 'Ya, kami menyediakan jasa instalasi listrik untuk kantor dan rumah, termasuk konsultasi terkait electrical.'
        },
        {
            question:
                'Bagaimana cara menghubungi UNION CREATIVE DESIGN untuk memulai proyek?',
            answer: 'Anda bisa menghubungi kontak person kami: Helik di +62 813 8704 S066, Irpan di +62 857 0951 a6!, atau Irwansyah di +62 811 885 8059. Kami akan siap membantu Anda untuk memulai proyek Anda.'
        }
    ]

    const freqFaq = [
        {
            question:
                'Bagaimana cara UNION CREATIVE DESIGN memastikan kualitas hasil kerja mereka?',
            answer: 'Kami memastikan kualitas melalui manajemen yang baik, SDM yang berkompeten, serta penggunaan teknologi terbaru dalam setiap proyek. Kami juga selalu berusaha untuk memenuhi standar industri yang berkualitas dan diakui.'
        },
        {
            question:
                'Apa saja jasa yang disediakan oleh UNION CREATIVE DESIGN dalam bidang furnitur?',
            answer: 'Kami menyediakan jasa pembuatan partisi, pelapon drop ceiling, booth, display, serta furnitur kantor dan rumah seperti kursi, sofa, meja, dan lemari. Kami juga menawarkan jasa tata letak dan desain interior.'
        },
        {
            question:
                'Apakah UNION CREATIVE DESIGN juga menyediakan bahan untuk proyek-proyek eksterior?',
            answer: 'Ya, kami adalah supplier bahan untuk interior, eksterior, promosi/advertising, mechanical, dan electrical.'
        },
        {
            question:
                'Bagaimana cara UNION CREATIVE DESIGN menangani proyek dengan deadline yang ketat?',
            answer: 'Dengan pengalaman dan SDM yang ahli, kami selalu mengutamakan efisiensi waktu dan biaya dalam setiap proyek. Kami menggunakan teknologi mutakhir untuk memastikan semua proyek selesai tepat waktu dan sesuai anggaran.'
        },
        {
            question:
                'Apakah UNION CREATIVE DESIGN hanya melayani perusahaan besar atau juga individu?',
            answer: 'Kami melayani berbagai klien, baik perusahaan besar, instansi, maupun individu. Kami siap memberikan layanan terbaik sesuai kebutuhan klien kami.'
        }
    ]

    return (
        <div>
            <PageHeader title='FAQ' subtitle='Frequently Asked Questions' />
            <div className='max-container'>
                <div className='grid grid-cols-2 max-lg:grid-cols-1 gap-10 my-20'>
                    <div className='w-full h-[500px] bg-zinc-400'></div>
                    <div className=''>
                        <div className='text-u-orange-500 font-semibold text-sm uppercase mb-1'>
                            Trending Question
                        </div>
                        <div className='text-3xl font-bold mb-1'>
                            QUESTION ANSWER TRENDING WEEKLY
                        </div>
                        <div className='text-sm text-zinc-500 text-justify mb-5'>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Dolorem, optio eligendi porro qui in enim
                            aperiam quas sequi veniam blanditiis debitis!
                            Inventore nam quos qui nemo officia, laborum
                            temporibus repellat.
                        </div>

                        {trendingFaq.map((faq, index) => (
                            <FaqAccordion key={index} faq={faq} />
                        ))}
                    </div>
                </div>
                <div className='grid grid-cols-2 max-lg:grid-cols-1 gap-10 my-20'>
                    <div className=''>
                        <div className='text-u-orange-500 font-semibold text-sm uppercase mb-1'>
                            Frequently Question
                        </div>
                        <div className='text-3xl font-bold mb-1'>
                            USUALLY ASKED QUESTION CLIENTS
                        </div>
                        <div className='text-sm text-zinc-500 text-justify mb-5'>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Dolorem, optio eligendi porro qui in enim
                            aperiam quas sequi veniam blanditiis debitis!
                            Inventore nam quos qui nemo officia, laborum
                            temporibus repellat.
                        </div>

                        {freqFaq.map((faq, index) => (
                            <FaqAccordion key={index} faq={faq} />
                        ))}
                    </div>
                    <div className='w-full h-[500px] bg-zinc-400'></div>
                </div>
            </div>
        </div>
    )
}

export default FaqPage
