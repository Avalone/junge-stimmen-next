'use client'
import Logo from "@/components/Logo";
import {useTranslations} from "next-intl";
import Link from "next/link";
import LocaleSwitcher from "@/components/LocaleSwitcher";
import Image from "next/image";
import React, {useState} from "react";

export default function NavBar() {
    const t = useTranslations('common');
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <header>
            <div className="w-full flex items-center bg-white/0 z-30 transition-all">
                <div className="shrink-0">
                    <Logo className="mr-4"/>
                </div>
                <nav className="w-full hidden lg:block whitespace-nowrap">
                    <ul className="horizontal-menu text-center leading-relaxed flex justify-start">
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
                    </ul>
                </nav>
                <div className="flex w-full justify-end items-center">
                    <button className="lg:hidden shrink-0" onClick={() => setIsOpen(!isOpen)}>
                        <Image src="/hamburger.svg" alt="menu" width={36} height={36}/>
                    </button>
                    <div className="px-2">
                        <LocaleSwitcher/>
                    </div>
                    <div className="flex shrink-0">
                        <Image src="/videosquare.svg" alt="youtube" width={24} height={24}/>
                        <Image src="/logo_vk.svg" alt="vk" width={24} height={24}/>
                    </div>
                </div>
            </div>
            {isOpen && (
                <nav className="vertical-menu lg:hidden block flex-wrap w-full mt-4">
                    <ul className="flex flex-col items-center p-4 gap-2">
                        <li><Link href="/" onClick={toggleMenu}>{t("menu.home")}</Link></li>
                        <li><Link href="/schedule" onClick={toggleMenu}>{t("menu.schedule")}</Link></li>
                        <li><Link href="/about" onClick={toggleMenu}>{t("menu.about")}</Link></li>
                        <li><Link href="/video" onClick={toggleMenu}>{t("menu.video")}</Link></li>
                        <li><Link href="/audio" onClick={toggleMenu}>{t("menu.audio")}</Link></li>
                        <li><Link href="/gallery" onClick={toggleMenu}>{t("menu.gallery")}</Link></li>
                    </ul>
                </nav>
            )}
        </header>
    );
}
