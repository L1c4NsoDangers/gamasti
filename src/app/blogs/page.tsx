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

    const data = await res.json();

    return {
      props: {
        blogPostsList: data.success ? (data.data as Blog[]) : [],
      },
    };
  } catch (error) {
    console.error("Error fetching data:", error);
    return {
      props: {
        blogPostsList: [],
      },
    };
  }
};

export default Blogs;
