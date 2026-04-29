import { useNavigate } from 'react-router-dom';
import { Tag } from '../components/Tag'

interface CardProps {
    title: string;
    description: string;
    tags: string[];
    images: string[];
    navigateToId: number
}
export function Card(props: CardProps) {
    const navigate = useNavigate()
    function handleNavigate(navigateTo: string){

        navigate(navigateTo)
        window.scrollTo({
            top: 0
        })
    }
    return(
        <div
            className='flex flex-col gap-3 bg-bg hover:brightness-75 transition-all duration-200 p-5 rounded-xl cursor-pointer w-full sm:w-[calc(50%-10px)] lg:w-[calc(33%-10px)]'
            onClick={() => handleNavigate(`/Projects/${props.navigateToId}`)}
        >
            <img src={props.images[0]} alt={props.title} className='w-full h-48 object-cover object-top rounded-sm'/>
            <h3 className='font-bold text-2xl'>{props.title}</h3>
            <div className='flex gap-2 flex-wrap'>
                {props.tags.map((tag, index) => (
                    <Tag key={index} text={tag} />
                ))}
            </div>
            <p className='text-sm line-clamp-3'>{props.description}</p>
        </div>
    )
}
