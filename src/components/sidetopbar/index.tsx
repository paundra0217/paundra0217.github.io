import { PropsWithChildren } from "react";

export default function SideTopBar({
  name,
  role,
  about,
}: PropsWithChildren<{
  name: string;
  role: string;
  about: string;
}>) {
  return (
    <div className="xl:w-[420px] shrink-0">
      <div className="bg-white bg-opacity-5 xl:h-screen w-full lg:sticky lg:top-0 p-12 flex flex-col gap-6 shrink-0">
        <div>
          <p className="text-[32px] font-bold leading-tight">
            {name}
          </p>
          <p className="text-[20px] leading-tight text-[#8FFF00]">
            {role}
          </p>
        </div>
        <div>
          <p className="text-[14px] leading-tight">{about}</p>
        </div>
      </div>
    </div>
  );
}
