import { IonSplitPane } from '@ionic/react';
import AppSidebar from './AppSidebar';

const AppLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <IonSplitPane contentId="main-content" when="lg">
    <AppSidebar />
    {children}
  </IonSplitPane>
);

export default AppLayout;
