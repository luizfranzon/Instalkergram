import { ArrowSquareOut } from "phosphor-react";

interface UserInfoProps {
  username: string;
  profilePicture: string;
  posts: number;
  followers: number;
  following: number;

}

export function UserInfo({ username, profilePicture ,followers, following, posts }: UserInfoProps) {
  return (
    <div className="bg-black-500 w-[80%] max-w-3xl m-auto rounded-lg p-8 flex items-center gap-9 text-4xl mt-3">
      <img className="rounded-full w-56 h-56 border-purple-500 border-4" src={profilePicture} alt="" />
      <div>
        <div className="flex flex-col items-center gap-3">
          <a target="_blank" href={`https://www.instagram.com/${username}`}>
            <h1 className="text-white font-black flex items-center relative hover:underline">
              {username} <ArrowSquareOut className="relative bottom-3" size={20}/>
            </h1>
          </a>
          <div className="text-white text-lg">
            <span className="not-italic">{posts} <span className="font-bold italic">posts</span></span>
            <span> • </span>
            <span className="not-italic">{following} <span className="font-bold italic">seguindo</span></span>
            <span> • </span>
            <span className="not-italic">{followers} <span className="font-bold italic">seguidores</span></span>
          </div>
        </div>
      </div>
    </div>
  )
}