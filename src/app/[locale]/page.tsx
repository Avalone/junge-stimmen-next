"use client";

import { useTranslations } from "next-intl";
import PageLayout from "@/components/PageLayout";

export default function IndexPage() {
  const t = useTranslations();

  return (
    <PageLayout title={t("mainName")}>
      <p className="max-w-[590px]">
        {t.rich("subtitle", {
          code: (chunks) => (
            <code className="font-mono text-white">{chunks}</code>
          ),
        })}
      </p>
    </PageLayout>
  );
}
