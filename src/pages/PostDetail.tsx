import { useEffect, useState } from 'react';
import { IonButton, IonCard, IonCardContent, IonText } from '@ionic/react';
import { useParams } from 'react-router-dom';
import PostDetailAuthorCard from '../components/post-detail/PostDetailAuthorCard';
import PostDetailCommentsList from '../components/post-detail/PostDetailCommentsList';
import PostDetailHero from '../components/post-detail/PostDetailHero';
import PostDetailPostCard from '../components/post-detail/PostDetailPostCard';
import PostDetailSkeleton from '../components/post-detail/PostDetailSkeleton';
import Comment from '../type/comment';
import PostType from '../type/post';
import User from '../type/user';
import './PostDetail.css';

const PostDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  const [post, setPost] = useState<PostType | null>(null);
  const [user, setUser] = useState<User | null>(null);
  const [comments, setComments] = useState<Comment[]>([]);
  const [imageUrl, setImageUrl] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const loadData = async () => {
    if (!id) {
      setError('Invalid post id');
      setLoading(false);
      return;
    }

    setLoading(true);
    setError('');

    try {
      const postRes = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${id}`,
      );
      const postData: PostType = await postRes.json();
      setPost(postData);
      setImageUrl(`https://picsum.photos/seed/post-${postData.id}/400/200`);

      const userRes = await fetch(
        `https://jsonplaceholder.typicode.com/users/${postData.userId}`,
      );
      const userData: User = await userRes.json();
      setUser(userData);

      const commentRes = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${id}/comments`,
      );
      const commentData: Comment[] = await commentRes.json();
      setComments(commentData);
    } catch (err) {
      console.error(err);
      setError('Failed to load post');
      setPost(null);
    }

    setLoading(false);
  };

  useEffect(() => {
    loadData();
  }, [id]);

  if (loading) {
    return <PostDetailSkeleton />;
  }

  if (error || !post || !user) {
    return (
      <IonCard className="post-detail-error">
        <IonCardContent>
          <IonText color="danger">
            <p>{error || 'Post not found'}</p>
          </IonText>
          <IonButton expand="block" onClick={loadData}>
            Retry
          </IonButton>
        </IonCardContent>
      </IonCard>
    );
  }

  return (
    <div className="post-detail">
      <PostDetailHero imageUrl={imageUrl} alt={post.title} />
      <PostDetailPostCard post={post} />
      <PostDetailAuthorCard user={user} />
      <PostDetailCommentsList comments={comments} />
    </div>
  );
};

export default PostDetail;
