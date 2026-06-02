import {
  IonAvatar,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonChip,
  IonLabel,
  IonText,
} from '@ionic/react';
import PostType from '../../type/post';
import PostCardImage from './PostCardImage';

type PostCardProps = {
  post: PostType;
  onClick: () => void;
};

const PostCard: React.FC<PostCardProps> = ({ post, onClick }) => (
  <IonCard className="post-card" onClick={onClick}>
    {post.imageUrl && <PostCardImage src={post.imageUrl} alt={post.title} />}

    <IonCardHeader>
      <IonCardSubtitle>
        <IonChip className="post-author-chip">
          <IonAvatar>
            <img
              alt=""
              src="https://ionicframework.com/docs/img/demos/avatar.svg"
            />
          </IonAvatar>
          <IonLabel>{post.authorName}</IonLabel>
        </IonChip>
      </IonCardSubtitle>

      <IonCardTitle className="post-title">{post.title}</IonCardTitle>
    </IonCardHeader>

    <IonCardContent>
      <IonText className="post-body">
        <p>{post.body}</p>
      </IonText>
    </IonCardContent>
  </IonCard>
);

export default PostCard;
