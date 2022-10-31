import Spline from "@splinetool/react-spline";
import Logo from "@/assets/logo.svg";
import Web3 from "@/assets/Web3.svg";

export default function HeroScene() {
  return (
    <section className="h-[900px] bg-slate-100 overflow-hidden relative">
      <div className="w-[1440px] mx-auto h-full overflow-auto">
        <div className="absolute w-[2500] h-[900px] -left-[60px]">
          <Spline scene="https://prod.spline.design/MRt17A31cw5xjn5J/scene.splinecode" />
        </div>

        <div className="ml-[80px] mt-[164px] w-[655px]">
          <Logo />
          <h1 className="font-unbounded text-[60px] leading-[64px] mt-[17px]">
            <span>Customize your</span>
            <br />
            <Web3 />
            <span>wonderland and lifestyle</span>
          </h1>
          <p className="font-medium mt-4 text-lg leading-6">
            Room Service is the protocol that powers Web3 room facilities,
            enabling users to build, launch and host their own blockchain-based
            spaces without any coding experience.
          </p>
        </div>
      </div>
    </section>
  );
}
