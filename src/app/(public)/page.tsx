
import PostCard from "@/components/post/PostCard";
import { getPosts } from "@/lib/post";
import { Post, PostCardProps } from "@/types/post";

export default async function PostPage() {
  const posts = await getPosts() as Post[]
  return (
    <>
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post)=>{
            return <PostCard key={post.id} post={post}/>
          })}
        </div>
      </div>
    </>
  );
}
