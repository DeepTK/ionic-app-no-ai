import {
  IonContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonMenu,
  IonMenuToggle,
  IonNote,
} from '@ionic/react';
import { useLocation } from 'react-router-dom';
import { isMenuRouteActive, MENU_ROUTES } from '../../routes';
import './AppSidebar.css';

const AppSidebar: React.FC = () => {
  const location = useLocation();

  return (
    <IonMenu contentId="main-content" type="overlay">
      <IonContent>
        <IonList lines="none" className="app-sidebar-list">
          <IonNote className="app-sidebar-note">Navigation</IonNote>
          {MENU_ROUTES.map((route) => (
            <IonMenuToggle key={route.path} autoHide={false}>
              <IonItem
                routerLink={route.path}
                routerDirection="none"
                detail={false}
                className={
                  isMenuRouteActive(route, location.pathname) ? 'selected' : undefined
                }
              >
                <IonIcon slot="start" icon={route.icon} />
                <IonLabel>{route.label}</IonLabel>
              </IonItem>
            </IonMenuToggle>
          ))}
        </IonList>
      </IonContent>
    </IonMenu>
  );
};

export default AppSidebar;
