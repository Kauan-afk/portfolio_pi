import { useNavigate, useParams } from 'react-router-dom'
import { DataProjects } from '../data/DataProjects'
import { Tag } from '../components/Tag'
import { FaArrowLeft } from 'react-icons/fa'
import { useState } from 'react'

export function Project() {
    const { id } = useParams()
    const navigate = useNavigate()
    const project = DataProjects.find(p => p.id === Number(id))
    const [activeImage, setActiveImage] = useState(0)

    if (!project) {
        return (
            <div className='p-6 text-myBlack font-display bg-bg min-h-screen flex flex-col items-center justify-center gap-6'>
                <p className='text-2xl font-bold'>Projeto não encontrado.</p>
                <button
                    onClick={() => navigate('/')}
                    className='cursor-pointer font-bold hover:bg-myRed hover:text-bg py-2 px-6 rounded-xl border border-myRed transition-all duration-200'
                >
                    Voltar ao início
                </button>
            </div>
        )
    }

    return (
        <div className='p-4 sm:p-6 lg:p-10 text-myBlack font-display bg-bg min-h-screen flex flex-col gap-8'>
            <div className='flex items-center justify-between p-4 shadow-xl w-full rounded-xl border border-myRed'>
                <h1
                    className='text-xl sm:text-2xl px-2 sm:px-4 font-bold cursor-pointer'
                    onClick={() => navigate('/')}
                >
                    Kauan<span className='text-myRed'>.</span>SO
                </h1>
                <button
                    onClick={() => navigate('/')}
                    className='flex items-center gap-2 cursor-pointer font-bold hover:bg-myRed hover:text-bg py-2 px-4 rounded-xl transition-all duration-200'
                >
                    <FaArrowLeft />
                    <span className='hidden sm:inline'>Voltar</span>
                </button>
            </div>

            <div className='flex flex-col gap-10 max-w-5xl w-full mx-auto'>
                <div className='flex flex-col gap-4'>
                    <h1 className='font-bold text-4xl sm:text-6xl lg:text-7xl'>
                        {project.title.split(' ')[0]}{' '}
                        {project.title.split(' ').length > 1 && (
                            <span className='text-myRed'>{project.title.split(' ').slice(1).join(' ')}</span>
                        )}
                    </h1>
                    <div className='flex gap-2 flex-wrap'>
                        {project.tags.map((tag, i) => <Tag key={i} text={tag} />)}
                    </div>
                </div>
                <div className='flex flex-col gap-3'>
                    <div className='w-full rounded-xl overflow-hidden bg-myBlack'>
                        <img
                            src={project.images[activeImage]}
                            alt={`${project.title} - imagem ${activeImage + 1}`}
                            className='w-full max-h-96 sm:max-h-125 object-contain object-center'
                        />
                    </div>
                    <div className='flex gap-3'>
                        {project.images.map((img, i) => (
                            <button
                                key={i}
                                onClick={() => setActiveImage(i)}
                                className={`flex-1 rounded-lg overflow-hidden border-2 transition-all duration-200 cursor-pointer ${
                                    activeImage === i ? 'border-myRed brightness-100' : 'border-transparent brightness-60 hover:brightness-90'
                                }`}
                            >
                                <img
                                    src={img}
                                    alt={`Thumbnail ${i + 1}`}
                                    className='w-full h-16 sm:h-20 object-cover object-top'
                                />
                            </button>
                        ))}
                    </div>
                </div>

                <div className='flex flex-col gap-4'>
                    <h2 className='font-bold text-3xl sm:text-4xl'>
                        Sobre o <span className='underline decoration-myRed'>projeto</span>
                    </h2>
                    <p className='text-base sm:text-xl leading-relaxed'>{project.description}</p>
                </div>

                <div className='flex flex-col gap-4'>
                    <h2 className='font-bold text-3xl sm:text-4xl'>
                        Minha <span className='underline decoration-myRed'>participação</span>
                    </h2>
                    <p className='text-base sm:text-xl leading-relaxed'>{project.part}</p>
                </div>

                <div className='bg-myRed text-bg rounded-xl p-6 sm:p-10 flex flex-col gap-5'>
                    <h2 className='font-bold text-3xl sm:text-4xl'>Tecnologias</h2>
                    <div className='flex gap-3 flex-wrap'>
                        {project.tags.map((tag, i) => (
                            <span
                                key={i}
                                className='border border-bg rounded-xl px-4 py-2 text-sm sm:text-base font-bold'
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>

                <div className='flex justify-between gap-4 flex-wrap'>
                    {project.id > 0 && (
                        <button
                            onClick={() => { navigate(`/Projects/${project.id - 1}`); setActiveImage(0) }}
                            className='flex items-center gap-2 cursor-pointer font-bold hover:bg-myRed hover:text-bg py-2 px-4 rounded-xl border border-myRed transition-all duration-200'
                        >
                            <FaArrowLeft />
                            <span>{DataProjects[project.id - 1].title}</span>
                        </button>
                    )}
                    {project.id < DataProjects.length - 1 && (
                        <button
                            onClick={() => { navigate(`/Projects/${project.id + 1}`); setActiveImage(0) }}
                            className='flex items-center gap-2 cursor-pointer font-bold hover:bg-myRed hover:text-bg py-2 px-4 rounded-xl border border-myRed transition-all duration-200 ml-auto'
                        >
                            <span>{DataProjects[project.id + 1].title}</span>
                            <FaArrowLeft className='rotate-180' />
                        </button>
                    )}
                </div>

            </div>
        </div>
    )
}
