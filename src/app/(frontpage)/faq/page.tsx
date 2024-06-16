import FaqAccordion from '@/components/atoms/FaqAccordion'
import PageHeader from '@/components/organism/PageHeader'
import { useTranslations } from 'next-intl'
import React from 'react'

const FaqPage = () => {
    const t = useTranslations('FAQ')

    const trendingFaq = [
        {
            question: {
                id: 'Apa yang membuat UNION CREATIVE DESIGN berbeda dari perusahaan lain di bidang yang sama?',
                en: 'What makes UNION CREATIVE DESIGN different from other companies in the same field?'
            },
            answer: {
                id: 'UNION CREATIVE DESIGN mengutamakan prinsip GOOD CORPORATE GOVERNANCE, integritas, kreativitas, dan pelayanan prima. Dengan SDM yang berkualitas dan teknologi mutakhir, kami selalu berusaha memberikan solusi terbaik untuk klien kami.',
                en: 'UNION CREATIVE DESIGN prioritizes principles of GOOD CORPORATE GOVERNANCE, integrity, creativity, and excellent service. With high-quality human resources and cutting-edge technology, we always strive to provide the best solutions for our clients.'
            }
        },
        {
            question: {
                id: 'Bagaimana proses konsultasi untuk proyek desain interior dilakukan?',
                en: 'How is the consultation process for interior design projects conducted?'
            },
            answer: {
                id: 'Proses konsultasi dimulai dengan memahami kebutuhan dan preferensi klien. Tim kami kemudian akan mengembangkan ide dan solusi kreatif yang disesuaikan dengan keinginan klien, diikuti dengan perencanaan detail dan pelaksanaan proyek.',
                en: 'The consultation process begins with understanding the client’s needs and preferences. Our team then develops ideas and creative solutions tailored to the client’s desires, followed by detailed planning and project execution.'
            }
        },
        {
            question: {
                id: 'Apa saja layanan yang ditawarkan UNION CREATIVE DESIGN dalam bidang promosi/advertising?',
                en: 'What services does UNION CREATIVE DESIGN offer in the field of promotion/advertising?'
            },
            answer: {
                id: 'Kami menawarkan layanan promosi baik outdoor seperti neon box, billboard, neon sign, dan indoor melalui media radio, televisi, media massa, serta pameran.',
                en: 'We offer promotion services both outdoor such as neon boxes, billboards, neon signs, and indoor through radio, television, mass media, and exhibitions.'
            }
        },
        {
            question: {
                id: 'Apakah UNION CREATIVE DESIGN juga menyediakan layanan instalasi listrik?',
                en: 'Does UNION CREATIVE DESIGN also provide electrical installation services?'
            },
            answer: {
                id: 'Ya, kami menyediakan jasa instalasi listrik untuk kantor dan rumah, termasuk konsultasi terkait electrical.',
                en: 'Yes, we provide electrical installation services for offices and homes, including electrical consultations.'
            }
        },
        {
            question: {
                id: 'Bagaimana cara menghubungi UNION CREATIVE DESIGN untuk memulai proyek?',
                en: 'How to contact UNION CREATIVE DESIGN to start a project?'
            },
            answer: {
                id: 'Anda bisa menghubungi kontak person kami: Helik di +62 813 8704 S066, Irpan di +62 857 0951 a6!, atau Irwansyah di +62 811 885 8059. Kami akan siap membantu Anda untuk memulai proyek Anda.',
                en: 'You can contact our contact persons: Helik at +62 813 8704 S066, Irpan at +62 857 0951 a6!, or Irwansyah at +62 811 885 8059. We will be ready to assist you in starting your project.'
            }
        }
    ]

    const freqFaq = [
        {
            question: {
                id: 'Bagaimana cara UNION CREATIVE DESIGN memastikan kualitas hasil kerja mereka?',
                en: 'How does UNION CREATIVE DESIGN ensure the quality of their work?'
            },
            answer: {
                id: 'Kami memastikan kualitas melalui manajemen yang baik, SDM yang berkompeten, serta penggunaan teknologi terbaru dalam setiap proyek. Kami juga selalu berusaha untuk memenuhi standar industri yang berkualitas dan diakui.',
                en: 'We ensure quality through good management, competent human resources, and the use of the latest technology in every project. We also always strive to meet industry standards that are high-quality and recognized.'
            }
        },
        {
            question: {
                id: 'Apa saja jasa yang disediakan oleh UNION CREATIVE DESIGN dalam bidang furnitur?',
                en: 'What services does UNION CREATIVE DESIGN provide in the field of furniture?'
            },
            answer: {
                id: 'Kami menyediakan jasa pembuatan partisi, pelapon drop ceiling, booth, display, serta furnitur kantor dan rumah seperti kursi, sofa, meja, dan lemari. Kami juga menawarkan jasa tata letak dan desain interior.',
                en: 'We provide partition making services, drop ceiling, booths, displays, as well as office and home furniture such as chairs, sofas, tables, and cabinets. We also offer layout and interior design services.'
            }
        },
        {
            question: {
                id: 'Apakah UNION CREATIVE DESIGN juga menyediakan bahan untuk proyek-proyek eksterior?',
                en: 'Does UNION CREATIVE DESIGN also supply materials for exterior projects?'
            },
            answer: {
                id: 'Ya, kami adalah supplier bahan untuk interior, eksterior, promosi/advertising, mechanical, dan electrical.',
                en: 'Yes, we are a supplier of materials for interiors, exteriors, promotion/advertising, mechanical, and electrical projects.'
            }
        },
        {
            question: {
                id: 'Bagaimana cara UNION CREATIVE DESIGN menangani proyek dengan deadline yang ketat?',
                en: 'How does UNION CREATIVE DESIGN handle projects with tight deadlines?'
            },
            answer: {
                id: 'Dengan pengalaman dan SDM yang ahli, kami selalu mengutamakan efisiensi waktu dan biaya dalam setiap proyek. Kami menggunakan teknologi mutakhir untuk memastikan semua proyek selesai tepat waktu dan sesuai anggaran.',
                en: 'With experience and expert human resources, we always prioritize time and cost efficiency in every project. We use cutting-edge technology to ensure all projects are completed on time and within budget.'
            }
        },
        {
            question: {
                id: 'Apakah UNION CREATIVE DESIGN hanya melayani perusahaan besar atau juga individu?',
                en: 'Does UNION CREATIVE DESIGN only serve large companies or also individuals?'
            },
            answer: {
                id: 'Kami melayani berbagai klien, baik perusahaan besar, instansi, maupun individu. Kami siap memberikan layanan terbaik sesuai kebutuhan klien kami.',
                en: 'We serve various clients, both large companies, institutions, and individuals. We are ready to provide the best services according to our clients’ needs.'
            }
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
                            {t('trending-questions')}
                        </div>
                        <div className='text-3xl font-bold mb-1'>
                            {t('trending-title')}
                        </div>
                        <div className='text-sm text-zinc-500 text-justify mb-5'>
                            {t('trending-desc')}
                        </div>

                        {trendingFaq.map((faq, index) => (
                            <FaqAccordion key={index} faq={faq} />
                        ))}
                    </div>
                </div>
                <div className='grid grid-cols-2 max-lg:grid-cols-1 gap-10 my-20'>
                    <div className=''>
                        <div className='text-u-orange-500 font-semibold text-sm uppercase mb-1'>
                            {t('freq-questions')}
                        </div>
                        <div className='text-3xl font-bold mb-1'>
                            {t('freq-title')}
                        </div>
                        <div className='text-sm text-zinc-500 text-justify mb-5'>
                            {t('freq-desc')}
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
