import { getPost } from "@/lib/post";
import { notFound } from "next/navigation";
import React from "react";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { ja } from "date-fns/locale";
import { format } from "date-fns";

type Params = {
  params: Promise<{ id: string }>;
};
const PostPage = async ({ params }: Params) => {
  const { id } = await params;
  const post = await getPost(id);
  if (!post) {
    notFound();
  }
  return (
    <div className="container mx-auto px-4 py-8">
      <Card className="max-w-3xl mx-auto">
        {post.topImage && (
          <div className="relative w-full h-64 lg:h-96">
            <Image
              src={post.topImage}
              alt={post.title}
              fill
              className="rounded-t-md object-cover"
              priority
              sizes="100vw"
            />
          </div>
        )}
        <CardHeader>
          <div className="flex justify-between items-center mb-4 ">
            <p className="text-sm text-gray-500">投稿者:{post.author.name}</p>
            <time className="text-sm text-gray-500">{format(new Date(post.createdAt),'yyyy年MM月dd日',{locale:ja})}</time>
          </div>
          <CardTitle className="text-3xl font-bold">{post.title}</CardTitle>
        </CardHeader>
        <CardContent>
          {post.content}
        </CardContent>
      </Card>
    </div>
  );
};

export default PostPage;
