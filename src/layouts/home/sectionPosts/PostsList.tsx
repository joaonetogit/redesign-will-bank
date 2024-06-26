import { Posts } from '@/constants/posts';
import CardPost from '@/layouts/home/sectionPosts/CardPost';

export default function PostsList() {
  return (
    <div className="flex items-center justify-center gap-8">
      {Posts.map((post, index) => (
        <CardPost
          key={index}
          thumb={post.thumb}
          category={post.category}
          title={post.title}
          link={post.link}
        />
      ))}
    </div>
  );
}
