import {useTranslations} from "next-intl";
import Image from "next/image";

export default function IndexPage() {
    const t = useTranslations('home');

    return (
        <main className="pt-6 pb-6">
            <header className="main-header container px-0 my-0 text-center md:text-left">
                <p className="h4 md:text-7xl">{t("title")}</p>
                <p className="h5 md:text-5xl">{t("subtitle")}</p>
            </header>
            <div className="container">
                {/*className="bg-cyan-50 rounded-[55px] m-5 p-5 text-center"*/}
                {/*<h5 className="">25.12.2022</h5>*/}
                {/*<h5 className="mt-4">{t("announce-text")}</h5>*/}
                <button
                    className="block m-auto md:mx-0 mt-4 p-4 bg-cyan-400 bg-opacity-70 rounded-3xl items-center gap-2.5">
                    Ближайшие мероприятия
                </button>
            </div>
            <picture>
                <Image
                    src="/main_photo.png"
                    alt={t("title")}
                    width={897}
                    height={907}
                />
            </picture>
            <div>
                <article className="text-center">{t("choirDescription")}</article>
                <div>
                    <iframe src="https://www.youtube.com/embed/zFpVffVkvCc" width="300" height="200"
                            title="Junge Stimmen - Cantate Domino" frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                </div>
            </div>
            <div>
                <h2>{t("directorTitle")}</h2>
                <article>{t("directorDescription")}</article>
            </div>
            <picture>
                <Image
                    src="/elena_vasil_1.png"
                    width={499}
                    height={644}
                    alt={t("directorTitle")}
                />
            </picture>
            <div>
                <p>{t("audioDescription")}</p>
            </div>
        </main>
    );
}
