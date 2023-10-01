import Logo from "@/components/Logo";
import useScroll from "@/lib/hooks/use-scroll";
import { useTranslations } from "next-intl";
import Link from "next/link";
import LocaleSwitcher from "@/components/LocaleSwitcher";
import Image from "next/image";

export default function NavBar() {
  const scrolled = useScroll(50);
  const t = useTranslations("menu");

  return (
    <header
      className={`w-full flex justify-center items-center ${
        scrolled
          ? "border-b border-gray-200 bg-white/50 backdrop-blur-xl"
          : "bg-white/0"
      } z-30 transition-all`}
    >
      <Logo />
      <nav className="w-full">
        <ul className="header-nav text-center leading-relaxed flex justify-start">
          <li>
            <Link href="/">
              <p>{t("home")}</p>
            </Link>
          </li>
          <li>
            <Link href="/schedule">
              <p>{t("schedule")}</p>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <p>{t("about")}</p>
            </Link>
          </li>
          <li>
            <Link href="/video">
              <p>{t("video")}</p>
            </Link>
          </li>
          <li>
            <Link href="/audio">
              <p>{t("audio")}</p>
            </Link>
          </li>
          <li>
            <Link href="/gallery">
              <p>{t("gallery")}</p>
            </Link>
          </li>
          <li>
            <Link href="/contactUs">
              <p>{t("contactUs")}</p>
            </Link>
          </li>
        </ul>
      </nav>
      <div className="pr-7">
        <LocaleSwitcher />
      </div>
      <div className="flex">
        <Image src="/videosquare.svg" alt="youtube" width="24" height="24"/>
        <Image src="/logo_vk.svg" alt="youtube" width="24" height="24"/>
      </div>
    </header>
  );
}
