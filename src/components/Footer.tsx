import Logo from "@/components/Logo";
import Image from "next/image";
import {useTranslations} from "next-intl";

export default function Footer() {
    const t = useTranslations('common.footer');
    const mailto = ["mailto:", t('contacts.email')].join("");

    return (
        <footer className="bg-[url('/footer-back.svg')] bg-contain bg-no-repeat bg-right-bottom py-6 px-6 mt-12 w-full">
            <div className="w-full flex flex-col sm:flex-row flex-nowrap justify-between items-start text-center">
                {/*Logo*/}
                <div className="hidden md:block md:w-1/4">
                    <Logo width={142} height={88} />
                </div>
                {/*Contact Information*/}
                <section className="w-full md:w-1/4">
                    <div className="mb-4">
                        {t("contacts.title")}
                    </div>
                    <div>
                        <div>{t("contacts.position")}</div>
                        <div>{t("contacts.name")}</div>
                    </div>
                    <div className="flex items-center justify-center gap-2 text-gray-600">
                        <Image src="/pencil-square.svg" alt="Email" width={24} height={24} />
                        <a href={mailto} className="text-blue-600">{t("contacts.email")}</a>
                    </div>
                </section>
                {/*Partners*/}
                <div className="hidden md:block md:w-1/4">
                    <p className="mb-4">{t("partners.title")}</p>
                    <ul>
                        <li className="mb-2"><a href="#" className="text-blue-600">{t("partners.pstu")}</a></li>
                        <li className="mb-2"><a href="#" className="text-blue-600">{t("partners.dom")}</a></li>
                        <li><a href="#">{t("partners.library")}</a></li>
                    </ul>
                </div>
                {/*Social Media*/}
                <div className="w-full md:w-1/4 mt-4 sm:mt-0">
                    <p className="mb-4">{t("social.title")}</p>
                    <div className="mb-4">
                        <a href="#" className="flex items-center justify-center space-x-8">
                            <Image src="/logo_vk.svg" alt="vk" width={24} height={24} />
                            <p className="w-20">{t("social.vk")}</p>
                        </a>
                        <a href="#" className="flex items-center justify-center space-x-8">
                            <Image src="/videosquare.svg" alt="youtube" width={24} height={24} />
                            <p className="w-20">{t("social.youtube")}</p>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}