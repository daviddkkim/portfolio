import styles from "../styles/card.module.scss";
import classNames from 'classnames/bind'
import React,{MouseEvent} from 'react'


const className = classNames.bind(styles);

type CardProps = {
    children: string | Node,
    title?: string;
    //make this an actual type to make it robust;
    theme: string;
    onClick?: (e?: MouseEvent<HTMLElement>) => void
}

export default function Card(props: CardProps) {

const cardStyles = className(
    'card',
    {
        [`card-${props.theme}`]: props.theme,
        ['card-link']: props.onClick
    }
)


return (
    <div onClick= {props.onClick} className={cardStyles}>
            
          <span> {props.children} </span>
    </div>
  );
}
