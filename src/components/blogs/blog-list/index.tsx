"use client";

import { Blog } from "@/components/utils/types";
import SingleBlog from "../single-blog";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function BlogList({ lists }: { lists: Blog[] }) {
  const router = useRouter();
  const [isRefreshing, setIsRefreshing] = useState(false);

  useEffect(() => {
    if (isRefreshing) {
      router.refresh();
      setIsRefreshing(false);
    }
  }, [isRefreshing, router]);

  async function handleDelete(id: number) {
    try {
      // Optimistically update UI immediately
      const updatedLists = lists.filter((item) => item.id !== id);
      setLists(updatedLists);

      const res = await fetch(`/api/blog-post/delete-post?id=${id}`, {
        method: "DELETE",
        cache: "no-store",
      });

      const data = await res.json();

      if (data && data.success) {
        // Refresh only if needed, or let it update when the server responds
        setIsRefreshing(true);
      } else {
        // Revert UI back to the previous state if deletion fails
        setLists([...lists]); // Assuming you have a state for lists
        console.error("Failed to delete post:", data);
      }
    } catch (error) {
      console.error("Error while deleting post:", error);
    }
  }

  return (
    <section className="pt-[120px] pb-[120px]">
      <div className="container">
        <div className="-mx-4 grid grid-cols-1 md:grid-cols-3 gap-2">
          {lists && lists.length
            ? lists.map((listItem: Blog) => (
                <div className="px-4" key={listItem.id}>
                  <SingleBlog handleDelete={handleDelete} blogItem={listItem} />
                </div>
              ))
            : null}
        </div>
      </div>
    </section>
  );
}
function setLists(updatedLists: Blog[]) {
  throw new Error("Function not implemented.");
}
