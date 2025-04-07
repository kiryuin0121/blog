import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import { PostCardProps } from "@/types/post";
import {formatDistanceToNow} from 'date-fns';
import {ja} from 'date-fns/locale'
import Image from "next/image";

const PostCard = ({post}:PostCardProps) => {
  return (
    <div>
      <Card className="hover:shadow-lg transition-sh">
        <Link href={`/posts/${post.id}`}>
          {post.topImage&&(
            <div className="relative w-full h-48">
              <Image
              src={post.topImage}
              alt={post.title}
              fill
              className="rounded-t-md object-cover"
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            </div>
          )}
          <CardHeader className="my-4">
            <CardTitle className="line-clamp-2">{post.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-600 mb-1 line-clump-2">{post.content}</p>
            <div className="flex items-center justify-between text-sm text-gray-500 pt-4">
              <span>{post.author.name}</span>
              <time>{formatDistanceToNow(new Date(post.createdAt),{addSuffix:true,locale:ja})}</time>
            </div>
          </CardContent>
        </Link>
      </Card>
    </div>
  );
};

export default PostCard;
