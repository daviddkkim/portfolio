import { ReactNode } from "react";
import styles from "../styles/badge.module.scss"
import classNames from 'classnames/bind'

type BadgeProps = {
    color?: string;
    size?: string;
    children?: ReactNode;
}

export default function Banner(props: BadgeProps) {
    const className = classNames.bind(styles);
    const color = props.color? props.color : 'default';
    const badgeStyles = className(
        'badge',
        {
            [`border-${color}`]: color,
        }
    )

    return (
        <span className={badgeStyles}>
            {props.children}
        </span>
    )
}