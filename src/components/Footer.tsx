import Logo from "@/components/Logo";
import Image from "next/image";

export default function Footer() {
    return (
        <footer className="bg-blue-50 mt-12 w-full">
            <div className="w-full py-6 px-6 flex flex-col sm:flex-row flex-nowrap justify-between items-start">
                {/*Logo*/}
                <div className="hidden md:block md:w-1/4">
                    <Logo width={142} height={88} />
                </div>
                {/*Contact Information*/}
                <div className="w-full md:w-1/4">
                    <p className="mb-4">Контактная информация</p>
                    <p className="text-gray-600">Руководитель: Ерастова&nbsp;Елена&nbsp;Васильевна</p>
                    {/*<p className="text-gray-600">Телефон: <a href="tel:+7-905-86-40-555" className="text-blue-600">+7-905-86-40-555</a></p>*/}
                    <p className="text-gray-600">Email: <a href="mailto:eve24@mail.ru"
                                                           className="text-blue-600">eve24@mail.ru</a></p>
                </div>
                {/*Partners*/}
                <div className="hidden md:block md:w-1/4">
                    <p className="mb-4">Наши партнёры</p>
                    <ul className="text-gray-600">
                        <li className="mb-2"><a href="#" className="text-blue-600">Пермский Политех</a></li>
                        <li className="mb-2"><a href="#" className="text-blue-600">Просвещение ДОМ</a></li>
                        <li><a href="#" className="text-blue-600">Библиотека им. Пушкина</a></li>
                    </ul>
                </div>
                {/*Social Media*/}
                <div className="w-full md:w-1/4 mt-4 sm:mt-0">
                    <p className="mb-4">Мы в социальных сетях</p>
                    <div className="mb-4">
                        <a href="#" className="text-gray-600 hover:text-gray-800 flex items-start justify-start space-x-10">
                            <Image src="/logo_vk.svg" alt="vk" width={24} height={24} />
                            <span>ВКонтакте</span>
                        </a>
                        <a href="#" className="text-gray-600 hover:text-gray-800 flex items-start justify-start space-x-10">
                            <Image src="/videosquare.svg" alt="youtube" width={24} height={24} />
                            <span>YouTube</span>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}