import { IonCol } from '@ionic/react';
import PostCardSkeleton from './PostCardSkeleton';

const POST_COL_PROPS = {
  size: '12',
  sizeSm: '12',
  sizeMd: '6',
  sizeLg: '4',
  sizeXl: '3',
  className: 'ion-col',
} as const;

type PostSkeletonGridProps = {
  count: number;
  keyPrefix: string;
};

const PostSkeletonGrid: React.FC<PostSkeletonGridProps> = ({
  count,
  keyPrefix,
}) => (
  <>
    {Array.from({ length: count }, (_, index) => (
      <IonCol key={`${keyPrefix}-${index}`} {...POST_COL_PROPS}>
        <PostCardSkeleton />
      </IonCol>
    ))}
  </>
);

export default PostSkeletonGrid;
export { POST_COL_PROPS };
