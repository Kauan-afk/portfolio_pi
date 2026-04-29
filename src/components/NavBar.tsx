import { useState } from 'react'
import { Button } from '../components/Button'
import { IoMenu, IoClose } from 'react-icons/io5'

interface NavBarProps {
    onNavigate: (id: string) => void
}

export function NavBar(props: NavBarProps) {
    const [isOpen, setIsOpen] = useState(false)

    function handleNav(id: string) {
        props.onNavigate(id)
        setIsOpen(false)
    }

    return (
        <div className='relative flex items-center justify-between p-4 shadow-xl w-full rounded-xl border border-myRed'>
            <h1 className='text-2xl px-4 font-bold font-display'>Kauan<span className='text-myRed'>.</span>SO</h1>

            {/* Desktop nav */}
            <div className='hidden md:flex gap-4 text-xl'>
                <Button text='Sobre mim' onClick={() => handleNav("SobreMim")}/>
                <Button text='Projetos' onClick={() => handleNav("Projetos")}/>
                <Button text='Contato' onClick={() => handleNav("Contato")}/>
            </div>

            {/* Mobile hamburger */}
            <button
                className='md:hidden p-2 text-2xl cursor-pointer hover:text-myRed transition-colors'
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Menu"
            >
                {isOpen ? <IoClose /> : <IoMenu />}
            </button>

            {/* Mobile dropdown */}
            {isOpen && (
                <div className='absolute top-full left-0 right-0 bg-bg border border-myRed rounded-xl mt-2 p-4 flex flex-col gap-3 z-50 shadow-xl'>
                    <Button text='Sobre mim' onClick={() => handleNav("SobreMim")}/>
                    <Button text='Projetos' onClick={() => handleNav("Projetos")}/>
                    <Button text='Contato' onClick={() => handleNav("Contato")}/>
                </div>
            )}
        </div>
    )
}
