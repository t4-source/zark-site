import HomeClient from "./_home/HomeClient";
import { listBlogs } from "@/lib/blogs";

export const revalidate = 60;

export default async function Home() {
  const blogs = await listBlogs({ status: "published" });
  return <HomeClient blogs={blogs} />;
}
