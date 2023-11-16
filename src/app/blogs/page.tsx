// pages/blogs.tsx

import BlogList from "@/components/blogs/blog-list";
import { NextPage, GetServerSideProps } from "next";
import { Blog } from "@/components/utils/types";

interface BlogsProps {
  blogPostsList: Blog[];
}

const Blogs: NextPage<BlogsProps> = ({ blogPostsList }) => {
  return <BlogList lists={blogPostsList} />;
};

export const getServerSideProps: GetServerSideProps<BlogsProps> = async () => {
  try {
    const res = await fetch(`${process.env.URL}/api/blog-post/get-all-post`, {
      method: "GET",
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error(`Failed to fetch data. Status: ${res.status}`);
    }

    const data = await res.json();

    if (!data.success) {
      throw new Error(`Failed to fetch data. Message: ${data.message}`);
    }

    return {
      props: {
        blogPostsList: data.data as Blog[],
      },
    };
  } catch (error: any) {
    // Explicitly specify the type of 'error' as 'any'
    console.error("Error fetching data:", error.message);
    return {
      props: {
        blogPostsList: [],
      },
    };
  }
};

export default Blogs;
