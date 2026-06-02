import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonSkeletonText,
} from '@ionic/react';
import './PostCardImage.css';
import './PostCardSkeleton.css';

const PostCardSkeleton: React.FC = () => (
  <IonCard className="post-card post-card--skeleton">
    <div className="post-image-wrap">
      <IonSkeletonText animated className="post-image-skeleton" />
    </div>
    <IonCardHeader>
      <IonSkeletonText animated className="post-skeleton-chip" />
      <IonSkeletonText animated className="post-skeleton-title" />
      <IonSkeletonText
        animated
        className="post-skeleton-title post-skeleton-title--short"
      />
    </IonCardHeader>
    <IonCardContent>
      <IonSkeletonText animated className="post-skeleton-line" />
      <IonSkeletonText animated className="post-skeleton-line" />
      <IonSkeletonText
        animated
        className="post-skeleton-line post-skeleton-line--short"
      />
    </IonCardContent>
  </IonCard>
);

export default PostCardSkeleton;
