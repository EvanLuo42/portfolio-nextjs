import {getMarkdown} from "@/app/api/markdown";

const About = async () => {
  const content = await getMarkdown("about");
  return (
    <div className="prose-lg lg:prose-xl text-justify hyphens-auto" dangerouslySetInnerHTML={{__html: content}}/>
  );
}

export default About;