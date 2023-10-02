"use client"
import { useTranslations } from "next-intl";
import { ReactNode } from "react";
import NavBar from "./NavBar";

type Props = {
  children?: ReactNode;
};

export default function PageLayout({ children }: Props) {
  const t = useTranslations();

  return (
    <>
      <NavBar />
      {children}
      <footer>
      </footer>
    </>
  );
}
