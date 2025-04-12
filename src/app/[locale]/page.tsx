import { useTranslations } from "next-intl";
import Image from "next/image";

export default function IndexPage() {
  const t = useTranslations('home');

  return (
    <main className="pt-6 pb-6 grid grid-cols-2 grid-rows-4 gap-2 hidden">
      <div>
        <header className="main-header">
          <h1>{t("title")}</h1>
          <h2>{t("subtitle")}</h2>
        </header>

        <div className="announce-badge bg-cyan-50 rounded-[55px] m-5 p-5 text-center">
          <h1 className="">25.12.2022</h1>
          <h2 className="mt-4">{t("announce-text")}</h2>
          <button className="mt-4 p-4 bg-cyan-400 bg-opacity-70 rounded-3xl items-center gap-2.5 text-3xl">
            Смотреть подробнее
          </button>
        </div>
      </div>
      <picture>
        <Image
          src="/main_photo.png"
          alt={t("title")}
          width={897}
          height={907}
        />
      </picture>

      <article>{t("choirDescription")}</article>
      <div>
        <Image
          src="/video_mock.png"
          className="rounded-[20px]"
          alt={t("title")}
          width={623}
          height={507}
        />
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
