import PostCardImage from '../post/PostCardImage';

type PostDetailHeroProps = {
  imageUrl: string;
  alt: string;
};

const PostDetailHero: React.FC<PostDetailHeroProps> = ({ imageUrl, alt }) => (
  <div className="post-detail-hero">
    <PostCardImage src={imageUrl} alt={alt} />
  </div>
);

export default PostDetailHero;
