import Entry from "@/app/components/entry";
import {getEntries} from "@/app/api/entry";

interface EntryListProps {
  title: string;
  name: string;
}

const EntryList = ({ title, name }: EntryListProps) => {
  const entries = getEntries(name);
  return (
    <div className="space-y-3 flex-1">
      <h3 className="text-2xl font-bold" id={name}>{title}</h3>
      <div className="space-y-2">
        {entries.map(entry => (
          <Entry
            key={entry.name}
            name={entry.name}
            duration={entry.duration}
            at={entry.at}
          />
        ))}
      </div>
    </div>
  );
}

export default EntryList;