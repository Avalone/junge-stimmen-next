import {useTranslations} from "next-intl";
import SoundCloudPlayer from "@/components/SoundCloudPlayer";

const trackIds =
    [
        "2085501150",
        "2085501006",
        "2085500883",
        "2085500727",
        "2085500592",
        "2085500499",
        "2085500385",
        "2085500115",
        "2085499923",
        "2085499521",
        "2085498852",
        "2085497766",
        "2085497688",
        "2085497439",
        "2085496446",
        "2085496185",
        "2085495984",
        "2085495846",
        "2085494484",
        "2085494010",
        "2085493308",
        "2085492756",
        "2085487095",
        "2085483756"
    ]


export default function SchedulePage() {
    const t = useTranslations('audio');

    return (
        <>
            <main>
                <h3 className="mb-5">{t("title")}</h3>
                {/*<div className="mt-8 grid gap-6*/}
                {/*      grid-cols-1*/}
                {/*      sm:grid-cols-2*/}
                {/*      md:grid-cols-2*/}
                {/*      lg:grid-cols-3">*/}
                    {
                        trackIds.map((id, index) => (
                            <SoundCloudPlayer key={index} trackId={id} className="mt-5"/>
                        ))
                    }
                {/*</div>*/}
            </main>
        </>
    );
}