import ChatInputForm from "./ChatInputForm";
import TextLeft from "./TextLeft";
import TextRight from "./TextRight";
import ChatProfile from "./ChatProfile";

const Chat = () => {
  /**
   * TODO: Chat app functionality.
   */
  return (
    <div className="flex h-full flex-col rounded-[20px] p-12 shadow-primary">
      <ChatProfile />

      {/* CHAT SECTION */}
      <div className="mb-4 flex grow flex-col-reverse space-y-2">
        <div>
          <TextRight message="I am good and how about you?" time="09:00 AM" />
          <TextRight message="I am good and how about you?" time="09:00 AM" />
          <TextLeft message="I am good and how about you?" time="09:00 AM" />
          <TextRight message="I am good and how about you?" time="09:00 AM" />
          <TextRight message="I am good and how about you?" time="09:00 AM" />
          <TextLeft message="I am good and how about you?" time="09:00 AM" />
          <TextRight message="I am good and how about you?" time="09:00 AM" />
        </div>
      </div>

      <div className="">
        <ChatInputForm />
      </div>
    </div>
  );
};

export default Chat;
