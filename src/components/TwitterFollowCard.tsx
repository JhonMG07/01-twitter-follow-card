import React, { useState } from "react";
import "../App.css";
interface Props {
  userName: string;
  nameTag: string;
  isInitialFollow: boolean;
}
const Button: React.FC<Props> = ({ userName, nameTag, isInitialFollow }) => {
  const [isFollow, setIsFollow] = useState(isInitialFollow);

  const text = isFollow ? "Siguiendo" : "Seguir";

  const buttonClassName = isFollow
    ? "tw-followCard-button is-following"
    : "tw-followCard-button";

  const handleClick = () => {
    setIsFollow(!isFollow);
  };
  return (
    <article className="tw-followCard">
      <header className="tw-followCard-header">
        <img
          className="tw-followCard-avatar"
          alt={`El avatar de  ${nameTag}`}
          src={`https://unavatar.io/${userName}`}
        />
        <div className="tw-followCard-info">
          <strong>{nameTag}</strong>
          <span className="tw-followCard-infoUserName">@{userName}</span>
        </div>
      </header>

      <aside>
        <button className={buttonClassName} onClick={handleClick}>
          <span className="tw-followCard-text">{text}</span>
          <span className="tw-followCard-stopFollow">Dejar de seguir</span>
        </button>
      </aside>
    </article>
  );
};

export default Button;
