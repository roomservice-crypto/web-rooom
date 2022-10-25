import Spline from "@splinetool/react-spline";

export default function HeroScene() {
  return (
    <div
      className="mx-auto"
      style={{
        background:
          "linear-gradient(204.64deg, #4F46E5 15.72%, #A855F7 84.28%)",
      }}
    >
      <div className="pt-[120px] w-[1022px] mx-auto text-white">
        <h1 className="text-[60px] font-popp font-semibold text-center">
          The easiest way to build your own Web3 on-chain space
        </h1>
        <p className="mt-6 opacity-60 text-lg font-popp text-center">
          Room Service is the protocol that powers Web3 room facilities,
          enabling users to build, launch and host their own blockchain-based
          spaces without any coding experience.
        </p>
        <div className="text-center mt-8">
          <button className="font-popp bg-[#0A0517] py-4 px-6 rounded-[99px]">
            Explore Demo
          </button>
          <button className="ml-[20px] font-popp bg-opacity-10 bg-white py-4 px-6 rounded-[99px] border border-opacity-20 border-white">
            Learn More
          </button>
        </div>
      </div>

      <div className="w-full h-[100vh]">
        <Spline scene="https://prod.spline.design/MRt17A31cw5xjn5J/scene.splinecode" />
      </div>
    </div>
  );
}
