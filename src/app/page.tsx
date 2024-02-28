import ProfileInput from "@/components/profile-input";
export default function Home() {
  return (
    <>
      <div className="text-gray-900 text-center text-balance dark:text-gray-50 ">
        <h1 className="font-extrabold text-7xl ">GitMe</h1>
        <h2 className="text-2xl font-semibold">
          {" "}
          Your personal GiHub Card Generator
        </h2>
      </div>
      <div className="flex flex-col gap-3">
        <ProfileInput></ProfileInput>
        <p className="brightness-75 text-xs">
          {" "}
          Supports Github,{" "}
          <span className="line-through group">
            Gitlab, and Bitbucket
            <span className="bg-background border p-2 rounded-lg mt-4 opacity-0 group-hover:translate-x-[-100%] group-hover:opacity-100 translate-x-[-50%] absolute transition-all ease-in">
              Because Why?
            </span>
          </span>
        </p>
      </div>
    </>
  );
}
