import React from 'react'

interface ModalEmbedYoutubeProps {
    isOpen: boolean
    onClose: () => void
    onYoutubeEmbeded: (url: string) => void
}
const ModalEmbedYoutube: React.FC<ModalEmbedYoutubeProps> = ({
    isOpen,
    onClose,
    onYoutubeEmbeded
}) => {
    const [youtubeUrl, setYoutubeUrl] = React.useState<string | null>(null)

    const handleEmbed = () => {
        if (!youtubeUrl) return
        onYoutubeEmbeded(youtubeUrl)
        setYoutubeUrl(null)
        onClose()
    }
    return (
        <div className=''>
            {isOpen && (
                <div className='fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50'>
                    <div className='bg-white p-5 rounded-lg w-96'>
                        <h1 className='text-xl font-bold'>
                            Embed Youtube Video
                        </h1>
                        <div className='mt-5'>
                            <input
                                type='text'
                                placeholder='Paste Youtube URL'
                                className='w-full border rounded-md p-2'
                                onChange={e => setYoutubeUrl(e.target.value)}
                            />
                        </div>
                        <div className='flex justify-end gap-3 items-center mt-5'>
                            <button
                                type='button'
                                onClick={onClose}
                                className='bg-zinc-100 hover:bg-zinc-200 text-zinc-500 font-semibold text-sm py-2 px-4 rounded'>
                                Close
                            </button>
                            <button
                                type='button'
                                onClick={handleEmbed}
                                disabled={!youtubeUrl}
                                className='bg-blue-500 hover:bg-blue-700 text-white font-semibold text-sm py-2 px-4 rounded disabled:opacity-50 disabled:cursor-not-allowed'>
                                Embed Video
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default ModalEmbedYoutube
