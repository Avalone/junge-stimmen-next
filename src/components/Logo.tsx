"use client"
import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";

export default function Logo() {
  const t = useTranslations();

  return (
    <Link href="/">
      <Image src="/logo.svg" alt={t('mainName')} width="206" height="128"></Image>
    </Link>
  );
};
