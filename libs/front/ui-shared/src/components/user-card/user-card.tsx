import styles from './user-card.module.scss';
import male from '../../../../../../apps/front/src/assets/images/male.png';
import female from '../../../../../../apps/front/src/assets/images/female.png';

type UserCardProps = {
  username: string;
  age: number;
  city?: string;
  country?: string;
  gender: 'male' | 'female';
}

export const UserCard = ({ username, age, city, country, gender }: UserCardProps) => {
  return (
    <div className={styles['profile__list']}>
      <div className={styles['profile__list__item']}>
        <div className={styles['profile-avatar']}>
          <span className={styles['avatar']}>
            <img src={gender === 'male' ? male : female} alt={`avatar de ${username}`} />
          </span>
        </div>
        <div className={styles['profile-infos']}>
          <div className={styles['profile-infos__username']}>{username}</div>
          <div className={styles['profile-infos__age']}>{age} ans</div>
          <div className={styles['profile-infos__location']}>
            <span className='material-icons material-symbols-outlined'>place</span>
            <span>{country ? country : 'FR'}, {city ? city : 'Chilly-Mazarin'}</span>
          </div>
        </div>
        <div className={styles['profile-favorite']} onClick={() => alert('favoris')}>
          <span className='material-icons material-symbols-outlined'>star_border</span>
       </div>
     </div>
    </div>
  )
}

export default UserCard;

