import {
  IonBackButton,
  IonButtons,
  IonHeader,
  IonMenuButton,
  IonTitle,
  IonToolbar,
} from '@ionic/react';
import { useLocation } from 'react-router-dom';
import { getRouteById, getRouteByPath } from '../../routes';

const AppHeader: React.FC = () => {
  const { pathname } = useLocation();
  const route = getRouteByPath(pathname);
  const title = route?.title ?? 'App';
  const parentRoute = route?.parentId
    ? getRouteById(route.parentId)
    : undefined;
  const isChildRoute = Boolean(route?.parentId);

  return (
    <IonHeader>
      <IonToolbar>
        <IonButtons slot="start">
          {isChildRoute && parentRoute ? (
            <IonBackButton defaultHref={parentRoute.path} text="" />
          ) : (
            <IonMenuButton />
          )}
        </IonButtons>
        <IonTitle key={title}>{title}</IonTitle>
      </IonToolbar>
    </IonHeader>
  );
};

export default AppHeader;
