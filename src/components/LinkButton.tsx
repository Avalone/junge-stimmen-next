'use client'
import styles from './LinkButton.module.css';
import Link from "next/link";

interface LinkButtonProps {
    text: string;
    href: string;
    className?: string;
    openInNewTab?: boolean;
}

export default function LinkButton(props: LinkButtonProps) {
    const className = [styles["link-button"], props.className].filter(Boolean).join(' ');
    const target = !!props.openInNewTab ? "_blank" : "_self";

    return (
        <Link href={props.href} className="no-underline" target={target}>
            <button className={className} >
                {props.text}
            </button>
        </Link>
    );
};