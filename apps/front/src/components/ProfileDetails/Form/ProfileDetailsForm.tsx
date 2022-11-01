import { AppContext, ButtonForm } from '@azwaaji/front/ui-shared';
import styles from './ProfileDetailsForm.module.scss';
import { SubmitHandler, useForm } from 'react-hook-form';
import React, { useContext } from 'react';
import { useMutation } from '@apollo/client';
import { CREATE_MESSAGE } from 'apps/front/src/graphql/mutations';

interface IProps {
  show: boolean;
  onClick: () => void;
}

const ProfileDetailsForm: React.FC<IProps> = ({ show, onClick }) => {
  const { currentUser } = useContext(AppContext);

  const [addMessage, { data, loading, error }] = useMutation(CREATE_MESSAGE, {
    errorPolicy: 'all'
  })

  const onStopPropagation = (evt: React.MouseEvent) => {
    evt.stopPropagation();
  }

  const { register, handleSubmit } = useForm<{message: string}>();
  const onSubmit: SubmitHandler<{message: string}> = (data) => {
    addMessage({ variables: { message: data.message, conversation: 2, profile: currentUser?.id } })
    console.log(data, loading, error);
  }

  console.log(currentUser);


  return (
    <div className={`${styles['modal-form']} ${show ? styles['modal-form--visible'] : ''}`} onClick={onClick}>
      <aside className={styles['modal-form__wrapper']} onClick={onStopPropagation}>
        <h3>Mon formulaire</h3>
        <form onSubmit={handleSubmit(onSubmit)}>
        {/* <form onSubmit={handleSubmit}> */}
          <div>
            <label htmlFor="message">
              <textarea
                className={styles['textarea']}
                {...register('message', { required: true })}
                name="message"
                id="message"></textarea>
            </label>
          </div>
          <ButtonForm label='envoyer' type='submit' />
        </form>
      </aside>
    </div>
  )
}

export default ProfileDetailsForm;
