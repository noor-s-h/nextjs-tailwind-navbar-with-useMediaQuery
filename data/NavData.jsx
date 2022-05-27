import Company from "components/icons/Company"
import Gift from "components/icons/Gift"

const NavData = [
    {
        title: 'Our Products',
        label: "Products",
        childrens: [
            {
                label: "New Products",
                href: "#",
                icon: <Company iconClass="h-5 w-5" />,
                sublabel: "Secure customizable really easy"
            },
            {
                label: "Old Products",
                href: "#",
                icon: <Gift iconClass="h-5 w-5" />,
                sublabel: "Secure customizable very easy"
            },
        ]
    },
    {
        title: 'Our Services',
        label: "Services",
        childrens: [
            {
                label: "We Offer",
                href: "#",
                icon: <Company iconClass="h-5 w-5" />,
                sublabel: "Secure customizable really easy"
            },
            {
                label: "Coming Soon",
                href: "#",
                icon: <Company iconClass="h-5 w-5" />,
                sublabel: "Secure customizable really easy"
            },
        ]
    },
    {
        title: 'Contact Us',
        label: "Contact",
        childrens: [
            {
                label: "Mobile",
                href: "/mobile",
                icon: <Company iconClass="h-5 w-5" />,
                sublabel: "Secure customizable really easy"
            },
            {
                label: "Landline",
                href: "/landline",
                icon: <Company iconClass="h-5 w-5" />,
                sublabel: "Secure customizable really easy"
            },
        ]
    },
    {
        label: "About",
        href: "/about"
    },
]

export default NavData