export default function Post() {
  return (
    <div className="bg-white border rounded mb-6">
      
      {/* Header */}
      <div className="flex items-center justify-between p-3">
        <div className="flex items-center gap-3">
          <img
            src="https://i.pravatar.cc/40?img=12"
            className="w-8 h-8 rounded-full"
          />
          <span className="text-sm font-semibold">calvarymagazine</span>
        </div>
        <span className="cursor-pointer">⋮</span>
      </div>

      {/* Image */}
      <img
        src="/posts/post1.jpg"
        className="w-full object-cover"
      />

      {/* Actions */}
      <div className="p-3">
        <div className="flex gap-4 text-xl mb-2 cursor-pointer">
          ❤️ 💬 📤
        </div>

        <p className="text-sm font-semibold mb-1">
          Liked by calvarymv and others
        </p>

        <p className="text-sm">
          <span className="font-semibold">calvarymagazine</span>{" "}
          AS IRON SHARPENS IRON ~ SOCAL MEN’S CONFERENCE...
        </p>

        <p className="text-xs text-gray-500 mt-1">View all comments</p>
        <p className="text-xs text-gray-400 mt-1">3 DAYS AGO</p>

        <input
          placeholder="Add a comment..."
          className="w-full border-t mt-3 pt-2 text-sm outline-none"
        />
      </div>

    </div>
  );
}
