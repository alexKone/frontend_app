import { FC } from 'react';
import styles from './Options.module.scss';

interface ProfileDetailsOptionsProps {
  callbackShow: () => void;
}

const ProfileDetailsOptions: FC<{onClick: () => void}> = ({onClick}) => {
  const addToFavs = () => {
    console.log('add t favs')
  }

  return (
    <div className={styles['container']}>
      <div className="favoris">
        <button type="button" id="js-favoris" onClick={addToFavs}>
          <span className="material-icons material-symbols-outlined">grade</span>
          <span>favoris</span>
        </button>
      </div>
      <div className="message">
        <button type="button" className="open-button" id="js-message" onClick={onClick}>
          <span className="material-icons material-symbols-outlined">edit</span>
          <span>messages</span>
        </button>
      </div>
    </div>

  )
}

export default ProfileDetailsOptions;
