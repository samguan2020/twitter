import { SparklesIcon } from "@heroicons/react/solid"
import Input from "./Input"
import Post from "./Post"

export default function Feed() {
  const posts = [
    {
      id: "1",
      name: "Sam Guan",
      username: "samguan@gmail.com",
      userImg: "https://avatars.githubusercontent.com/u/63484729?v=4",
      img: "https://images.unsplash.com/photo-1660894990945-041f5550b134?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      text: "Nice Chrescent",
      timestamp: "2 hours ago",
    },
    {
      id: "2",
      name: "Sam Guan",
      username: "samguan@gmail.com",
      userImg: "https://avatars.githubusercontent.com/u/63484729?v=4",
      img: "https://images.unsplash.com/photo-1660934152999-a7f8bef7daf1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      text: "Night View",
      timestamp: "2 days ago",
    },
  ]
  return (
    <div className="xl:ml-[370px] border-l border-r border-gray-200  xl:min-w-[576px] sm:ml-[73px] flex-grow max-w-xl">
      <div className="flex py-2 px-3 sticky top-0 z-50 bg-white border-b border-gray-200">
        <h2 className="text-lg sm:text-xl font-bold cursor-pointer">Home</h2>
        <div className="hoverEffect flex items-center justify-center px-0 ml-auto w-9 h-9">
          <SparklesIcon className="h-5" />
        </div>
      </div>
      <Input />
      {posts.map((post) => (
        <Post key={post.id} id={post.id} post={post} />
      ))}
    </div>
  )
}
