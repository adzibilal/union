import Image from 'next/image'
import { useState, useEffect } from 'react'
import { useDropzone } from 'react-dropzone'

interface DropzoneImageProps {
    onFileDrop?: (file: File) => void
    initialImage?: string | null
}

const DropzoneImage: React.FC<DropzoneImageProps> = props => {
    const [file, setFile] = useState<File | null>(null)
    const [imageSrc, setImageSrc] = useState<string | null>(
        props.initialImage || null
    )
    const [isDragging, setIsDragging] = useState(false)

    const { getRootProps, getInputProps } = useDropzone({
        accept: {
            'image/png': ['.png'],
            'image/jpg': ['.jpg'],
            'image/jpeg': ['.jpeg']
        },
        onDrop: acceptedFiles => {
            const uploadedFile = acceptedFiles[0]
            setFile(uploadedFile)
            setImageSrc(URL.createObjectURL(uploadedFile))
            if (props.onFileDrop) {
                props.onFileDrop(uploadedFile)
            }
        },
        onDragEnter: () => {
            setIsDragging(true)
        },
        onDragLeave: () => {
            setIsDragging(false)
        },
        onDropAccepted: () => {
            setIsDragging(false)
        },
        onDropRejected: () => {
            setIsDragging(false)
        }
    })

    useEffect(() => {
        // Cleanup the object URL to avoid memory leaks
        return () => {
            if (imageSrc && file) {
                URL.revokeObjectURL(imageSrc)
            }
        }
    }, [imageSrc, file])

    return (
        <div
            {...getRootProps()}
            className={`bg-zinc-100 relative border-2 aspect-video border-dashed rounded-lg flex items-center justify-center cursor-pointer overflow-hidden ${
                isDragging ? 'bg-blue-200 border-blue-500' : ''
            }`}>
            <input {...getInputProps()} />
            {imageSrc ? (
                <Image fill src={imageSrc} alt='Uploaded image' className='object-cover' />
            ) : (
                <div className='text-zinc-500 p-5 text-center flex flex-col items-center justify-center'>
                    <div className='mb-3'>
                        <svg
                            width='48'
                            height='48'
                            viewBox='0 0 48 48'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'>
                            <path
                                d='M4 24C4 33.4281 4 38.1421 6.92893 41.0711C9.85786 44 14.5719 44 24 44C33.4281 44 38.1421 44 41.0711 41.0711C44 38.1421 44 33.4281 44 24C44 14.5719 44 9.85786 41.0711 6.92893C38.1421 4 33.4281 4 24 4'
                                stroke='#6D6D6D'
                                stroke-width='3'
                                stroke-linecap='round'
                            />
                            <path
                                d='M44 25.0003L40.4968 21.935C38.6743 20.3403 35.9274 20.4318 34.215 22.1442L25.6356 30.7236C24.2611 32.0981 22.0975 32.2855 20.5072 31.1679L19.9108 30.7487C17.6223 29.1404 14.5261 29.3268 12.4471 31.1979L6 37.0003'
                                stroke='#6D6D6D'
                                stroke-width='3'
                                stroke-linecap='round'
                            />
                            <path
                                d='M18 11H11M11 11H4M11 11V18M11 11V4'
                                stroke='#6D6D6D'
                                stroke-width='3'
                                stroke-linecap='round'
                            />
                        </svg>
                    </div>
                    <p className='text-lg font-bold'>Upload thumbnail</p>
                    <div className='text-sm'>
                        <p>Mendukung File: png, jpg, jpeg (1280x720 px)</p>
                        <p>Maks file: 5mb</p>
                    </div>
                </div>
            )}

            {imageSrc && (
                <div className='bg-zinc-950 text-white px-3 py-2 rounded-md absolute bottom-3 left-[50%] translate-x-[-50%] z-10 flex items-center gap-2'>
                    <svg
                        width='20'
                        height='20'
                        viewBox='0 0 20 20'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'>
                        <path
                            d='M3.06659 9.44444H2.31659H3.06659ZM3.06659 10.8333L2.53835 11.3657C2.83076 11.6559 3.30242 11.6559 3.59483 11.3657L3.06659 10.8333ZM4.99468 9.97685C5.28872 9.68511 5.29058 9.21024 4.99884 8.9162C4.7071 8.62216 4.23223 8.6203 3.93819 8.91204L4.99468 9.97685ZM2.19499 8.91204C1.90095 8.6203 1.42608 8.62216 1.13434 8.9162C0.842598 9.21024 0.844464 9.68511 1.13851 9.97685L2.19499 8.91204ZM15.4066 6.22612C15.6235 6.57899 16.0854 6.68918 16.4383 6.47225C16.7911 6.25532 16.9013 5.79341 16.6844 5.44054L15.4066 6.22612ZM10.0658 1.75C5.7916 1.75 2.31659 5.18938 2.31659 9.44444H3.81659C3.81659 6.02889 6.60889 3.25 10.0658 3.25V1.75ZM2.31659 9.44444L2.31659 10.8333H3.81659L3.81659 9.44444L2.31659 9.44444ZM3.59483 11.3657L4.99468 9.97685L3.93819 8.91204L2.53835 10.3009L3.59483 11.3657ZM3.59483 10.3009L2.19499 8.91204L1.13851 9.97685L2.53835 11.3657L3.59483 10.3009ZM16.6844 5.44054C15.3238 3.22738 12.8677 1.75 10.0658 1.75V3.25C12.3288 3.25 14.3095 4.44155 15.4066 6.22612L16.6844 5.44054Z'
                            fill='#F6F6F6'
                        />
                        <path
                            d='M16.9282 9.16699L17.4554 8.63358C17.1632 8.3448 16.6931 8.3448 16.4009 8.63358L16.9282 9.16699ZM14.9957 10.0225C14.7011 10.3136 14.6984 10.7885 14.9896 11.0831C15.2807 11.3777 15.7556 11.3805 16.0502 11.0893L14.9957 10.0225ZM17.8061 11.0893C18.1007 11.3805 18.5756 11.3777 18.8668 11.0831C19.158 10.7885 19.1552 10.3136 18.8606 10.0225L17.8061 11.0893ZM4.53791 13.7731C4.32037 13.4206 3.85827 13.3112 3.50578 13.5287C3.15329 13.7463 3.04388 14.2084 3.26141 14.5609L4.53791 13.7731ZM9.90219 18.2503C14.1885 18.2503 17.6782 14.8136 17.6782 10.5559H16.1782C16.1782 13.9687 13.3766 16.7503 9.90219 16.7503V18.2503ZM17.6782 10.5559V9.16699H16.1782V10.5559H17.6782ZM16.4009 8.63358L14.9957 10.0225L16.0502 11.0893L17.4554 9.70041L16.4009 8.63358ZM16.4009 9.70041L17.8061 11.0893L18.8606 10.0225L17.4554 8.63358L16.4009 9.70041ZM3.26141 14.5609C4.62731 16.7742 7.09193 18.2503 9.90219 18.2503V16.7503C7.62813 16.7503 5.6391 15.5575 4.53791 13.7731L3.26141 14.5609Z'
                            fill='#F6F6F6'
                        />
                    </svg>
                    Ubah Gambar
                </div>
            )}
        </div>
    )
}

export default DropzoneImage
