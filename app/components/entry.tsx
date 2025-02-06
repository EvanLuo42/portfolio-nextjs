interface EntryProps {
  name: string;
  duration: string;
  at: string;
}

const Entry = ({ name, duration, at }: EntryProps) => {
  return (
    <div>
      <p className="text-lg">{name}, {duration}</p>
      <p className="text-gray-400">{at}</p>
    </div>
  );
}

export default Entry;