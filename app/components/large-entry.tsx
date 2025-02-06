import Image from "next/image";

const LargeEntry = () => {
  return (
    <div className="flex space-x-5">
      <div className="prose-sm lg:prose-lg prose-headings:mt-0 prose-headings:mb-3">
        <h2>The Taichi High-Performance and Differentiable Programming Language for Sparse and Quantized Visual Computing</h2>
        <h3>MIT EECS Ph.D. thesis</h3>
        <p>Everything about the Taichi programming language.</p>
      </div>
      <Image src="/avatar.jpg" alt="A" width={300} height={0} className="hidden lg:block"/>
    </div>
  );
}

export default LargeEntry;