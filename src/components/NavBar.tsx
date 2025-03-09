import Logo from "@/components/Logo";
import { useTranslations } from "next-intl";
import Link from "next/link";
import LocaleSwitcher from "@/components/LocaleSwitcher";
import Image from "next/image";

export default function NavBar() {
  const t = useTranslations('common');

  return (
    <header
      className={`w-full flex justify-center items-center bg-white/0 z-30 transition-all`}
    >
      <Logo />
      <nav className="w-full">
        <ul className="header-nav text-center leading-relaxed flex justify-start">
          <li>
            <Link href="/">
              <p>{t("menu.home")}</p>
            </Link>
          </li>
          <li>
            <Link href="/schedule">
              <p>{t("menu.schedule")}</p>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <p>{t("menu.about")}</p>
            </Link>
          </li>
          <li>
            <Link href="/video">
              <p>{t("menu.video")}</p>
            </Link>
          </li>
          <li>
            <Link href="/audio">
              <p>{t("menu.audio")}</p>
            </Link>
          </li>
          <li>
            <Link href="/gallery">
              <p>{t("menu.gallery")}</p>
            </Link>
          </li>
          <li>
            <Link href="/contactUs">
              <p>{t("menu.contactUs")}</p>
            </Link>
          </li>
        </ul>
      </nav>
      <div className="pr-7">
        <LocaleSwitcher />
      </div>
      <div className="flex">
        <Image src="/videosquare.svg" alt="youtube" width={24} height={24} />
        <Image src="/logo_vk.svg" alt="vk" width={24} height={24} />
      </div>
    </header>
  );
}
