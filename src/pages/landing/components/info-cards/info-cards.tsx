import { FC } from "react";
import { Tooltip } from "react-tooltip";

import info from "assets/images/icons/7.svg";

import cls from "./info-cards.module.scss";

interface InfoCardsProps {}

const InfoCards: FC<InfoCardsProps> = () => {
  return (
    <div className={cls.wrapper}>
      <h1 className={cls.center}>
        What are search types ? How it works and what it returns
      </h1>
      <div className={cls.cards}>
        <div className={cls["custom-slider"]}>
          <div className={cls.card}>
            <div className={cls.body}>
              <div className={cls.wrap}>
                <h1 className={cls.title}>Population</h1>
                <img id='nameId' src={info} alt='info img not found' />
                <Tooltip
                  className={cls.tooltip}
                  anchorId='nameId'
                  content={`Following the United Nations census proposal, many countries have
              registered their population. But this is variable information. The
              percentage of finding is the lowest type of search.`}
                />
              </div>
              <p className={cls.description}>
                When searching by population, we will show you countries that
                are close to the number you entered in the search. Because
                population is variable
              </p>
            </div>
            <div className={cls.header}>
              <div className={cls["img-wrap"]}>
                <img
                  src='https://source.unsplash.com/500x500/?girls'
                  className={cls.images}
                  alt='img not found'
                />
              </div>
            </div>
          </div>
        </div>
        <div className={cls["custom-slider"]}>
          <div className={cls.card}>
            <div className={cls.body}>
              <div className={cls.wrap}>
                <h1 className={cls.title}>Sub-Region</h1>
                <img id='subRegionId' src={info} alt='info img not found' />
                <Tooltip
                  className={cls.tooltip}
                  anchorId='subRegionId'
                  content={`A subregion is a part of a
                larger region or continent and is
                usually based on location. Cardinal directions,
                such as south are commonly used to define a subregion.`}
                />
              </div>
              <p className={cls.description}>
                When you search by sub-region, we will filter the countries
                located in the sub-region. For example, South America ( Brasil,
                Argentina Republic, Chile, ... ) and others can be understood.
              </p>
            </div>
            <div className={cls.header}>
              <div className={cls["img-wrap"]}>
                <img
                  src='https://source.unsplash.com/500x500/?girls'
                  className={cls.images}
                  alt='img not found'
                />
              </div>
            </div>
          </div>
        </div>
        <div className={cls["custom-slider"]}>
          <div className={cls.card}>
            <div className={cls.header}>
              <div className={cls["img-wrap"]}>
                <img
                  src='https://source.unsplash.com/500x500/?girls'
                  className={cls.images}
                  alt='img not found'
                />
              </div>
            </div>
            <div className={cls.body}>
              <div className={cls.wrap}>
                <h1 className={cls.title}>Region</h1>
              </div>
              <p className={cls.description}>
                When you search by region, we provide you with a list of all the
                countries in the continents.
              </p>
            </div>
          </div>
        </div>
        <div className={cls["custom-slider"]}>
          <div className={cls.card}>
            <div className={cls.header}>
              <div className={cls["img-wrap"]}>
                <img
                  src='https://source.unsplash.com/500x500/?girls'
                  className={cls.images}
                  alt='img not found'
                />
              </div>
            </div>
            <div className={cls.body}>
              <div className={cls.wrap}>
                <h1 className={cls.title}>Region</h1>
              </div>
              <p className={cls.description}>
                When you search by region, we provide you with a list of all the
                countries in the continents.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default InfoCards;
