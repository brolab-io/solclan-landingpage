import Image from "next/image";
export default function Home() {
  return (
    <div className="bg-gradient-to-r from-violet-500 to-fuchsia-500">
      <Image
        src={"/assets/bg-banner.png"}
        alt="Banner"
        width={1920}
        height={971}
        className="object-cover w-full"
        priority
      />
    </div>
  );
}
