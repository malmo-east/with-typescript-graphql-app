import Link from "next/link";
import useTranslation from "next-translate/useTranslation";

export default function About() {
    const { t } = useTranslation();
    return (
        <div>
            Welcome to the about page. Go to the{" "}
            <Link href="/" locale="en">
                <a>{t("common:title")}</a>
            </Link>{" "}
            page.
        </div>
    );
}
