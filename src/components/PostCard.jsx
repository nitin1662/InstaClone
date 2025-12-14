const PostCard = ({ post }) => {
  return (
    <div className="bg-white border rounded-md mb-6">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3">
        <div className="flex items-center gap-3">
          <img
            src={post.userImage}
            alt="user"
            className="w-9 h-9 rounded-full object-cover"
          />
          <span className="font-semibold text-sm">{post.username}</span>
        </div>
        <span className="text-xl cursor-pointer">⋮</span>
      </div>

      {/* Post Image */}
      <img
        src={post.postImage}
        alt="post"
        className="w-full object-cover"
      />

      {/* Actions */}
      <div className="px-4 pt-3">
        <div className="flex gap-4 text-xl cursor-pointer">
          ❤️ 💬 📤
        </div>

        <p className="text-sm font-semibold mt-2">
          Liked by {post.likes} and others
        </p>

        <p className="text-sm mt-1">
          <span className="font-semibold">{post.username}</span>{" "}
          {post.caption}
        </p>

        <p className="text-xs text-gray-500 mt-1">
          View all comments
        </p>

        <p className="text-xs text-gray-400 mt-1">
          {post.time}
        </p>
      </div>

      {/* Comment box */}
      <div className="border-t mt-3 px-4 py-2 text-sm text-gray-400">
        Add a comment...
      </div>
    </div>
  );
};

export default PostCard;