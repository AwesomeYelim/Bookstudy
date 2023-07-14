import axios, { AxiosError, AxiosResponse } from "axios";

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

(async () => {
  try {
    const res1 = await axios.get<Post, AxiosResponse<Post>>("http://jsonplaceholder.typicode.com/posts/1");
    const res2 = await axios.post("http://jsonplaceholder.typicode.com/posts", {
      title: "foo",
      body: "bar",
      userId: 1,
    });

    const res3 = await axios({
      method: "post",
      url: "http://jsonplaceholder.typicode.com/posts",
      data: {
        title: "foo",
        body: "bar",
        userId: 1,
      },
    });

    console.log(res1.data);
  } catch (err) {
    if (err instanceof AxiosError) {
      console.log(err.response?.data);
    }
  }
})();

// const a = () => {};

// a.name = "yelim";
// a.age = 27;
// a.study = "react";

// console.log(a);
