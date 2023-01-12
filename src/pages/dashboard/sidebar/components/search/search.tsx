import { FC, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Tooltip } from "react-tooltip";

import info from "assets/images/icons/7.svg";

import cls from "./search.module.scss";

interface SearchProps {
  name: string;
  keyName?: string;
  information?: string;
}

const Search: FC<SearchProps> = ({ name, keyName, information }) => {
  const [capital, setCapital] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (capital) {
      return navigate(`filter/${name}$${capital}`);
    }
    return;
  };

  return (
    <div className={cls.wrapper}>
      <div className={cls.row}>
        <h1 className={cls.title}>Search by {keyName ? keyName : name}</h1>
        {information && (
          <>
            <img id={name} src={info} alt='info img' />
            <Tooltip
              className={cls.tooltip}
              anchorId={name}
              content={information}
            />
          </>
        )}
      </div>
      <form className={cls["custom-form"]} onSubmit={handleSubmit}>
        <label className={cls["custom-label"]}>
          <input
            className={cls["custom-input"]}
            type='text'
            placeholder={
              keyName
                ? keyName.replace(keyName[0], keyName[0].toUpperCase())
                : name.replace(name[0], name[0].toUpperCase())
            }
            value={capital}
            required
            minLength={2}
            maxLength={35}
            onChange={(e) => setCapital(e.target.value)}
          />
        </label>
        <button disabled={!capital} type='submit' className={cls["btn"]}>
          Search
        </button>
      </form>
    </div>
  );
};
export default Search;
