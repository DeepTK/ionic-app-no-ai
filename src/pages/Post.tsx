import { useEffect, useState } from 'react';
import {
  IonInfiniteScroll,
  IonInfiniteScrollContent,
  IonGrid,
  IonRow,
} from '@ionic/react';
import PostList from '../components/post/PostList';
import PostSkeletonGrid from '../components/post/PostSkeletonGrid';
import PostType from '../type/post';
import User from '../type/user';
import { useHistory } from 'react-router-dom';
import './Post.css';

const Post: React.FC = () => {
  const history = useHistory();
  const POSTS_PAGE_LIMIT = 10;
  const [posts, setPosts] = useState<PostType[]>([]);
  const [userNames, setUserNames] = useState<Record<number, string>>({});
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const [isLoadingMore, setIsLoadingMore] = useState(false);

  const loadPosts = async (pageNo: number, names: Record<number, string>) => {
    const res = await fetch(
      `https://jsonplaceholder.typicode.com/posts?_limit=${POSTS_PAGE_LIMIT}&_page=${pageNo}`,
    );
    const data: PostType[] = await res.json();

    if (!data || data.length === 0) {
      setHasMore(false);
      return;
    }

    const postsWithNames = data.map((item) => ({
      ...item,
      authorName: names[item.userId] || `User ${item.userId}`,
      imageUrl: `https://picsum.photos/seed/post-${item.id}/400/200`,
    }));

    setPosts((prev) => [...prev, ...postsWithNames]);
    setPage(pageNo + 1);
  };

  useEffect(() => {
    const load = async () => {
      setIsLoading(true);
      try {
        const usersDataRes = await fetch('https://jsonplaceholder.typicode.com/users');
        const usersData: User[] = await usersDataRes.json();
        const userNames: Record<number, string> = {};
        usersData.forEach((data) => {
          userNames[data.id] = data.name;
        });
        setUserNames(userNames);
        await loadPosts(1, userNames);
      } catch (err) {
        console.error('Error loading posts:', err);
      }
      setIsLoading(false);
    };
    load();
  }, []);

  const goToDetail = (postId: number) => {
    history.push(`/post-detail/${postId}`);
  };

  return (
    <>
      <IonGrid>
        <IonRow>
          {isLoading && (
            <PostSkeletonGrid count={POSTS_PAGE_LIMIT} keyPrefix="sk-init" />
          )}

          {!isLoading && (
            <PostList posts={posts} onPostClick={goToDetail} />
          )}

          {isLoadingMore && (
            <PostSkeletonGrid count={POSTS_PAGE_LIMIT} keyPrefix="sk-more" />
          )}
        </IonRow>
      </IonGrid>

      <IonInfiniteScroll
        disabled={!hasMore || isLoading}
        onIonInfinite={async (e) => {
          setIsLoadingMore(true);
          try {
            await loadPosts(page, userNames);
          } catch (err) {
            console.error(err);
          }
          setIsLoadingMore(false);
          (e.target as HTMLIonInfiniteScrollElement).complete();
        }}
      >
        <IonInfiniteScrollContent
          loadingSpinner="bubbles"
          loadingText="Loading more posts..."
        />
      </IonInfiniteScroll>
    </>
  );
};

export default Post;
