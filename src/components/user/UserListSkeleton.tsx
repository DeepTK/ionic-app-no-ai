import { IonItem, IonList, IonSkeletonText } from '@ionic/react';
import './UserListSkeleton.css';

const ROW_COUNT = 6;

const UserListSkeleton: React.FC = () => (
  <IonList lines="none" className="user-list-skeleton">
    {Array.from({ length: ROW_COUNT }, (_, index) => (
      <IonItem key={index}>
        <IonSkeletonText animated className="user-sk-avatar" slot="start" />
        <div className="user-sk-lines">
          <IonSkeletonText animated className="user-sk-name" />
          <IonSkeletonText animated className="user-sk-email" />
        </div>
      </IonItem>
    ))}
  </IonList>
);

export default UserListSkeleton;
