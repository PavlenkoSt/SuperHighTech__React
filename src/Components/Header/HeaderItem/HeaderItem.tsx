import { FC } from "react"
import { NavLink } from "react-router-dom"

type HeaderItemPropsType = {
    link: string
    name: string
}

const HeaderItem: FC<HeaderItemPropsType> = ({ link, name }) => <NavLink to={link}>{name}</NavLink>


export default HeaderItem