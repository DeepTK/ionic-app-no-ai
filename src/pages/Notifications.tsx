import { useState } from 'react';
import { Capacitor } from '@capacitor/core';
import { LocalNotifications } from '@capacitor/local-notifications';
import {
  IonButton,
  IonCard,
  IonCardContent,
  IonNote,
  IonText,
} from '@ionic/react';
import './Notifications.css';

const NotificationsPage: React.FC = () => {
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');

  const isNative = Capacitor.isNativePlatform();

  const sendTestNotification = async () => {
    setError('');
    setMessage('');

    try {
      const permStatus = await LocalNotifications.checkPermissions();
      const displayPermission =
        permStatus.display === 'granted'
          ? permStatus
          : await LocalNotifications.requestPermissions();

      if (displayPermission.display !== 'granted') {
        setError('Notification permission is required.');
        return;
      }

      await LocalNotifications.schedule({
        notifications: [
          {
            id: Date.now() % 2147483647,
            title: 'Test notification',
            body: 'Your in-app notification button is working.',
            schedule: { at: new Date(Date.now() + 50) },
          },
        ],
      });

      setMessage('Notification sent. It should appear in a moment.');
    } catch (err) {
      console.error(err);
      const errMessage =
        err instanceof Error ? err.message : 'Unable to show notification.';
      setError(errMessage);
    }
  };

  if (!isNative) {
    return (
      <IonCard className="notifications-card">
        <IonCardContent>
          <IonText>
            <p>Open on Android device or emulator to use notifications.</p>
          </IonText>
        </IonCardContent>
      </IonCard>
    );
  }

  return (
    <div className="notifications-page">
      <IonCard className="notifications-card">
        <IonCardContent>
          <IonText>
            <p className="notifications-hint">
              Tap the button to trigger a notification popup.
            </p>
          </IonText>

          <IonButton expand="block" onClick={() => void sendTestNotification()}>
            Show notification
          </IonButton>

          {message && (
            <IonText color="success">
              <p className="notifications-message">{message}</p>
            </IonText>
          )}

          {error && (
            <IonNote color="danger" className="notifications-error">
              {error}
            </IonNote>
          )}
        </IonCardContent>
      </IonCard>
    </div>
  );
};

export default NotificationsPage;
