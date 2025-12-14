import Sidebar from "../components/Sidebar";
import Stories from "../components/Stories";
import Post from "../components/Post";
import Suggestions from "../components/Suggestions";

export default function Home() {
  return (
    <div className="flex bg-gray-50 min-h-screen">
      {/* Left Sidebar */}
      <Sidebar />

      {/* Center + Right */}
      <div className="flex w-full justify-center lg:ml-[240px]">
        
        {/* Feed */}
        <div className="w-full max-w-[470px] mt-6 px-2">
          <Stories />
          <Post />
          <Post />
          <Post />
        </div>

        {/* Right Suggestions */}
        <div className="hidden lg:block ml-10 mt-6 w-[320px]">
          <Suggestions />
        </div>

      </div>
    </div>
  );
}
