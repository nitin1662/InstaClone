export default function Suggestions() {
  return (
    <div className="hidden lg:block w-80 ml-8 mt-8">
      
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <img
            src="https://i.pravatar.cc/150?img=1"
            className="w-10 h-10 rounded-full"
          />
          <div>
            <p className="font-semibold text-sm">your_username</p>
            <p className="text-xs text-gray-400">Your Name</p>
          </div>
        </div>
        <span className="text-blue-500 text-xs font-semibold cursor-pointer">
          Switch
        </span>
      </div>

      <div className="flex justify-between text-sm mb-3">
        <p className="text-gray-500 font-semibold">Suggestions For You</p>
        <p className="font-semibold cursor-pointer">See All</p>
      </div>

      {[1,2,3,4,5].map((i) => (
        <div key={i} className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-3">
            <img
              src={`https://i.pravatar.cc/150?img=${i + 20}`}
              className="w-8 h-8 rounded-full"
            />
            <p className="text-sm font-semibold">user_{i}</p>
          </div>
          <span className="text-blue-500 text-xs font-semibold cursor-pointer">
            Follow
          </span>
        </div>
      ))}
    </div>
  );
}
