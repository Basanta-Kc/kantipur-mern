import connectDb from "@/lib/db";
import Post from "@/models/Post";
import { NextResponse } from "next/server";

export async function GET() {
  await connectDb();
  const posts = await Post.find();
  return NextResponse.json(posts);
}
// app.use(espress.json())
export async function POST(request) {
  await connectDb();
  const data = await request.json();
  await Post.create(data);
  return NextResponse.json(
    {
      message: "Post created succesfully.",
    },
    {
      status: 201,
    }
  );
}
