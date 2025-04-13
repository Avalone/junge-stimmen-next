import Image from "next/image";
import Link from "next/link";
import {useTranslations} from "next-intl";

interface LogoProps {
    width?: number;
    height?: number;
    className?: string;
}

export default function Logo(props: LogoProps) {
    const t = useTranslations('common');
    const width = props.width ?? 142;
    const height = props.height ?? 88;

    return (
        <Link href="/">
            <Image src="/logo.svg" alt={t('mainName')} width={width} height={height} className={props.className}></Image>
        </Link>
    );
};
