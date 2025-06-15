import { IoEllipsisVertical } from "react-icons/io5";

const ChatProfile = () => {
  return (
    <div className="flex items-center justify-between border-b pb-6">
      {/* Profile left */}
      <div className="flex items-center gap-7">
        <div className="relative h-16 w-16">
          <img
            src="/public/profile-img/person-2.png"
            alt=""
            className="h-full w-full object-cover"
          />
          <div className="absolute right-0 bottom-0 h-4 w-4 rounded-full bg-accent-01"></div>
        </div>
        <div className="font-secondary">
          <p className="text-2xl font-semibold">Swati</p>
          <p className="text-sm">Online</p>
        </div>
      </div>
      {/* Profile right */}
      <div className="cursor-pointer text-2xl text-primary">
        <IoEllipsisVertical />
      </div>
    </div>
  );
};

export default ChatProfile;
