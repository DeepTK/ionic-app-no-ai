import { useEffect, useState } from "react";
import {
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonNote,
  IonText,
} from "@ionic/react";
import {
  businessOutline,
  callOutline,
  globeOutline,
  locationOutline,
  mailOutline,
} from "ionicons/icons";
import { useParams } from "react-router-dom";
import UserDetailSkeleton from "../components/user/UserDetailSkeleton";
import User from "../type/user";
import "./UserDetail.css";

const UserDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchUserDetail = async () => {
    if (!id) {
      setError("Invalid user id");
      setLoading(false);
      return;
    }

    setLoading(true);
    setError("");

    try {
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/users/${id}`,
      );
      const data: User = await res.json();
      setUser(data);
    } catch (err) {
      console.error(err);
      setError("Failed to fetch user detail");
      setUser(null);
    }

    setLoading(false);
  };

  useEffect(() => {
    fetchUserDetail();
  }, [id]);

  if (loading) {
    return <UserDetailSkeleton />;
  }

  if (error || !user) {
    return (
      <IonCard className="user-detail-error">
        <IonCardContent>
          <IonText color="danger">
            <p>{error || "User not found"}</p>
          </IonText>
          <IonButton expand="block" onClick={fetchUserDetail}>
            Retry
          </IonButton>
        </IonCardContent>
      </IonCard>
    );
  }

  const fullAddress = `${user.address.street}, ${user.address.suite}, ${user.address.city} ${user.address.zipcode}`;

  return (
    <div className="user-detail">
      <IonCard>
        <IonCardHeader>
          <IonCardTitle>{user.name}</IonCardTitle>
          <IonCardSubtitle>@{user.username}</IonCardSubtitle>
        </IonCardHeader>
      </IonCard>

      <IonCard>
        <IonCardHeader>
          <IonCardSubtitle>Contact</IonCardSubtitle>
        </IonCardHeader>
        <IonCardContent className="ion-no-padding">
          <IonList lines="none">
            <IonItem>
              <IonIcon slot="start" icon={mailOutline} />
              <IonLabel>{user.email}</IonLabel>
            </IonItem>
            <IonItem>
              <IonIcon slot="start" icon={callOutline} />
              <IonLabel>{user.phone}</IonLabel>
            </IonItem>
            <IonItem>
              <IonIcon slot="start" icon={globeOutline} />
              <IonLabel>{user.website}</IonLabel>
            </IonItem>
          </IonList>
        </IonCardContent>
      </IonCard>

      <IonCard>
        <IonCardHeader>
          <IonCardSubtitle>Address</IonCardSubtitle>
        </IonCardHeader>
        <IonCardContent>
          <IonItem lines="none" className="user-detail-address">
            <IonIcon slot="start" icon={locationOutline} />
            <IonLabel className="ion-text-wrap">{fullAddress}</IonLabel>
          </IonItem>
        </IonCardContent>
      </IonCard>

      <IonCard>
        <IonCardHeader>
          <IonCardSubtitle>Company</IonCardSubtitle>
        </IonCardHeader>
        <IonCardContent className="ion-no-padding">
          <IonList lines="none">
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
    </div>
  );
};

export default UserDetail;
