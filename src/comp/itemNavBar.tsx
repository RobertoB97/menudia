import { Link } from 'react-router-dom';

interface ItemNavBarProps {
    texto: string;
    url: string;
}

export default function ItemNavBar(props:ItemNavBarProps) {
    return (
        <Link to={props.url}>
            <div  className='itemNavBar'>
                {props.texto}
            </div>
        </Link>
    );
}