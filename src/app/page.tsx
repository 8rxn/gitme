import Footer from "@/components/footer";
import ProfileInput from "@/components/profile-input";
export default function Home() {
  return (
    <>
      <div className="text-gray-900 text-center text-balance dark:text-gray-50 ">
        <h1 className="font-extrabold text-7xl ">GitMe</h1>
        <h2 className="text-2xl font-semibold">
          {" "}
          Forge Your GitHub Presence with Style! 🛠️
        </h2>
        <div className="text-xs border mt-2 rounded-xl p-1 px-6 w-fit mx-auto bg-neutral-50/20 hover:bg-neutral-50/40">
          Built on Cloudflare Workers
        </div>
        <a
        href="https://www.producthunt.com/posts/gitme?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-gitme"
        target="_blank"
      >
        <img
          src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=442707&theme=dark"
          alt="GitMe - GitMe&#0058;&#0032;Forge&#0032;Your&#0032;GitHub&#0032;Presence&#0032;with&#0032;Style&#0033;&#0032;🛠️ | Product Hunt"
          style={{ width: "125px", height: "27px",margin:'auto',"marginTop":"10px" }}
          width={125}
          height="27"
          className="w-[62px] h-[18px] sm:w-[125px] sm:h-[27px]"
        />
      </a>
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

      <Footer></Footer>
    
    </>
  );
}
