import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonItem,
  IonList,
  IonSkeletonText,
} from '@ionic/react';
import './UserDetailSkeleton.css';

const CONTACT_ROWS = 3;

const UserDetailSkeleton: React.FC = () => (
  <div className="user-detail">
    <IonCard>
      <IonCardHeader>
        <IonSkeletonText animated className="user-sk-title" />
        <IonSkeletonText animated className="user-sk-subtitle" />
      </IonCardHeader>
    </IonCard>

    <IonCard>
      <IonCardHeader>
        <IonSkeletonText animated className="user-sk-section-label" />
      </IonCardHeader>
      <IonCardContent className="ion-no-padding">
        <IonList lines="none">
          {Array.from({ length: CONTACT_ROWS }, (_, index) => (
            <IonItem key={index}>
              <IonSkeletonText animated className="user-sk-icon" slot="start" />
              <IonSkeletonText animated className="user-sk-row-line" />
            </IonItem>
          ))}
        </IonList>
      </IonCardContent>
    </IonCard>

    <IonCard>
      <IonCardHeader>
        <IonSkeletonText animated className="user-sk-section-label" />
      </IonCardHeader>
      <IonCardContent>
        <IonItem lines="none">
          <IonSkeletonText animated className="user-sk-icon" slot="start" />
          <div className="user-sk-address-lines">
            <IonSkeletonText animated className="user-sk-row-line" />
            <IonSkeletonText animated className="user-sk-row-line user-sk-row-line--short" />
          </div>
        </IonItem>
      </IonCardContent>
    </IonCard>

    <IonCard>
      <IonCardHeader>
        <IonSkeletonText animated className="user-sk-section-label" />
      </IonCardHeader>
      <IonCardContent className="ion-no-padding">
        <IonList lines="none">
          <IonItem>
            <IonSkeletonText animated className="user-sk-icon" slot="start" />
            <div className="user-sk-company-lines">
              <IonSkeletonText animated className="user-sk-row-line" />
              <IonSkeletonText animated className="user-sk-row-line user-sk-row-line--short" />
            </div>
          </IonItem>
        </IonList>
      </IonCardContent>
    </IonCard>
  </div>
);

export default UserDetailSkeleton;
