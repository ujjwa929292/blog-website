import axios from "axios";

export async function fetchPosts() {
  try {
    const response = await axios.get("http://localhost:5000/blogs");
    return response.data;
  } catch (error) {
    console.error("Error fetching posts:", error);
    return [];
  }
}

export async function createPost(title, content, image) {
  try {
    const formData = new FormData();
    formData.append("title", title);
    formData.append("content", content);
    formData.append("image", image);

    await axios.post("http://localhost:5000/blogs", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  } catch (error) {
    throw new Error(error.response.data.error || "Failed to create post");
  }
}