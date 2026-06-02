import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonItem,
  IonLabel,
  IonList,
  IonNote,
  IonText,
} from '@ionic/react';
import Comment from '../../type/comment';

type PostDetailCommentsListProps = {
  comments: Comment[];
};

const PostDetailCommentsList: React.FC<PostDetailCommentsListProps> = ({
  comments,
}) => (
  <IonCard className="post-detail-card">
    <IonCardHeader>
      <IonCardSubtitle>
        Comments ({comments.length})
      </IonCardSubtitle>
    </IonCardHeader>
    <IonCardContent className="ion-no-padding">
      {comments.length === 0 ? (
        <IonText color="medium" className="post-detail-empty">
          <p>No comments yet.</p>
        </IonText>
      ) : (
        <IonList lines="full">
          {comments.map((comment) => (
            <IonItem key={comment.id} className="post-detail-comment">
              <IonLabel className="ion-text-wrap">
                <h3>{comment.name}</h3>
                <IonNote>{comment.email}</IonNote>
                <p>{comment.body}</p>
              </IonLabel>
            </IonItem>
          ))}
        </IonList>
      )}
    </IonCardContent>
  </IonCard>
);

export default PostDetailCommentsList;
