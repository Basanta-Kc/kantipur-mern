import connectDb from "@/lib/db";
import Post from "@/models/Post";
import { NextResponse } from "next/server";

export async function DELETE(request, { params }) {
  await connectDb();
  await Post.deleteOne({ _id: params.id });
  return NextResponse.json({
    message: "Post deleted succesfully.",
  });
}

export async function PUT(request, { params }) {
  await connectDb();
  const data = await request.json();
  await Post.updateOne({ _id: params.id }, data);
  return NextResponse.json({
    message: "Post updated succesfully.",
  });
}
