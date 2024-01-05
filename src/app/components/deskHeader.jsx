import Link from "next/link";
export default function DeskHeader () {
    return (
    <>
    <header>
    <nav>
        <ul>
            <li><Link href='/'>Home</Link></li>
            <li><Link href="/About">About</Link></li>
            <li><Link href="/Contact">Contact</Link></li>
        </ul>
    </nav>
    </header>
    </>
    );
}



