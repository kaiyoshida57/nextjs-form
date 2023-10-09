import Link from 'next/link';

 function Header() {
    return <header className='bg-[#9ed3ff]'>
        <div className=' flex items-center border-b-2 border-b-solid border-b-[#ccc] px-4 py-2 max-w-[1280px] mx-auto'>
                <h1>
                    <img src="https://placehold.jp/14/999ff5/ffffff/50x50.png?text=Logo&amp;css=%7B%22border-radius%22%3A%2250%25%22%7D" alt="" />
                </h1>
                <menu className='ml-8'>
                    <Link href="/#about">
                        <a className='mx-4 underline text-grey font-medium text-xl'>About</a>
                    </Link>
                    <Link href="/#contact">
                        <a className='mx-4 underline text-grey font-medium text-xl'>Contact</a>
                    </Link>
                </menu>
            </div>
        </header>;
}

export default Header;