'use client'

import {useEffect, useRef, useState} from 'react';
import {useTranslations} from "next-intl";

// import SoundCloudPlayer from "@/components/SoundCloudPlayer";

// const trackIds =
//     [
//         "2085501150",
//         "2085501006",
//         "2085500883",
//         "2085500727",
//         "2085500592",
//         "2085500499",
//         "2085500385",
//         "2085500115",
//         "2085499923",
//         "2085499521",
//         "2085498852",
//         "2085497766",
//         "2085497688",
//         "2085497439",
//         "2085496446",
//         "2085496185",
//         "2085495984",
//         "2085495846",
//         "2085494484",
//         "2085494010",
//         "2085493308",
//         "2085492756",
//         "2085487095",
//         "2085483756"
//     ]

const DEFAULT_PLAYER_HEIGHT = 550;
const MIN_PLAYER_HEIGHT = 350;
const PLAYER_HEIGHT_RATIO = 0.7;


export default function SchedulePage() {
    const t = useTranslations('audio');
    const iframeRef = useRef<HTMLIFrameElement | null>(null);
    const [iframeHeight, setIframeHeight] = useState(DEFAULT_PLAYER_HEIGHT);

    useEffect(() => {
        const updateIframeHeight = () => {
            const screenHeight = window.innerHeight;
            const newHeight = Math.max(Math.round(screenHeight * PLAYER_HEIGHT_RATIO), MIN_PLAYER_HEIGHT);
            setIframeHeight(newHeight);
        };

        updateIframeHeight();
        window.addEventListener('resize', updateIframeHeight);
    }, []);

    return (
        <>
            <main>
                <h3 className="mb-5">{t("title")}</h3>

                <iframe ref={iframeRef} height={iframeHeight} width="100%" scrolling="no" frameBorder="no"
                        src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/2046845658&color=%23aec0ea&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>

            </main>
        </>
    );
}