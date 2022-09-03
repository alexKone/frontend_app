import { useQuery } from "@apollo/client";
import { Loading } from "@azwaaji/front/ui-shared";
import Conversation from "apps/front/src/components/Conversation";
import { GET_CONVERSATION_BY_PROFILE_ID } from "apps/front/src/graphql/queries";
import { Helmet } from "react-helmet";
import styles from './Messages.module.scss';
import formatString from '../../../../../../libs/front/ui-shared/src/utils/formatString';
import male from '../../../assets/images/male.png';
import female from '../../../assets/images/female.png';

const Messages = () => {
  const { data, loading, error } = useQuery(GET_CONVERSATION_BY_PROFILE_ID, {
    variables: { id: 23 }
  });

  if (loading) <Loading />

  return (
    <>
      <Helmet>
        <title>Homepage - Azwaaji app</title>
      </Helmet>
      <div>
        <section className="message__send">
          <h3 className="">Messages envoyés</h3>
          <div className="list-message">
            <div className={styles['list-message__wrapper']}>
              <div className={styles['content']}>
                <div className={styles['avatar']}>
                  <img src={male} alt="" />
                </div>
                <div className="text">
                  <h4>Michael Sandiego</h4>
                  <p>{formatString('Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero unde obcaecati architecto voluptas molestiae vitae accusamus in? Nemo iusto, mollitia quam quae, saepe numquam esse obcaecati blanditiis veritatis nisi quis!', 10)}</p>
                </div>
              </div>
              <div className="status">approved</div>
            </div>
            <div className={styles['list-message__wrapper']}>
              <div className={styles['content']}>
                <div className={styles['avatar']}>
                  <img src={male} alt="" />
                </div>
                <div className="text">
                  <h4>Michael Sandiego</h4>
                  <p>{formatString('Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero unde obcaecati architecto voluptas molestiae vitae accusamus in? Nemo iusto, mollitia quam quae, saepe numquam esse obcaecati blanditiis veritatis nisi quis!', 10)}</p>
                </div>
              </div>
              <div className="status">approved</div>
            </div>
            <div className={styles['list-message__wrapper']}>
              <div className={styles['content']}>
                <div className={styles['avatar']}>
                  <img src={male} alt="" />
                </div>
                <div className="text">
                  <h4>Michael Sandiego</h4>
                  <p>{formatString('Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero unde obcaecati architecto voluptas molestiae vitae accusamus in? Nemo iusto, mollitia quam quae, saepe numquam esse obcaecati blanditiis veritatis nisi quis!', 10)}</p>
                </div>
              </div>
              <div className="status">approved</div>
            </div>
            <div className={styles['list-message__wrapper']}>
              <div className={styles['content']}>
                <div className={styles['avatar']}>
                  <img src={male} alt="" />
                </div>
                <div className="text">
                  <h4>Michael Sandiego</h4>
                  <p>{formatString('Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero unde obcaecati architecto voluptas molestiae vitae accusamus in? Nemo iusto, mollitia quam quae, saepe numquam esse obcaecati blanditiis veritatis nisi quis!', 10)}</p>
                </div>
              </div>
              <div className="status">approved</div>
            </div>
            <div className={styles['list-message__wrapper']}>
              <div className={styles['content']}>
                <div className={styles['avatar']}>
                  <img src={male} alt="" />
                </div>
                <div className="text">
                  <h4>Michael Sandiego</h4>
                  <p>{formatString('Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero unde obcaecati architecto voluptas molestiae vitae accusamus in? Nemo iusto, mollitia quam quae, saepe numquam esse obcaecati blanditiis veritatis nisi quis!', 10)}</p>
                </div>
              </div>
              <div className="status">approved</div>
            </div>
            <div className={styles['list-message__wrapper']}>
              <div className={styles['content']}>
                <div className={styles['avatar']}>
                  <img src={male} alt="" />
                </div>
                <div className="text">
                  <h4>Michael Sandiego</h4>
                  <p>{formatString('Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero unde obcaecati architecto voluptas molestiae vitae accusamus in? Nemo iusto, mollitia quam quae, saepe numquam esse obcaecati blanditiis veritatis nisi quis!', 10)}</p>
                </div>
              </div>
              <div className="status">approved</div>
            </div>
            <div className={styles['list-message__wrapper']}>
              <div className={styles['content']}>
                <div className={styles['avatar']}>
                  <img src={male} alt="" />
                </div>
                <div className="text">
                  <h4>Michael Sandiego</h4>
                  <p>{formatString('Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero unde obcaecati architecto voluptas molestiae vitae accusamus in? Nemo iusto, mollitia quam quae, saepe numquam esse obcaecati blanditiis veritatis nisi quis!', 10)}</p>
                </div>
              </div>
              <div className="status">approved</div>
            </div>
            <div className={styles['list-message__wrapper']}>
              <div className={styles['content']}>
                <div className={styles['avatar']}>
                  <img src={male} alt="" />
                </div>
                <div className="text">
                  <h4>Michael Sandiego</h4>
                  <p>{formatString('Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero unde obcaecati architecto voluptas molestiae vitae accusamus in? Nemo iusto, mollitia quam quae, saepe numquam esse obcaecati blanditiis veritatis nisi quis!', 10)}</p>
                </div>
              </div>
              <div className="status">approved</div>
            </div>
            <div className={styles['list-message__wrapper']}>
              <div className={styles['content']}>
                <div className={styles['avatar']}>
                  <img src={male} alt="" />
                </div>
                <div className="text">
                  <h4>Michael Sandiego</h4>
                  <p>{formatString('Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero unde obcaecati architecto voluptas molestiae vitae accusamus in? Nemo iusto, mollitia quam quae, saepe numquam esse obcaecati blanditiis veritatis nisi quis!', 10)}</p>
                </div>
              </div>
              <div className="status">approved</div>
            </div>
            <div className={styles['list-message__wrapper']}>
              <div className={styles['content']}>
                <div className={styles['avatar']}>
                  <img src={male} alt="" />
                </div>
                <div className="text">
                  <h4>Michael Sandiego</h4>
                  <p>{formatString('Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero unde obcaecati architecto voluptas molestiae vitae accusamus in? Nemo iusto, mollitia quam quae, saepe numquam esse obcaecati blanditiis veritatis nisi quis!', 10)}</p>
                </div>
              </div>
              <div className="status">approved</div>
            </div>
          </div>
        </section>
        {/* <h3>mes messages</h3> */}
        {/* <h4>conversations</h4> */}
        {/* <section> */}
          {/* {data && data.conversations.data.map((c: any, i: number) => <Conversation key={i} item={c} />)} */}
        {/* </section> */}
      </div>
    </>
  )
}

export default Messages;
