import Tag from "@/components/common/Tag";
import Button from "../common/Button";

export default function LockedCard() {
  return (
    <section>
      <div className="flex">
        <div className="flex-1 flex justify-end bg-[#0A0517]">
          <div className="w-[720px] px-[77px] py-[188px]">
            <img
              src="/assets/home/feature/01.png"
              className="top-[188px] sticky"
            />
          </div>
        </div>
        <div className="flex-1 bg-[#B9A9FB]">
          <div className="w-[720px]">
            <div className="p-20">
              <h3 className="font-unbounded font-[900] text-[60px] leading-[64px]">
                Personalize own on-chain space and socialize with friends
              </h3>
              <p className="font-medium text-lg leading-6 mt-[156px]">
                Once you've created your own room, you can start personalizing
                it for free. Show all the information you want and invite
                friends into the space to start socializing with you!
              </p>
              <div className="flex flex-wrap gap-2 mt-4 w-[444px]">
                <Tag>Socialize</Tag>
                <Tag>Posts & Gallery</Tag>
                <Tag>Profile Skin</Tag>
                <Tag>Reputation</Tag>
                <Tag>Data Space</Tag>
              </div>
              <Button className="mt-12 font-bold">Explore Demo</Button>
            </div>
            <div className="p-20">
              <h3 className="font-unbounded font-[900] text-[60px] leading-[64px]">
                Easily Customize your on-chain paradise without coding
              </h3>
              <p className="font-medium text-lg leading-6 mt-[156px]">
                From now on, you can easily customize your on-chain room to look
                anything you want with no restrictions, and it's always owned
                and controlled by you.
              </p>
              <div className="flex flex-wrap gap-2 mt-4 w-[444px]">
                <Tag>Posts & Gallery</Tag>
                <Tag>Campaigns</Tag>
                <Tag>NFT Bundle</Tag>
                <Tag>Data Space</Tag>
              </div>
              <Button className="mt-12 font-bold">Try Demo</Button>
            </div>
            <div className="p-20">
              <h3 className="font-unbounded font-[900] text-[60px] leading-[64px]">
                Composite room that communicates directly with target users
              </h3>
              <p className="font-medium text-lg leading-6 mt-[156px]">
                As a project party, you can publish the latest news about the
                project, recruitment information, display relevant token/NFT
                data, and launch various marketing activities in the room. And
                these are fast, composite, and blockchain-secured (compared to
                Twitter).
              </p>

              <Button className="mt-12 font-bold">Explore Demo</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
