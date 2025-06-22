//import { useTranslations } from "next-intl";
import { fetchYoutubePlaylistVideoIds } from '@/lib/youtubePlaylist';
import YoutubePreview from "@/components/YoutubePreview";

export default async function VideoPage() {
    //const t = useTranslations();
    const playlistId = 'PLmNS_4_I60wPMT0WMTTTnd9xlkd3JsSaY';
    const videosInfo = await fetchYoutubePlaylistVideoIds(playlistId);

    return (
        <>
            <main>
                <h2>Видеозаписи</h2>
                {
                    videosInfo.map((info, index) => (
                        <div key={index}>
                            <YoutubePreview videoId={info.videoId} title={info.title}
                                            className="my-4 max-w-3xl mx-auto"/>

                        </div>))
                }
            </main>
        </>
    );
}