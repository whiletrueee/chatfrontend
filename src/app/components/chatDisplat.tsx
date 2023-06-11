export default function ChatDisplay() {
  return (
    <div className="w-[40%] h-[80vh] border-4 border-green-800">
      <div className="px-4 py-2 flex flex-col gap-5">
        <div className="flex justify-between items-center">
          <div className="">
            <div className="text-lg font-semibold text-green-600">Name</div>
            <div className="text-base opacity-40 text-green-600 font-medium">
              Last Text
            </div>
          </div>
          <div className="bg-green-500 px-1 rounded-full font-black text-black">
            online
          </div>
        </div>
        <div className="flex justify-between items-center">
          <div className="">
            <div className="text-lg font-semibold text-green-600">Name</div>
            <div className="text-base opacity-40 text-green-600 font-medium">
              Last Text
            </div>
          </div>
          <div className="bg-green-500 px-1 rounded-full font-black text-black">
            online
          </div>
        </div>
      </div>
    </div>
  );
}
