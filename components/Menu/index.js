import Link from "next/link";
const Menu = () => {
    return (
        <div className = "list-none m-0 p-0 inline-flex gap-8"> 
            <Link href = '/'>
                <a>Home</a>
            </Link>
            <Link href = '/about'>
                <a>About</a>
            </Link>
            <Link href = '/articles'>
                <a>Article</a>
            </Link>
            <Link href = '/contacts'>
                <a>Contacts</a>
            </Link>
        </div>
    )
}

export default Menu;