import Image from "next/image";
import Email from "@/app/icons/email";
import OrcId from "@/app/icons/orcid";

const Profile = () => {
  return (
    <div className="space-y-5 flex flex-col items-center min-w-[280px]">
      <Image className="rounded-full" src="/avatar.jpg" alt="A" width="250" height="250"/>
      <div className="w-full flex flex-col">
        <span className="text-2xl font-bold">Evan Luo</span>
        <span className="text-xl text-gray-400">Ziyun Luo · he/him</span>
        <div className="space-y-0 flex flex-col">
            <span className="mt-2">
              SHPH 25&#39;
            </span>
          <span>
              Computer Graphics enthusiast.
            </span>
        </div>
        <div className="flex flex-col mt-3">
          <div className="flex space-x-2 items-center">
            <Email/>
            <span className="text-sm">ziyun.luo@fastmail.com</span>
          </div>
          <div className="flex space-x-2 items-center">
            <OrcId/>
            <span className="text-sm">https://orcid.org/0009-0004-0803-7307</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;