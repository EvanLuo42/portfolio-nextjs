import Entry from "@/app/components/entry";
import Profile from "@/app/components/profile";
import About from "@/app/components/about";
import EntryList from "@/app/components/entry-list";

export default function Home() {
  return (
    <div className="space-y-10 md:space-y-20">
      <div className="flex flex-col justify-center items-center space-y-10 md:flex md:flex-row md:space-x-20">
        <Profile/>
        <About/>
      </div>
      <div className="flex flex-col space-y-10 md:space-y-0 md:flex-row">
        <EntryList title="Educations" name="educations"/>
        <EntryList title="Experience" name="experience"/>
      </div>
    </div>
  );
}
