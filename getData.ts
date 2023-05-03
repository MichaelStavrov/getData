interface Post {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

const COMMENTS_URL = 'https://jsonplaceholder.typicode.com/comments';

const getData = async (url: string): Promise<Post[]> => {
  const resp = await fetch(url);
  const data = resp.json();

  return data;
};

getData(COMMENTS_URL).then((posts) => {
  posts.forEach((post) => {
    console.log(`ID: ${post.id}, Email: ${post.email}`);
  });
});
