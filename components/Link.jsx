import NextLink from "next/link"

export default function Link({ href, children, linkClass }) {
    return (
        <NextLink href={href} >
            <a className={`font-semibold text-gray-500 ${linkClass}`}>
                {children}
            </a>
        </NextLink>
    )
}