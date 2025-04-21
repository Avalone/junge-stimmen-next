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
                />
            </picture>
            <article className="text-center">{t("choirDescription")}</article>
            <div>
                <LinkButton text={t("buttonEvents")} href="/schedule"/>
            </div>
            <div className="px-0 py-4 my-0 text-center md:text-left">
                <p className="h5 md:text-5xl">{t("directorTitle")}</p>
                <p className="h5 md:text-5xl">{t("directorName")}</p>
                <picture className="block py-4">
                    <Image
                        src="/elena_vasil_1.png"
                        width={499}
                        height={644}
                        alt={t("directorTitle")}
                    />
                </picture>
                <article className="text-center">{t("directorDescription")}</article>
            </div>
            <div>
                <div className="my-4">
                    <iframe src="https://www.youtube.com/embed/zFpVffVkvCc" width="300" height="200"
                            title="Junge Stimmen - Cantate Domino" frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin" allowFullScreen
                            className="block mx-auto"></iframe>
                </div>
                <article className="text-center">{t("videoDescription")}</article>
                <LinkButton text={t("buttonVideo")} href="/video"/>
            </div>
            <div className="py-4 text-center">
                <p>{t("audioDescription")}</p>
                <LinkButton text={t("buttonAudio")} href="/audio"/>
            </div>
        </main>
    );
}
