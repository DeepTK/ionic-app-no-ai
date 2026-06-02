import { IonList } from '@ionic/react';
import User from '../../type/user';
import UserListItem from './UserListItem';

type UserListProps = {
  users: User[];
  onUserClick: (id: number) => void;
};

const UserList: React.FC<UserListProps> = ({ users, onUserClick }) => (
  <IonList lines="full" className="user-list">
    {users.map((user) => (
      <UserListItem
        key={user.id}
        user={user}
        onClick={() => onUserClick(user.id)}
      />
    ))}
  </IonList>
);

export default UserList;
