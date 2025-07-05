interface SoundCloudPlayerProps {
    trackId: string;
    className?: string;
}

export default function SoundCloudPlayer(props: SoundCloudPlayerProps) {
    const uri = `https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/${encodeURIComponent(props.trackId)}&color=%23afc2eb&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true`;
    const className = [props.className, "space-y-8"].join(' ');

    return (
        <div className={className}>
            <iframe width="100%" height="166" scrolling="no" frameBorder="no" allow="autoplay"
                    src={uri}></iframe>
        </div>
    );
};