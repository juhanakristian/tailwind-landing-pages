import Image from "next/image";

export default function Profile() {
  return (
    <div className="flex gap-4 p-2 text-white bg-gray-600 rounded-md">
      <img
        className="object-cover rounded-full w-14 h-14"
        src="/images/profile.png"
        alt="Juhana Jauhiainen"
      />
      <ul className="flex flex-col pr-5">
        <li class="text-gray-300">Juhana Jauhiainen</li>
        <li class="h-5 flex gap-2">
          <Image src="/icons/twitter.svg" height={12} width={12} />
          <a
            class="text-sm font-semibold"
            href="https://twitter.com/juhanakristian"
          >
            @juhanakristian
          </a>
        </li>
        <li className="flex h-5 gap-2">
          <Image src="/icons/globe.svg" height={14} width={14} />
          <a
            className="text-sm font-semibold"
            href="https://juhanajauhiainen.com"
          >
            juhanajauhiainen.com
          </a>
        </li>
      </ul>
    </div>
  );
}
