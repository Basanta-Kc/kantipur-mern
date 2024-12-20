import PostList from "@/components/PostList";
import { Suspense } from "react";
import Loading from "./loading";

export default function Home() {
  return (
    <>
      <div className="container mx-auto p-8">
        <h1 className="text-4xl font-bold mb-6">Blog Posts</h1>
        <div className="space-y-4">
          <Suspense fallback={<Loading />}>
            <PostList />
          </Suspense>
        </div>
      </div>
    </>
  );
}
// paht = '/details/:id' conpoent = ""
