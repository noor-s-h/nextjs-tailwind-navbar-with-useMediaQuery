import Header from './Header'

export default function Layout({ children }) {
    return (
        <>
            <Header />
            <main className='container max-w-[50rem] mx-auto px-4 pt-4 font-semibold text-gray-500'>
                {children}
            </main>
        </>
    )
}