import Profile from "@/app/components/profile";
import About from "@/app/components/about";
import EntryList from "@/app/components/entry-list";
import LargeEntry from "@/app/components/large-entry";

export default function Home() {
  return (
    <div className="space-y-10 lg:space-y-20">
      <div className="flex flex-col justify-center items-center space-y-10 lg:flex lg:flex-row lg:space-x-20">
        <Profile/>
        <About/>
      </div>
      <div className="flex flex-col space-y-10 lg:space-y-0 lg:flex-row">
        <EntryList title="Educations" name="educations"/>
        <EntryList title="Experience" name="experience"/>
      </div>
      <div>
        <h3 className="text-2xl font-bold">Research</h3>
        <LargeEntry/>
      </div>
    </div>
  );
}
