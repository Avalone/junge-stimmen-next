'use client'

import {useState} from 'react'

type YoutubePreviewProps = {
    videoId: string
    title?: string
    className?: string
}

export default function YoutubePreview({
                                           videoId,
                                           title = 'YouTube video',
                                           className = '',
                                       }: YoutubePreviewProps) {
    const [isPlaying, setIsPlaying] = useState(false)
    const thumbnail = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`

    return (
        <div
            className={`relative aspect-video w-full overflow-hidden rounded-xl shadow-lg cursor-pointer ${className}`}
            onClick={() => setIsPlaying(true)}
        >
            {isPlaying ? (
                <iframe
                    className="absolute inset-0 w-full h-full"
                    src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
                    title={title}
                    allow="autoplay; encrypted-media; fullscreen"
                    allowFullScreen
                />
            ) : (
                <>
                    <img
                        src={thumbnail}
                        alt={`${title} thumbnail`}
                        className="absolute inset-0 w-full h-full object-cover transition duration-300 ease-in-out hover:scale-105"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div
                            className="bg-white/80 backdrop-blur-md p-4 rounded-full shadow-md transition hover:scale-110">
                            <svg
                                className="w-8 h-8 text-black"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path d="M8 5v14l11-7z"/>
                            </svg>
                        </div>
                    </div>
                </>
            )}
        </div>
    )
}