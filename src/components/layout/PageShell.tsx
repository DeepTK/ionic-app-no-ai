import { IonContent, IonPage } from '@ionic/react';
import AppHeader from './AppHeader';

const PageShell: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <IonPage>
    <AppHeader />
    <IonContent className="ion-padding" fullscreen>{children}</IonContent>
  </IonPage>
);

export default PageShell;
