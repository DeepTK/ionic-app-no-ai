import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonNote,
} from '@ionic/react';
import { businessOutline, callOutline, mailOutline } from 'ionicons/icons';
import User from '../../type/user';

type PostDetailAuthorCardProps = {
  user: User;
};

const PostDetailAuthorCard: React.FC<PostDetailAuthorCardProps> = ({ user }) => (
  <IonCard className="post-detail-card">
    <IonCardHeader>
      <IonCardSubtitle>Author</IonCardSubtitle>
    </IonCardHeader>
    <IonCardContent className="ion-no-padding">
      <IonList lines="none">
        <IonItem>
          <IonLabel>
            <h2>{user.name}</h2>
            <IonNote>@{user.username}</IonNote>
          </IonLabel>
        </IonItem>
        <IonItem>
          <IonIcon slot="start" icon={mailOutline} />
          <IonLabel>{user.email}</IonLabel>
        </IonItem>
        <IonItem>
          <IonIcon slot="start" icon={callOutline} />
          <IonLabel>{user.phone}</IonLabel>
        </IonItem>
        <IonItem>
          <IonIcon slot="start" icon={businessOutline} />
          <IonLabel>
            <h3>{user.company.name}</h3>
            <IonNote>{user.company.catchPhrase}</IonNote>
          </IonLabel>
        </IonItem>
      </IonList>
    </IonCardContent>
  </IonCard>
);

export default PostDetailAuthorCard;
