import connectDb from "@/lib/db";
import Post from "@/models/Post";
import { redirect } from "next/navigation";

export default async function EditPost({ params }) {
  const { id: postId } = await params;
  await connectDb();
  const post = await Post.findOne({ _id: postId });
  const updatePost = async (formData) => {
    "use server";
    const title = formData.get("title");
    const content = formData.get("content");

    await connectDb();
    await Post.updateOne({ _id: postId }, { title, content });

    redirect("/");
  };

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6">Update Blog</h1>
      <form action={updatePost} className="bg-white shadow-md rounded p-6">
        <div className="mb-4">
          <label htmlFor="title" className="block text-gray-700">
            Title:
          </label>
          <input
            type="text"
            id="title"
            name="title"
            defaultValue={post.title}
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="Enter blog title"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="content" className="block text-gray-700">
            Content:
          </label>
          <textarea
            id="content"
            name="content"
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="Enter blog content"
            rows={6}
            defaultValue={post.content}
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Update Blog
        </button>
      </form>
    </div>
  );
}
