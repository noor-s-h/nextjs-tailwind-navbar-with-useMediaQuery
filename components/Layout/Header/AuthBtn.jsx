import Link from "components/Link"

export default function AuthBtn() {
    return (
        <div>
            <Link href="/login">
                    Login
            </Link>
            <Link linkClass="ml-4 hidden md:inline-block text-gray-50 text-sm bg-gray-400 px-5 py-2 rounded-full" href="#">
                    Signup
            </Link>
        </div>
    )
}