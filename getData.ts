interface Post {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

const COMMENTS_URL = 'https://jsonplaceholder.typicode.com/comments';

const getData = async <T>(url: string): Promise<T> => {
  const resp = await fetch(url);
  const data = await resp.json();

  return data;
};

getData<Post[]>(COMMENTS_URL).then((posts) => {
  posts.forEach((post) => {
    console.log(`ID: ${post.id}, Email: ${post.email}`);
  });
});
