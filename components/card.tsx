import styles from "../styles/card.module.scss";
import classNames from 'classnames/bind'

const className = classNames.bind(styles);

type CardProps = {
    children: string | Node,
    title?: string;
    //make this an actual type to make it robust;
    theme: string;
}

export default function Card(props: CardProps) {

const cardStyles = className(
    'card',
    {
        [`card-${props.theme}`]: props.theme
    }
)

return (
    <div className={cardStyles}>
            {props.children}
    </div>
  );
}
