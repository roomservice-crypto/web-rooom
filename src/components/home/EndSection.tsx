import Key from "@/svgs/key.svg";
import Elements from "@/svgs/elements-plus.svg";
import Transform from "@/svgs/transform.svg";
import Discord from "@/svgs/discord.svg";
import Twiiter from "@/svgs/twitter.svg";
import Button from "@/components/common/Button";

export default function EndSection() {
  return (
    <>
      <section className="bg-[#FDF8E4]">
        <div className="w-[1440px] mx-auto px-20 py-16 flex justify-between">
          <div className="w-[410px]">
            <Key />
            <h3 className="mt-6 font-unbounded font-[900] leading-[36px] text-[30px]">
              Emphasize Ownership
            </h3>
            <p className=" font-[500] leading-[24px] mt-4 opacity-60">
              Room Service is designed to build a personal environment to build
              your own content, where everyone owns and controls their own room
            </p>
          </div>
          <div className="w-[410px]">
            <Elements />
            <h3 className="mt-6 font-unbounded font-[900] leading-[36px] text-[30px]">
              Provide Composability
            </h3>
            <p className=" font-[500] leading-[24px] mt-4 opacity-60">
              Room Service provides a series of room infrastructure components,
              which will appear in various rooms in free combination
            </p>
          </div>
          <div className="w-[410px]">
            <Transform />
            <h3 className="mt-6 font-unbounded font-[900] leading-[36px] text-[30px]">
              Advocate Interoperability
            </h3>
            <p className=" font-[500] leading-[24px] mt-4 opacity-60">
              In addition to realizing interoperability between multiple chains,
              it also aims to allow game assets to interoperate between
              ecosystems
            </p>
          </div>
        </div>
      </section>
      <section className="bg-[#F8DA1B]">
        <div className="w-[1440px] mx-auto p-20">
          <h1 className=" font-unbounded font-[900] text-[60px]">
            Start owning your private room For Free Now
          </h1>
          <Button className="mt-8" light>
            Get your own room
          </Button>
        </div>
      </section>
      <footer className="bg-[#0A0517] text-[#F8DA1B]">
        <div className="w-[1440px] mx-auto px-20 py-16 flex items-center">
          <span className="font-unbounded font-[900] text-[36px] leading-[42px]">
            ROOMSERVICE
          </span>

          <span className="ml-auto flex border border-[#FAE9A2] p-4 rounded-full items-center">
            <Discord className="mr-2" />
            Join our discord
          </span>
          <span className="flex border border-[#FAE9A2] p-4 rounded-full ml-4 items-center">
            <Twiiter className="mr-2" />
            Follow us on Twitter
          </span>
        </div>
      </footer>
    </>
  );
}
