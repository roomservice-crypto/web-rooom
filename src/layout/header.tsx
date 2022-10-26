import Logo from "@/svgs/logo.svg";

export default function Header() {
  return (
    <header className="absolute top-0 left-0 right-0 flex justify-between px-[104px] py-3 text-white">
      <span>
        <Logo />
      </span>

      <div className="flex gap-x-6 font-semibold items-center">
        <button className="font-popp bg-opacity-10 bg-white py-[10px] px-4 rounded-[99px] border border-opacity-20 border-white">
          Get your own room
        </button>
      </div>
    </header>
  );
}
