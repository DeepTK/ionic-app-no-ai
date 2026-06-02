import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonSkeletonText,
} from '@ionic/react';
import '../post/PostCardImage.css';
import './PostDetailSkeleton.css';

const COMMENT_SKELETON_ROWS = 3;

const PostDetailSkeleton: React.FC = () => (
  <div className="post-detail">
    <div className="post-image-wrap post-detail-hero-skeleton">
      <IonSkeletonText animated className="post-image-skeleton" />
    </div>

    <IonCard>
      <IonCardHeader>
        <IonSkeletonText animated className="post-detail-skeleton-title" />
        <IonSkeletonText animated className="post-detail-skeleton-line" />
        <IonSkeletonText animated className="post-detail-skeleton-line" />
        <IonSkeletonText animated className="post-detail-skeleton-line post-detail-skeleton-line--short" />
      </IonCardHeader>
    </IonCard>

    <IonCard>
      <IonCardHeader>
        <IonSkeletonText animated className="post-detail-skeleton-subtitle" />
      </IonCardHeader>
      <IonCardContent>
        <IonSkeletonText animated className="post-detail-skeleton-line" />
        <IonSkeletonText animated className="post-detail-skeleton-line" />
      </IonCardContent>
    </IonCard>

    <IonCard>
      <IonCardHeader>
        <IonSkeletonText animated className="post-detail-skeleton-subtitle" />
      </IonCardHeader>
      <IonCardContent>
        {Array.from({ length: COMMENT_SKELETON_ROWS }, (_, index) => (
          <div key={index} className="post-detail-comment-skeleton">
            <IonSkeletonText animated className="post-detail-skeleton-line" />
            <IonSkeletonText animated className="post-detail-skeleton-line post-detail-skeleton-line--short" />
          </div>
        ))}
      </IonCardContent>
    </IonCard>
  </div>
);

export default PostDetailSkeleton;
