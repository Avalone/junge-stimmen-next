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
                <div className="mt-8 grid gap-6
                      grid-cols-1
                      sm:grid-cols-2
                      md:grid-cols-2
                      lg:grid-cols-3">
                    {videosInfo.map((info, index)=> (
                        <article key={index}
                                 className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                            <YoutubePreview videoId={info.videoId} className="w-full aspect-video object-cover"/>
                            <div className="p-4">
                                {info.title}
                            </div>
                        </article>
                    ))}
                </div>
            </main>
        </>
    );
}