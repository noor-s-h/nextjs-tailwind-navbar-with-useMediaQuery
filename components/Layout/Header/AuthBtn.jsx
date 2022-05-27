import Link from "components/Link"
import useMediaQuery from "lib/useMediaQuery";

export default function AuthBtn() {
    const isDesktop = useMediaQuery('(min-width: 768px)');

    return (
        <div className="auth-button">
            <Link href="/login">
                    Login
            </Link>
            {isDesktop && 
                <Link linkClass="ml-4 inline-block text-gray-50 text-sm bg-gray-400 px-5 py-2 rounded-full" href="#">
                    Signup
                </Link>
            }
        </div>
    )
}