import {useTranslations} from "next-intl";
import Image from "next/image";
import LinkButton from "@/components/LinkButton";

export default function IndexPage() {
    const t = useTranslations('home');

    return (
        <main className="pt-6 pb-6">
            <header className="main-header px-0 my-0 text-center md:text-left">
                <p className="h4 md:text-7xl">{t("title")}</p>
                <p className="h5 md:text-5xl">{t("subtitle")}</p>
            </header>
            <picture>
                <Image
                    src="/main_photo.png"
                    alt={t("title")}
                    width={897}
                    height={907}
                    className="mx-auto"
                />
            </picture>
            <article className="text-center md:text-left">{t("choirDescription")}</article>
            <div>
                <LinkButton text={t("buttonEvents")} href="/schedule"/>
            </div>
            <div>
                <div className="my-4">
                    <iframe src="https://www.youtube.com/embed/zFpVffVkvCc" width="300" height="200"
                            title="Junge Stimmen - Cantate Domino" frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin" allowFullScreen
                            className="block mx-auto"></iframe>
                </div>
                <article className="text-center md:text-left">{t("videoDescription")}</article>
                <LinkButton text={t("buttonVideo")} href="/video"/>
            </div>
            <div className="px-0 py-4 my-0 text-center md:text-left md:grid grid-cols-2">
                <div className="row-start-1">
                    <p className="h5 md:text-5xl col-start-1">{t("directorTitle")}</p>
                    <p className="h5 md:text-5xl col-start-1">{t("directorName")}</p>
                </div>
                <picture className="block mx-auto py-4 col-start-2 row-span-3">
                    <Image
                        src="/elena_vasil_1.png"
                        width={499}
                        height={644}
                        alt={t("directorTitle")}
                        className="mx-auto"
                    />
                </picture>
                <article className="text-center md:text-left pt-4 pr-4 col-start-1">{t("directorDescription")}</article>
            </div>
            <div className="py-4 text-center md:text-left md:grid grid-cols-2">
                <p className="col-start-1 row-start-2 py-4">{t("audioDescription")}</p>
                <LinkButton text={t("buttonAudio")} href="/audio" className="col-start-1 row-start-1"/>
                <picture className="hidden md:block mx-auto py-4 col-start-2 row-span-3">
                    <Image
                        src="/logo_background.svg"
                        width={499}
                        height={644}
                        alt={t("directorTitle")}
                        className="mx-auto"
                    />
                </picture>
            </div>
        </main>
    );
}
