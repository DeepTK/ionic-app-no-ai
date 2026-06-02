import { IonAvatar, IonItem, IonLabel, IonNote } from '@ionic/react';
import User from '../../type/user';

type UserListItemProps = {
  user: User;
  onClick: () => void;
};

const UserListItem: React.FC<UserListItemProps> = ({ user, onClick }) => (
  <IonItem button onClick={onClick} detail>
    <IonAvatar slot="start">
      <img
        alt=""
        src="https://ionicframework.com/docs/img/demos/avatar.svg"
      />
    </IonAvatar>
    <IonLabel>
      <h2>{user.name}</h2>
      <p>{user.email}</p>
      <IonNote>@{user.username}</IonNote>
    </IonLabel>
  </IonItem>
);

export default UserListItem;
