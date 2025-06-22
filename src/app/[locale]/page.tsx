import {useTranslations} from "next-intl";
import Image from "next/image";
import LinkButton from "@/components/LinkButton";
import YoutubePreview from "@/components/YoutubePreview";

function renderAwardList(awards: string[]) {

    return (
        <ul className="list-['—'] pl-6">
            {awards.map((award, index) => (
                <li key={index}>
                    &nbsp;{award}
                </li>
            ))}
        </ul>
    );
}

function renderParagraphs(resource: string) {
    const paragraphs = resource.split("\n");

    return (
        <>
            {paragraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
            ))}
        </>
    );
}

export default function IndexPage() {
    const t = useTranslations('home');

    return (
        <main className="py-0">
            <header className="main-header px-0 my-0 text-center">
                <p className="h4 md:text-7xl">{t("title")}</p>
                <p className="h5 md:text-5xl">{t("subtitle")}</p>
            </header>
            <article className="text-center md:text-left lg:grid grid-cols-2">
                <picture className="lg:col-start-2">
                    <Image
                        src="/main_photo.png"
                        alt={t("title")}
                        width={897}
                        height={907}
                        className="mx-auto"
                    />
                </picture>
                <section className="lg:mt-8 lg:col-start-1 lg:row-start-1">
                    {renderParagraphs(t("choirDescription"))}
                    {renderParagraphs(t("choirAwards.title"))}
                    {
                        renderAwardList(t("choirAwards.items").split("||"))
                    }
                    <LinkButton className="my-4 md:my-14" text={t("buttonEvents")} href="/schedule"/>
                </section>
            </article>
            <article className="px-0 py-4 my-0 text-center md:text-left md:grid grid-cols-2">
                <header className="col-span-2 text-center">
                    <p className="h5 md:text-5xl">{t("directorTitle")}</p>
                    <p className="h5 md:text-5xl">{t("directorName")}</p>
                </header>
                <picture className="block mx-auto mt-8 col-start-1 row-span-3">
                    <Image
                        src="/elena_vasil_1.png"
                        width={499}
                        height={644}
                        alt={t("directorTitle")}
                        className="mx-auto"
                    />
                </picture>
                <section className="text-center md:text-left pt-4 px-4 col-start-2">
                    {renderParagraphs(t("directorDescription"))}
                </section>
            </article>
            <section className="mt-14">
                <YoutubePreview videoId="zFpVffVkvCc" title="Junge Stimmen - Cantate Domino"
                                className="my-4 max-w-3xl mx-auto"/>
                <LinkButton className="my-4 md:my-14" text={t("buttonVideo")} href="/video"/>
            </section>
            <section className="mt-6">
                <p className="py-4">{t("audioDescription")}</p>
                <LinkButton className="my-4 md:my-14" text={t("buttonAudio")} href="/audio"/>
            </section>
        </main>
    );
}
