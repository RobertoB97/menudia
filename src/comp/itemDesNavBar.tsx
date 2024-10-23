import {Link} from "react-router-dom";

interface ItemDesNavBarProps {
    texto: string;
    url: string;
    items?: any;
}

export default function ItemDesNavBar(props: ItemDesNavBarProps) {
    return (
        <div className="itemNavBarMain">
            <Link to={props.url}>
                <div className="itemNavBardes">{props.texto}</div>
            </Link>
            <div className="itemNavBardesChild itemNavBarActive">
                {props.items?.map((item: any, index: number) => (
                    <Link key={index} to={item.url}>
                        <div className="itemNavBar">{item.texto}</div>
                    </Link>
                ))}
            </div>
        </div>
    );
}
