import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
        <main className="text-center">
          <Image
            className="m-auto mt-5"
            src="/404.svg"
            alt="Page not found"
            width={400}
            height={400}
          />
          <h4>page not found</h4>
          <Link href="/" className="underline">Back to main page</Link>
        </main>
  );
}
