export default function Profile() {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="flex items-center gap-10">
        <img
          src="https://i.pravatar.cc/150"
          className="rounded-full w-32"
        />

        <div>
          <h2 className="text-xl mb-4">john_doe</h2>
          <div className="flex gap-6 text-sm">
            <span><b>12</b> posts</span>
            <span><b>230</b> followers</span>
            <span><b>180</b> following</span>
          </div>
          <button className="mt-4 px-6 py-1 border rounded text-sm">
            Follow
          </button>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-2 mt-10">
        {[...Array(9)].map((_, i) => (
          <img
            key={i}
            src={`https://source.unsplash.com/300x300/?travel&${i}`}
          />
        ))}
      </div>
    </div>
  );
}
