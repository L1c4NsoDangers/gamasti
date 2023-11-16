import BlogList from "@/components/blogs/blog-list";

async function extractAllBlogs() {
  try {
    const res = await fetch(`${process.env.URL}/api/blog-post/get-all-post`, {
      method: "GET",
      cache: "no-store",
    });

    if (!res.ok) {
      if (res.status === 404) {
        console.warn("Blogs not found. Returning empty array.");
        return [];
      } else {
        throw new Error(`Failed to fetch blogs. Status: ${res.status}`);
      }
    }

    const data = await res.json();

    if (data.success) {
      return data.data;
    } else {
      throw new Error(`Failed to retrieve blog data. Message: ${data.message}`);
    }
  } catch (error) {
    console.error("Error fetching or parsing blogs:", error);
    // Handle other errors appropriately
    return [];
  }
}

export default async function Blogs() {
  try {
    const blogPostsList = await extractAllBlogs();
    return <BlogList lists={blogPostsList} />;
  } catch (error) {
    console.error("Error in Blogs component:", error);
    // Handle error appropriately, e.g., return a default value or show an error message
    return <div>Error loading blogs</div>;
  }
}
