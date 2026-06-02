import { useEffect, useState } from 'react';
import { IonButton, IonCard, IonCardContent, IonText } from '@ionic/react';
import UserList from '../components/user/UserList';
import UserListSkeleton from '../components/user/UserListSkeleton';
import User from '../type/user';
import { useHistory } from 'react-router-dom';
import './Users.css';

const Users: React.FC = () => {
  const history = useHistory();
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const fetchUsers = async () => {
    setLoading(true);
    setError('');

    try {
      const res = await fetch('https://jsonplaceholder.typicode.com/users');
      const data: User[] = await res.json();
      setUsers(data);
    } catch (err) {
      console.error(err);
      setError('Failed to fetch users');
      setUsers([]);
    }

    setLoading(false);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const goToUserDetail = (userId: number) => {
    history.push(`/user-detail/${userId}`);
  };

  if (loading) {
    return <UserListSkeleton />;
  }

  if (error) {
    return (
      <IonCard className="users-error">
        <IonCardContent>
          <IonText color="danger">
            <p>{error}</p>
          </IonText>
          <IonButton expand="block" onClick={fetchUsers}>
            Retry
          </IonButton>
        </IonCardContent>
      </IonCard>
    );
  }

  return <UserList users={users} onUserClick={goToUserDetail} />;
};

export default Users;
