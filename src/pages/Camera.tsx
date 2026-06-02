import { useState } from 'react';
import { Capacitor } from '@capacitor/core';
import {
  Camera,
  CameraResultType,
  CameraSource,
} from '@capacitor/camera';
import {
  IonButton,
  IonCard,
  IonCardContent,
  IonImg,
  IonText,
} from '@ionic/react';
import './Camera.css';

const CameraPage: React.FC = () => {
  const [photoUrl, setPhotoUrl] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const isNative = Capacitor.isNativePlatform();

  const takePhoto = async () => {
    setLoading(true);
    setError('');

    try {
      const photo = await Camera.getPhoto({
        quality: 90,
        allowEditing: false,
        resultType: CameraResultType.Uri,
        source: CameraSource.Camera,
      });

      setPhotoUrl(photo.webPath ?? '');
    } catch (err) {
      console.error(err);
      setError('Could not open camera');
    }

    setLoading(false);
  };

  const pickFromGallery = async () => {
    setLoading(true);
    setError('');

    try {
      const photo = await Camera.getPhoto({
        quality: 90,
        allowEditing: false,
        resultType: CameraResultType.Uri,
        source: CameraSource.Photos,
      });

      setPhotoUrl(photo.webPath ?? '');
    } catch (err) {
      console.error(err);
      setError('Could not open gallery');
    }

    setLoading(false);
  };

  const clearPhoto = () => {
    setPhotoUrl('');
    setError('');
  };

  if (!isNative) {
    return (
      <IonCard className="camera-card">
        <IonCardContent>
          <IonText>
            <p>Open on Android device or emulator to use the camera.</p>
          </IonText>
        </IonCardContent>
      </IonCard>
    );
  }

  return (
    <div className="camera-page">
      <IonCard className="camera-card">
        <IonCardContent>
          <IonButton
            expand="block"
            onClick={takePhoto}
            disabled={loading}
          >
            Take photo
          </IonButton>
          <IonButton
            expand="block"
            fill="outline"
            onClick={pickFromGallery}
            disabled={loading}
          >
            Pick from gallery
          </IonButton>

          {error && (
            <IonText color="danger">
              <p className="camera-error">{error}</p>
            </IonText>
          )}

          {photoUrl && (
            <div className="camera-preview">
              <IonImg src={photoUrl} alt="Selected photo" />
              <IonButton expand="block" fill="clear" onClick={clearPhoto}>
                Clear
              </IonButton>
            </div>
          )}
        </IonCardContent>
      </IonCard>
    </div>
  );
};

export default CameraPage;
