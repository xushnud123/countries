import { FC } from "react";

import search from "assets/images/icons/search.svg";

import cls from "./empty.module.scss";

interface EmptyProps {}

const Empty: FC<EmptyProps> = () => (
    <div className={cls.empty}>
      <img src={search} className={cls.search} alt='img not found' />
      <h1 className={cls.title}>No search results found</h1>
      <p className={cls.description}>
        You can filter countries by name, capital, region, subregion, currency,
        language through the sidebar panel
      </p>
    </div>
  );

export default Empty;
