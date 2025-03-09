import Image from "next/image";
import Link from "next/link";
import {useTranslations} from "next-intl";

interface LogoProps {
    width?: number;
    height?: number;
}

export default function Logo(props: LogoProps) {
    const t = useTranslations('common');
    const width = props.width ?? 206;
    const height = props.height ?? 128;

    return (
        <Link href="/">
            <Image src="/logo.svg" alt={t('mainName')} width={width} height={height}></Image>
        </Link>
    );
};
