export default function Stories() {
  return (
    <div className="bg-white p-4 rounded-lg border">
      <div className="flex overflow-x-auto space-x-4 scrollbar-hide">
        {[1,2,3,4,5,6,7,8].map((i) => (
          <div key={i} className="flex flex-col items-center min-w-[70px]">
            <img
              src="https://i.pravatar.cc/100"
              alt="story"
              className="w-16 h-16 rounded-full border-2 border-pink-500"
            />
            <span className="text-xs mt-1">user{i}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
