import { useState } from 'react';
import { IonImg, IonSkeletonText } from '@ionic/react';
import './PostCardImage.css';

type PostCardImageProps = {
  src: string;
  alt: string;
};

const PostCardImage: React.FC<PostCardImageProps> = ({ src, alt }) => {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);

  return (
    <div className="post-image-wrap">
      {!loaded && !error && (
        <IonSkeletonText animated className="post-image-skeleton" />
      )}
      {!error && (
        <IonImg
          src={src}
          alt={alt}
          className={`post-image${loaded ? ' post-image--loaded' : ''}`}
          onIonImgDidLoad={() => setLoaded(true)}
          onIonError={() => setError(true)}
        />
      )}
      {error && <div className="post-image-fallback">Image unavailable</div>}
    </div>
  );
};

export default PostCardImage;
