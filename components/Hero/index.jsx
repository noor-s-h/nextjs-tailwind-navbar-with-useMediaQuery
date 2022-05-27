import ChevronRight from "components/icons/ChevronRight"
import Link from "components/Link"

export default function Hero() {

    return (
        <div className="flex flex-col justify-center items-start md:justify-start">
            <Link
                href="/about"
                linkClass="inline-flex items-center border rounded-full p-1"
            >
                <span className="px-3 py-0.5 text-white text-xs leading-5 uppercase tracking-wide bg-gray-400 rounded-full">
                    We are hiring
                </span>
                <span className="ml-4 text-sm text-gray-500">Visit our careers page</span>
                <ChevronRight iconClass="ml-2 w-5 h-5 text-gray-500" aria-hidden="true" />
            </Link>
        </div>
    )
}