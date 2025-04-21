'use client'
import styles from './LinkButton.module.css';
import Link from "next/link";

interface LinkButtonProps {
    text: string;
    href: string;
    className?: string;
}

export default function LinkButton(props: LinkButtonProps) {
    const className = [styles["link-button"], props.className].filter(Boolean).join(' ');

    return (
        <Link href="/schedule" className="no-underline">
            <button className={className} >
                {props.text}
            </button>
        </Link>
    );
};