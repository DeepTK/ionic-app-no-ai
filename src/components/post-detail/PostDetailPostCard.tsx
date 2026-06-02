import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonText,
} from '@ionic/react';
import PostType from '../../type/post';

type PostDetailPostCardProps = {
  post: PostType;
};

const PostDetailPostCard: React.FC<PostDetailPostCardProps> = ({ post }) => (
  <IonCard className="post-detail-card">
    <IonCardHeader>
      <IonCardTitle className="post-detail-title">{post.title}</IonCardTitle>
    </IonCardHeader>
    <IonCardContent>
      <IonText className="post-detail-body">
        <p>{post.body}</p>
      </IonText>
    </IonCardContent>
  </IonCard>
);

export default PostDetailPostCard;
