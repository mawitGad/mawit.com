import Head from "next/head";
import { Inter } from "next/font/google";
import {
    axiosStackLogo,
    cssStackLogo,
    expresStackLogo,
    githubLogo,
    githubStackLogo,
    gitLogo,
    gitStackLogo,
    gmailLogo,
    herokuStackLogo,
    htmlStackLogo,
    jsStackLogo,
    linkedinLogo,
    mongodbLogo,
    mongodbStackLogo,
    mongooseStackLogo,
    nextLogo,
    nextStackLogo,
    nodeLogo,
    nodeStackLogo,
    prismaStackLogo,
    reactLogo,
    reactStackLogo,
    reduxStackLogo,
    scssLogo,
    scssStackLogo,
    socketIoLogo,
    socketIOStackLogo,
    tailwindLogo,
    tailwindStackLogo,
    vercelLogo,
    vercelStackLogo,
} from "@/assets/logos";
import {
    avatar,
    litumbaPreviewProject,
    litumbaPreviewProjects,
    ndoloPreviewProject,
    ndoloPreviewProjects,
    personalWebsitePreviewProject,
    personalWebsitePreviewProjects,
} from "@/assets/images";
import { BlogIcon, GithubIcon } from "@/assets/icons";
import Image from "next/image";
import { OpenIcon } from "../assets/icons";
import Link from "next/link";
import useIndex from "@/customHooks/useIndex";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
    const { saveEmail } = useIndex();

    return (
        <>
            <Head>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className='px-8 w-[100vw] max-w-[1500px] relative m-auto max-[632px]:px-[10px]'>

                {/* background blob beginning */}
                <div className='w-[60%] animate-slow-spin fixed m-auto top-0 left-0 right-0 bottom-0  aspect-square rounded-full bg-[linear-gradient(red,blue)] opacity-20 blur-lg'>

                </div>
                {/* background blob ending */}

                {/* The hero section beginning */}
                <section className=" relative h-fit max-h-[9000px]">
                    <div className="mt-[20px] flex justify-end">
                        <Link
                            href={"https://mawit.hashnode.dev/"}
                            className="text-[25px] flex items-center py-[5px] px-[10px] bg-[#5A82AC] rounded-lg header-text"
                            target={"_blank"}
                        >
                            <BlogIcon className="w-[30px] h-[30px] mr-4" />
                            <span>My blog</span>
                        </Link>
                    </div>
                    <div className="flex items-center max-[964px]:flex-col max-[964px]:my-[60px] max-[964px]:text-center my-[150px]">
                        <div className="mr-6">
                            <h3 className="header-text text-[70px] max-[1220px]:text-[50px] max-[632px]:text-[30px] leading-[80px] max-[1220px]:leading-[60px] max-[632px]:leading-[40px]  margin-0 ">
                                <span className="max-[632px]:hidden accent-text leading-none">
                                    Welcome
                                </span>{" "}
                                <span className="max-[632px]:hidden text-[1rem] leading-none text-white normal-text">
                                    to my personal website, I am
                                </span>
                                <br />
                                Mawit Bikom Gad, A full-stack web developer
                            </h3>
                            <p className="normal-text mt-[50px] max-[632px]:text-[15px] max-[1120px]:mt-[25px]">
                                I am a self-taught full-stack web developer with a passion for
                                creating dynamic and responsive websites. With expertise in
                                JavaScript, UI/UX design, database schema design, and software
                                architecture design, I specialize in making intuitive and
                                well-designed web applications.
                            </p>
                        </div>
                        <Image
                            src={avatar}
                            alt={"avatar"}
                            width={550}
                            height={550}
                            className="m-4 max-[1220px]:w-[350px] max-[1220px]:h-[350px] max-[632px]:w-[200px] max-[632px]:h-[200px] max-[964px]:mt-[50px]"
                        />
                    </div>
                </section>
                {/* The hero section ending*/}

                {/* The projects section beginning */}
                <section className=" relative w-full">
                    <h3 className="text-[70px] max-[964px]:text-[50px] max-[632px]:text-[35px] text-center mb-[100px] header-text  ">
                        Featured projects
                    </h3>
                    <div className="flex items-center mt-[200px] max-[964px]:mt-[100px] max-[632px]:flex-col max-[632px]:items-start">
                        <div className="relative w-1/2 max-[632px]:w-full max-[632px]:h-[50vw] h-[35vw] max-h-[450px] rounded-md overflow-hidden  max-[632px]:w-">
                            <Link
                                href={"https://litumba-client.vercel.app"}
                                target={"_blank"}
                            >
                                <Image
                                    src={litumbaPreviewProjects}
                                    fill
                                    alt="litumba preview project"
                                    className="object-cover"
                                />
                            </Link>
                        </div>
                        <div
                            id="litumba-project"
                            className=" flex-col w-1/2 flex items-end relative max-[632px]:w-full max-[632px]:mt-4"
                        >
                            <h2 className="text-[40px] text-end header-text  max-[632px]:text-[20px]">
                                Litumba
                            </h2>
                            <p className="shadow-project_shadow mt-4 max-[632px]:mt-1 w-[140%] max-[632px]:w-[100%] bg-[#5A82AC] p-4 rounded-md text-[25px] max-[1120px]:text-[15px] max-[632px]:text-[10px]">
                                litumba is a web app that aims at providing a centralized online
                                platform, where members of the Bakweri tribe in Cameroon can
                                meet, share and grow both socially and economically.{" "}
                            </p>
                            <div className="mt-4 max-[632px]:mt-1">
                                <span className=" ml-4 max-[632px]:text-[12px]">Next.js</span>
                                <span className="ml-4">tailwind</span>
                                <span className="ml-4">Mongodb</span>
                            </div>
                            <Link
                                href={"https://litumba-client.vercel.app"}
                                target={"_blank"}
                            >
                                <OpenIcon className="mt-4 max-[632px]:mt-1 " />
                            </Link>
                        </div>
                    </div>
                    <div className="flex flex-row-reverse items-center mt-[200px] max-[964px]:mt-[100px] max-[632px]:flex-col max-[632px]:items-start">
                        <div className="relative w-1/2 max-[632px]:w-full max-[632px]:h-[50vw] h-[35vw] max-h-[450px] rounded-md overflow-hidden  max-[632px]:w-">
                            <Link href={"https://ndolo.cm"} target={"_blank"}>
                                <Image
                                    src={ndoloPreviewProjects}
                                    fill
                                    alt="litumba preview project"
                                    className="object-cover"
                                />
                            </Link>
                        </div>
                        <div
                            id="ndolo-project"
                            className=" flex-col w-1/2 flex items-start relative max-[632px]:w-full max-[632px]:mt-4"
                        >
                            <h2 className="text-[40px] text-end header-text  max-[632px]:text-[20px]">
                                Ndolo
                            </h2>
                            <p className="shadow-project_shadow mt-4 max-[632px]:mt-1 w-[140%] max-[632px]:w-[100%] bg-[#5A82AC] p-4 rounded-md text-[25px] max-[1120px]:text-[15px] max-[632px]:text-[10px]">
                                Ndolo is an online dating platform for Cameroonians leaving
                                abroad, this web app is out to reduce the stress that
                                Cameroonians living out of the country have in terms of finding
                                a partner that shares their cultural morals and values.
                            </p>
                            <div className="mt-4 max-[632px]:mt-1">
                                <span className=" ml-4 max-[632px]:text-[12px]">React.js</span>
                                <span className="ml-4">Node.js</span>
                                <span className="ml-4">Mongodb</span>
                            </div>
                            <Link href={"https://ndolo.cm"} target={"_blank"}>
                                <OpenIcon className="mt-4 max-[632px]:mt-1 " />
                            </Link>
                        </div>
                    </div>
                    <div className="flex items-center mt-[200px] max-[964px]:mt-[100px] max-[632px]:flex-col max-[632px]:items-start">
                        <div className="relative w-1/2 max-[632px]:w-full max-[632px]:h-[50vw] h-[35vw] max-h-[450px] rounded-md overflow-hidden  max-[632px]:w-">
                            <Link href={"/"}>
                                <Image
                                    src={personalWebsitePreviewProjects}
                                    fill
                                    alt="litumba preview project"
                                    className="object-cover"
                                />
                            </Link>
                        </div>
                        <div
                            id="personal-website-project"
                            className=" flex-col w-1/2 flex items-end relative max-[632px]:w-full max-[632px]:mt-4"
                        >
                            <h2 className="text-[40px] text-end header-text  max-[632px]:text-[20px]">
                                Personal project
                            </h2>
                            <p className="shadow-project_shadow mt-4 max-[632px]:mt-1 w-[140%] max-[632px]:w-[100%] bg-[#5A82AC] p-4 rounded-md text-[25px] max-[1120px]:text-[15px] max-[632px]:text-[10px]">
                                As a web developer, I need to have a personal platform where I
                                can showcase my latest projects and capabilities, and tell the
                                world more about myself. this exactly is the purpose of my
                                personal website
                            </p>
                            <div className="mt-4 max-[632px]:mt-1">
                                <span className=" ml-4 max-[632px]:text-[12px]">Next.js</span>
                                <span className="ml-4">Tailwind</span>
                                <span className="ml-4">Vercel</span>
                            </div>
                            <div className="mt-4 max-[632px]:mt-1 flex items-center">
                                <Link
                                    href={"https://github.com/mawitGad/mawit.com"}
                                    target={"_blank"}
                                >
                                    <GithubIcon className="mr-6 " />
                                </Link>
                                <Link href={"/"}>
                                    <OpenIcon />
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
                {/* The projects section ending*/}

                {/* The stack section beginning */}
                <section className="mt-[150px] ">
                    <h3 className=" text-[70px] max-[964px]:text-[50px] max-[632px]:text-[35px] text-center mb-[50px] header-text">
                        My stack
                    </h3>
                    <div className="flex flex-wrap justify-around">
                        <div className="py-4 px-4 border border-[1px] max-[830px]:w-[200px] w-[350px] m-4 backdrop-blur bg-[#ffffff10] rounded-lg hover:bg-[#ffffff30] hover:shadow-[4px_2px_100px_20px_#ffffff25] transition duration-[0.3s]">
                            <h3 className="text-[40px] max-[964px]:text-[30px] max-[632px]:text-[25px] header-text ">
                                Languages
                            </h3>
                            <div className="flex items-center my-4">
                                <Image
                                    src={htmlStackLogo}
                                    alt="html logo"
                                    height={35}
                                    width={35}
                                />
                                <span className="ml-2">Html 5</span>
                            </div>
                            <div className="flex items-center my-4">
                                <Image
                                    src={cssStackLogo}
                                    alt="html logo"
                                    height={35}
                                    width={35}
                                />
                                <span className="ml-2">Css 3</span>
                            </div>
                            <div className="flex items-center my-4">
                                <Image
                                    src={jsStackLogo}
                                    alt="html logo"
                                    height={35}
                                    width={35}
                                />
                                <span className="ml-2">JavaScript</span>
                            </div>
                        </div>
                        <div className="py-4 px-4 border border-[1px] max-[830px]:w-[200px] w-[350px] m-4 backdrop-blur bg-[#ffffff10] rounded-lg hover:bg-[#ffffff30] hover:shadow-[4px_2px_100px_20px_#ffffff25] transition duration-[0.3s]">
                            <h3 className="text-[40px] max-[964px]:text-[30px] max-[632px]:text-[25px] header-text ">
                                Frameworks
                            </h3>
                            <div className="flex items-center my-4">
                                <Image
                                    src={nextStackLogo}
                                    alt="html logo"
                                    height={35}
                                    width={35}
                                />
                                <span className="ml-2">Next js</span>
                            </div>
                            <div className="flex items-center my-4">
                                <Image
                                    src={expresStackLogo}
                                    alt="html logo"
                                    height={35}
                                    width={35}
                                />
                                <span className="ml-2">Express js</span>
                            </div>
                            <div className="flex items-center my-4">
                                <Image
                                    src={nodeStackLogo}
                                    alt="html logo"
                                    height={35}
                                    width={35}
                                />
                                <span className="ml-2">Node js</span>
                            </div>
                        </div>
                        <div className="py-4 px-4 border border-[1px] max-[830px]:w-[200px] w-[350px] m-4 backdrop-blur bg-[#ffffff10] rounded-lg hover:bg-[#ffffff30] hover:shadow-[4px_2px_100px_20px_#ffffff25] transition duration-[0.3s]">
                            <h3 className="text-[40px] max-[964px]:text-[30px] max-[632px]:text-[25px] header-text ">
                                Libraries
                            </h3>
                            <div className="flex items-center my-4">
                                <Image
                                    src={reactStackLogo}
                                    alt="html logo"
                                    height={35}
                                    width={35}
                                />
                                <span className="ml-2">React js</span>
                            </div>
                            <div className="flex items-center my-4">
                                <Image
                                    src={axiosStackLogo}
                                    alt="html logo"
                                    height={35}
                                    width={35}
                                />
                                <span className="ml-2">Axios </span>
                            </div>
                            <div className="flex items-center my-4">
                                <Image
                                    src={reduxStackLogo}
                                    alt="html logo"
                                    height={35}
                                    width={35}
                                />
                                <span className="ml-2">Redux</span>
                            </div>
                            <div className="flex items-center my-4">
                                <Image
                                    src={socketIOStackLogo}
                                    alt="html logo"
                                    height={35}
                                    width={35}
                                />
                                <span className="ml-2">socket.io </span>
                            </div>
                        </div>
                        <div className="py-4 px-4 border border-[1px] max-[830px]:w-[200px] w-[350px] m-4 backdrop-blur bg-[#ffffff10] rounded-lg hover:bg-[#ffffff30] hover:shadow-[4px_2px_100px_20px_#ffffff25] transition duration-[0.3s]">
                            <h3 className="text-[40px] max-[964px]:text-[30px] max-[632px]:text-[25px] header-text ">
                                Database
                            </h3>
                            <div className="flex items-center my-4">
                                <Image
                                    src={mongodbStackLogo}
                                    alt="html logo"
                                    height={35}
                                    width={35}
                                />
                                <span className="ml-2">Mongodb</span>
                            </div>
                        </div>
                        <div className="py-4 px-4 border border-[1px] max-[830px]:w-[200px] w-[350px] m-4 backdrop-blur bg-[#ffffff10] rounded-lg hover:bg-[#ffffff30] hover:shadow-[4px_2px_100px_20px_#ffffff25] transition duration-[0.3s]">
                            <h3 className="text-[40px] max-[964px]:text-[30px] max-[632px]:text-[25px] header-text ">
                                ORM
                            </h3>
                            <div className="flex items-center my-4">
                                <Image
                                    src={mongooseStackLogo}
                                    alt="html logo"
                                    height={35}
                                    width={35}
                                />
                                <span className="ml-2">Mongoose</span>
                            </div>
                            <div className="flex items-center my-4">
                                <Image
                                    src={prismaStackLogo}
                                    alt="html logo"
                                    height={35}
                                    width={35}
                                />
                                <span className="ml-2">Prisma</span>
                            </div>
                        </div>
                        <div className="py-4 px-4 border border-[1px] max-[830px]:w-[200px] w-[350px] m-4 backdrop-blur bg-[#ffffff10] rounded-lg hover:bg-[#ffffff30] hover:shadow-[4px_2px_100px_20px_#ffffff25] transition duration-[0.3s]">
                            <h3 className="text-[40px] max-[964px]:text-[30px] max-[632px]:text-[25px] header-text ">
                                Version control
                            </h3>
                            <div className="flex items-center my-4">
                                <Image
                                    src={gitStackLogo}
                                    alt="html logo"
                                    height={35}
                                    width={35}
                                />
                                <span className="ml-2">git</span>
                            </div>
                            <div className="flex items-center my-4">
                                <Image
                                    src={githubStackLogo}
                                    alt="html logo"
                                    height={35}
                                    width={35}
                                />
                                <span className="ml-2">github</span>
                            </div>
                        </div>
                        <div className="py-4 px-4 border border-[1px] max-[830px]:w-[200px] w-[350px] m-4 backdrop-blur bg-[#ffffff10] rounded-lg hover:bg-[#ffffff30] hover:shadow-[4px_2px_100px_20px_#ffffff25] transition duration-[0.3s]">
                            <h3 className="text-[40px] max-[964px]:text-[30px] max-[632px]:text-[25px] header-text ">
                                Styling
                            </h3>
                            <div className="flex items-center my-4">
                                <Image
                                    src={scssStackLogo}
                                    alt="html logo"
                                    height={35}
                                    width={35}
                                />
                                <span className="ml-2">SCSS</span>
                            </div>
                            <div className="flex items-center my-4">
                                <Image
                                    src={tailwindStackLogo}
                                    alt="html logo"
                                    height={35}
                                    width={35}
                                />
                                <span className="ml-2">Tailwind css</span>
                            </div>
                        </div>
                        <div className="py-4 px-4 border border-[1px] max-[830px]:w-[200px] w-[350px] m-4 backdrop-blur bg-[#ffffff10] rounded-lg hover:bg-[#ffffff30] hover:shadow-[4px_2px_100px_20px_#ffffff25] transition duration-[0.3s]">
                            <h3 className="text-[40px] max-[964px]:text-[30px] max-[632px]:text-[25px] header-text ">
                                Platforms
                            </h3>
                            <div className="flex items-center my-4">
                                <Image
                                    src={herokuStackLogo}
                                    alt="html logo"
                                    height={35}
                                    width={35}
                                />
                                <span className="ml-2">Heroku</span>
                            </div>
                            <div className="flex items-center my-4">
                                <Image
                                    src={vercelStackLogo}
                                    alt="html logo"
                                    height={35}
                                    width={35}
                                />
                                <span className="ml-2">Vercel</span>
                            </div>
                        </div>
                    </div>
                </section>
                {/* The stack section ending */}

                {/* The about section beginning*/}
                <section className="max-w-[800px] relative m-auto text-justify">
                    <h3 className="my-[100px] max-[964px]:my-[50px] text-center text-[70px] max-[964px]:text-[50px] max-[632px]:text-[35px] header-text">
                        About me
                    </h3>
                    <p className="mt-[20px] text-[25px] max-[1120px]:text-[1rem] ">
                        I am a self-motivated individual with a passion for problem-solving
                        and helping others using technology. Through self-study, I have
                        gained a wealth of knowledge in both front-end and back-end
                        development. I am constantly learning and experimenting with new
                        technologies.
                    </p>
                    <p className="mt-[20px] text-[25px] max-[1120px]:text-[1rem] ">
                        In addition to web development, I love reading about the latest tech
                        trends and advancements, and I often write articles about my
                        findings. I believe that staying up-to-date with the latest
                        technologies is crucial for creating modern and innovative web
                        applications.
                    </p>
                    <p className="mt-[20px] text-[25px] max-[1120px]:text-[1rem] ">
                        On this website, you will find information about my latest projects
                        and my experience as a web developer. I am always excited to learn
                        and grow, so feel free to reach out and connect with me!
                    </p>
                </section>
                {/* The about section ending*/}

                {/* The footer section beginning */}
                <footer className="mb-[100px] ">
                    <h3 className="my-[60px] max-[964px]:my-[50px] text-center text-[70px] max-[964px]:text-[50px] max-[632px]:text-[35px] header-text">
                        Contact me
                    </h3>
                    <div className="text-[25px] max-[1120px]:text-[1rem] flex justify-center">
                        <Link
                            href={"https://www.linkedin.com/in/mawit-bikom-754558224/"}
                            className="flex items-baseline mx-4"
                            target={"_blank"}
                        >
                            <Image
                                src={linkedinLogo}
                                width={28}
                                height={28}
                                alt="linkedIn logo"
                            />
                            <span className="ml-2">LinkedIn</span>
                        </Link>
                        <div
                            className="flex items-baseline mx-4 cursor-pointer"
                            onClick={saveEmail}
                        >
                            <Image
                                src={gmailLogo}
                                width={28}
                                height={28}
                                alt="linkedIn logo"
                            />
                            <span className="ml-2">Gmail</span>
                        </div>
                    </div>
                </footer>
                {/* The footer section ending */}

                {/* email copied confirmation component beginning*/}
                <div
                    id="email-confirmation"
                    className="fixed top-[-100px] m-auto w-fit left-0 right-0 border border-2 border-green-500 py-4 px-10 rounded-lg backdrop-blur"
                >
                    Email saved to clip board
                </div>
                {/* email copied confirmation component ending*/}
            </main>
        </>
    );
}
