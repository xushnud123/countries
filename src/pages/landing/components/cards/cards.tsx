import { FC } from 'react'

import cls from './cards.module.scss'

interface CardsProps {}

const Cards:FC<CardsProps> = () => <div className={cls.wrapper}> Cards </div>

export default Cards;