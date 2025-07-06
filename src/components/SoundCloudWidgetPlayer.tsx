'use client';

import { useEffect, useRef, useState } from 'react';

declare global {
    interface Window {
        SC: {
            Widget: (iframe: HTMLIFrameElement) => SoundCloudWidget;
        };
    }
}

interface SoundCloudWidget {
    load: (
        url: string,
        options?: {
            auto_play?: boolean;
            show_comments?: boolean;
            show_user?: boolean;
            show_reposts?: boolean;
            visual?: boolean;
        }
    ) => void;
    play: () => void;
    pause: () => void;
    bind: (event: string, callback: () => void) => void;
}

const PLAYLIST_URL = 'https://soundcloud.com/junge-stimmen/sets/this-is-jungestimmen';

export default function SoundCloudWidgetPlayer() {
    const iframeRef = useRef<HTMLIFrameElement | null>(null);
    const [widget, setWidget] = useState<SoundCloudWidget | null>(null);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        const scriptId = 'sc-widget-api';
        if (!document.getElementById(scriptId)) {
            const script = document.createElement('script');
            script.id = scriptId;
            script.src = 'https://w.soundcloud.com/player/api.js';
            script.onload = () => {
                if (iframeRef.current && window.SC) {
                    const w = window.SC.Widget(iframeRef.current);
                    setWidget(w);
                }
            };
            document.body.appendChild(script);
        } else {
            if (iframeRef.current && window.SC) {
                const w = window.SC.Widget(iframeRef.current);
                setWidget(w);
            }
        }
    }, []);

    const handleLoadPlayer = () => {
        if (widget) {
            widget.load(PLAYLIST_URL, {
                auto_play: true,
                show_comments: true,
                show_user: true,
                show_reposts: false,
                visual: true,
            });
            setLoaded(true);
        }
    };

    return (
        <div className="w-full max-w-3xl mx-auto space-y-4">
            {!loaded && (
                <button
                    onClick={handleLoadPlayer}
                    className="bg-orange-500 text-white px-6 py-3 rounded-lg shadow hover:bg-orange-600 transition"
                >
                    ▶️ Показать плеер
                </button>
            )}
            <div className={`${loaded ? 'block' : 'hidden'}`}>
                <iframe
                    ref={iframeRef}
                    id="sc-player"
                    title="Junge Stimmen Playlist"
                    width="100%"
                    height="450"
                    allow="autoplay"
                    scrolling="no"
                    frameBorder="no"
                    className="rounded-xl shadow-lg"
                    src="https://w.soundcloud.com/player/?url="
                />
            </div>
        </div>
    );
}
