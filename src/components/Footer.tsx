export default function Footer() {
    return (
        <footer className="bg-blue-50 mt-12">
            <div className="container mx-auto py-6 px-6 flex flex-wrap justify-between items-start">
                {/*Contact Information*/}
                <div className="w-full md:w-1/3 mb-6 md:mb-0">
                    <h3 className="text-lg font-semibold text-gray-800 mb-4">Контактная информация</h3>
                    <p className="text-gray-600">Руководитель: Ерастова Елена Васильевна</p>
                    <p className="text-gray-600">Телефон: <a href="tel:+7-905-86-40-555"
                                                             className="text-blue-600">+7-905-86-40-555</a></p>
                    <p className="text-gray-600">Email: <a href="mailto:eve24@mail.ru"
                                                           className="text-blue-600">eve24@mail.ru</a></p>
                </div>
                {/*Partners*/}
                <div className="w-full md:w-1/3 mb-6 md:mb-0">
                    <h3 className="text-lg font-semibold text-gray-800 mb-4">Наши партнёры</h3>
                    <ul className="text-gray-600">
                        <li className="mb-2"><a href="#" className="text-blue-600">Пермский Политех</a></li>
                        <li className="mb-2"><a href="#" className="text-blue-600">Просвещение ДОМ</a></li>
                        <li><a href="#" className="text-blue-600">Библиотека им. Пушкина</a></li>
                    </ul>
                </div>
                {/*Social Media*/}
                <div className="w-full md:w-1/3">
                    <h3 className="text-lg font-semibold text-gray-800 mb-4">Мы в социальных сетях</h3>
                    <div className="flex space-x-4 mb-4">
                        <a href="#" className="text-gray-600 hover:text-gray-800">ВКонтакте</a>
                        <a href="#" className="text-gray-600 hover:text-gray-800">YouTube</a>
                    </div>
                    <div className="flex space-x-4">
                        <img src="note.png" alt="Нотный знак" className="h-8 w-8"/>
                        <img src="partner-logo.png" alt="Логотип партнёра" className="h-8 w-8"/>
                    </div>
                </div>
            </div>
        </footer>
    );
}