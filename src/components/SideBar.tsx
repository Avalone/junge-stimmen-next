import Link from "next/link";

export default function SideBar({
  isOpen,
  toggle,
}: {
  isOpen: boolean;
  toggle: () => void;
}): JSX.Element {
  return (
    <>
      <div
        className="sidebar-container fixed w-full h-full overflow-hidden justify-center bg-white grid pt-[120px] left-0 z-10"
        style={{
          opacity: `${isOpen ? "1" : "0"}`,
          top: ` ${isOpen ? "0" : "-100%"}`,
        }}
      >
        <ul className="sidebar-nav text-center leading-relaxed text-xl">
          <li>
            <Link href="/about" onClick={toggle}><p>About Us</p></Link>
          </li>
          <li>
            <Link href="/services" onClick={toggle}><p>Services</p></Link>
          </li>
          <li>
            <Link href="/contacts" onClick={toggle}><p>Contacts</p></Link>
          </li>
        </ul>
      </div>
    </>
  );
}
