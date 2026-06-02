import { IonCol } from '@ionic/react';
import PostType from '../../type/post';
import PostCard from './PostCard';
import { POST_COL_PROPS } from './PostSkeletonGrid';

type PostListProps = {
  posts: PostType[];
  onPostClick: (id: number) => void;
};

const PostList: React.FC<PostListProps> = ({ posts, onPostClick }) => (
  <>
    {posts.map((post) => (
      <IonCol key={post.id} {...POST_COL_PROPS}>
        <PostCard post={post} onClick={() => onPostClick(post.id)} />
      </IonCol>
    ))}
  </>
);

export default PostList;
