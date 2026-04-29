import perfilImg from '../assets/kauan.png'
import { Card } from '../components/Card'
import { DataProjects } from '../data/DataProjects'

import { FaWhatsapp, FaLinkedin } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import { FaSquareGithub } from "react-icons/fa6";
import { NavBar } from '../components/NavBar'

export function Home() {
    function handleScrollButton(id: string) {
        const e = document.getElementById(id)
        if (e) {
            e.scrollIntoView({ behavior: "smooth" })
        }
    }

    return (
        <div className='p-4 sm:p-6 lg:p-10 text-myBlack flex flex-col font-display items-center bg-bg min-h-screen' id='Home'>
            <div className='min-h-screen w-full flex flex-col'>
                <NavBar onNavigate={handleScrollButton}/>
                <div className='flex flex-col-reverse md:flex-row w-full flex-1 gap-8 py-10'>
                    <div className='flex-1 flex items-center justify-center md:justify-start'>
                        <div className='flex flex-col gap-4'>
                            <p className='text-lg sm:text-xl'>Olá, eu sou</p>
                            <h1 className='font-bold text-5xl sm:text-7xl lg:text-8xl xl:text-9xl leading-tight'>
                                Kauan <span className='text-myRed'>Santos</span> Oliveira
                            </h1>
                            <p className='text-base sm:text-xl max-w-xl'>
                                Gosto de transformar ideias em soluções digitais. Este portfólio reúne alguns projetos e aprendizados da minha jornada ao longo do curso. Fique à vontade para explorar!
                            </p>
                            <div className='font-bold flex gap-6 flex-wrap'>
                                <button
                                    onClick={() => window.open("https://github.com/Kauan-afk")}
                                    className='cursor-pointer hover:bg-myRed hover:text-bg py-2 px-4 rounded-xl transition-all duration-200'
                                >
                                    GitHub
                                </button>
                                <button
                                    className='border hover:border-myRed border-myBlack cursor-pointer py-2 px-4 rounded-xl transition-all duration-200'
                                    onClick={() => handleScrollButton("SobreMim")}
                                >
                                    Saiba mais
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className='flex-1 flex items-center justify-center'>
                        <img
                            src={perfilImg}
                            className='h-48 w-48 sm:h-72 sm:w-72 lg:h-96 lg:w-96 xl:h-112.5 xl:w-112.5 object-top object-cover rounded-full border-8 sm:border-16 lg:border-24 border-myRed'
                            alt="Perfil"
                        />
                    </div>

                </div>
            </div>

            <div id='SobreMim' className='w-full min-h-screen py-10 text-xl flex flex-col gap-10'>
                <h1 className='font-bold text-4xl sm:text-6xl mb-5'>
                    Sobre <span className='underline decoration-myRed'>mim</span>
                </h1>

                <div className='rounded-xl'>
                    <h2 className='text-2xl sm:text-4xl mb-3'>Resumo</h2>
                    <p className='text-base sm:text-xl leading-relaxed'>
                        Tenho 22 anos, atualmente cursando Desenvolvimento de software multiplataforma na FATEC Zona Leste e fazendo estágio em service desk na CastGroup, em horas vagas costumo passar o tempo desenvolvendo projetos pessoais para aprimorar meus conhecimentos, tendo inglês intermediário e conhecimento principalmente nas tecnologias: React.Js, NodeJs, PHP, SQL, JavaScript, TypeScript entre outras.
                    </p>
                </div>

                <div className='flex flex-col md:flex-row gap-4 text-bg'>
                    <div className='flex-1 bg-myRed rounded-xl p-6 sm:p-10 flex flex-col gap-5'>
                        <h2 className='text-2xl sm:text-4xl'>Faculdade</h2>
                        <p>FATEC Zona Leste</p>
                        <p>Desenvolvimento de Software Multiplataforma</p>
                        <p>Agosto de 2023 - 2026</p>
                        <p className='text-sm sm:text-base leading-relaxed'>
                            Atualmente curso Desenvolvimento de Software Multiplataforma, onde venho adquirindo conhecimentos em diversas áreas da tecnologia. Durante a graduação, tenho desenvolvido habilidades em desenvolvimento web (front-end e back-end), banco de dados e engenharia de software, entre outras. Além disso, participo de projetos acadêmicos em parceria com empresas reais.
                        </p>
                    </div>
                    <div className='flex-1 bg-myRed rounded-xl p-6 sm:p-10 flex flex-col gap-5'>
                        <h2 className='text-2xl sm:text-4xl'>Estágio</h2>
                        <p>CastGroup</p>
                        <p>Service Desk</p>
                        <p>12/2024 - Atual</p>
                        <p className='text-sm sm:text-base leading-relaxed'>
                            Atuo na área de Service Desk, sendo responsável por atividades como atendimento a usuários e resolução de problemas relacionados a software, hardware e redes. No dia a dia, também realizo o acompanhamento de equipes, como aplicações de usuários e infraestrutura, com o objetivo de complementar meu aprendizado.
                        </p>
                    </div>
                    <div className='flex-1 bg-myRed rounded-xl p-6 sm:p-10 flex flex-col gap-5'>
                        <h2 className='text-2xl sm:text-4xl'>Extensão</h2>
                        <p>Google Cloud Computing Foundations</p>
                        <p>Google</p>
                        <p>Carga horaria: 35 horas</p>
                        <p className='text-sm sm:text-base leading-relaxed'>
                            Curso introdutório voltado aos fundamentos de computação em nuvem utilizando a plataforma Google Cloud. Durante a formação, foram abordados conceitos como infraestrutura em nuvem, modelos de serviço (IaaS, PaaS e SaaS), redes, armazenamento, segurança e gerenciamento de recursos na nuvem. Além disso, foram exploradas ferramentas e serviços do Google Cloud, como Compute Engine, Cloud Storage e Identity and Access Management (IAM), proporcionando uma visão prática sobre a criação, configuração e administração de soluções em nuvem.
                        </p>
                    </div>
                </div>
            </div>

            <div id='Projetos' className='w-full min-h-screen py-10 flex flex-col items-center'>
                <h1 className='font-bold text-4xl sm:text-6xl text-center'>Projetos</h1>
                <p className='text-myRed text-lg sm:text-xl text-center mt-2'>Reunião dos projetos semestrais</p>
                <div className='flex flex-wrap gap-5 mt-8 w-full'>
                    {DataProjects.map((project) => (
                        <Card
                            key={project.id}
                            navigateToId={project.id}
                            title={project.title}
                            description={project.description}
                            tags={project.tags}
                            images={project.images}
                        />
                    ))}
                </div>
            </div>

            <div id="Contato" className='w-full p-6 sm:p-10 bg-myRed text-bg rounded-xl'>
                <h1 className='font-bold text-4xl sm:text-6xl text-center mb-6'>Contato</h1>
                <div className='flex flex-col sm:flex-row justify-between gap-6 items-start'>
                    <div className='text-base sm:text-xl flex flex-col gap-2'>
                        <div className='flex items-center gap-2'>
                            <span className='text-2xl'><FaWhatsapp/></span>
                            <p>(11) 96218-0950</p>
                        </div>
                        <div className='flex items-center gap-2'>
                            <span className='text-2xl'><MdOutlineEmail/></span>
                            <p className='break-all'>kauansantosoliveira55@gmail.com</p>
                        </div>
                        <div className='flex items-center gap-2'>
                            <span className='text-2xl'><IoLocationOutline/></span>
                            <p>São Paulo - SP</p>
                        </div>
                    </div>
                    <div className='text-4xl flex sm:flex-col gap-4'>
                        <p
                            className="cursor-pointer hover:brightness-75 transition-all duration-200"
                            onClick={() => window.open("https://www.linkedin.com/in/kauansantos-oliveira/")}
                        >
                            <FaLinkedin/>
                        </p>
                        <p
                            className="cursor-pointer hover:brightness-75 transition-all duration-200"
                            onClick={() => window.open("https://github.com/Kauan-afk")}
                        >
                            <FaSquareGithub/>
                        </p>
                    </div>
                </div>
            </div>

        </div>
    )
}
