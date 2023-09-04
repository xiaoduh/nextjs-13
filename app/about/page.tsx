import Link from "next/link"

const Page = () => {

    return <div><h2>About page</h2>
        <Link href="/about/company">Company</Link>
        <Link href="/">Home</Link>
    </div>
}

export default Page