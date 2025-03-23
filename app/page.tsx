"use client";
import Image from "next/image";
import profile from "../public/profile.jpg";
import ThemeToggle from "../components/ui/theme-toggle";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Card, CardContent } from "@/components/ui/card";
import image1 from "../public/3.jpg";
import image2 from "../public/item-1.jpg";
import image3 from "../public/item-3.jpg";
import image4 from "../public/4.jpg"

export default function Home() {
  const openResume = () => {
    window.open("/ABATOV_SoftwareEngineer.pdf", "_blank", "noopener,noreferrer");
  };
  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white transition-colors duration-300">
      <div className="mx-auto max-w-xl px-4 py-20">
        <motion.header
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="flex items-center justify-between mb-12"
        >
          <div className="w-20 h-20 rounded-full overflow-hidden">
            <Image
              src={profile}
              alt="profile"
              className="cursor-pointer transition-all duration-300 hover:scale-110"
            ></Image>
          </div>
          <ThemeToggle />
        </motion.header>

        <main className="space-y-10">
          <section className="space-y-10">
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="space-y-1"
            >
              <h1 className="text-4xl font-bold bg-gradient-to-r from-rose-600 via-indigo-500 to-sky-500 bg-clip-text text-transparent inlin-block">
                Abatov Olloshukur
              </h1>
              <p className="text-gray-600 dark:text-gray-400">
                Software Engineer
              </p>
              <p className="text-gray-600 dark:text-gray-400">
                Seoul, South Korea
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="space-y-3"
            >
              <h2 className="text-lg font-semibold">
                Building Scalable Solutions for Future
              </h2>
              <p className="text-gray-600 text-sm dark:text-gray-400 max-w-2x1">
                I am an expert in web and software development, specializing in{" "}
                <span className="text-black dark:text-white">Javascript</span>{" "}
                and <span className="text-black dark:text-white">React</span>.My
                expertise includes{" "}
                <span className="text-black dark:text-white">
                  TypeScript, React, Next, Redux, NodeJs, Python, PostgreSQl,
                  MongoDB
                </span>
                .
              </p>

              <p className="text-gray-600 text-sm dark:text-gray-400 max-w-2x1">
                In addition to web applications, I am passionate about AI agents
                and scalable LLMs that deliver exceptional performance and
                resilience.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="flex items-center gap-3"
            >
              <Button
                className="rounded-full bg-gradient-to-r from-rose-600 to-indigo-600 text-white transition-transform hover:scale-105"
                onClick={openResume}
                style={{ padding: "10px 20px", fontSize: "16px" }}
              >
                Resume
              </Button>

              <Link
                href="https://github.com/alikssant"
                className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"
              >
                <FaGithub className="w-6 h-6"></FaGithub>
              </Link>

              <Link
                href="https://www.linkedin.com/in/abatov-80b6b2303/"
                className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"
              >
                <FaLinkedin className="w-6 h-6"></FaLinkedin>
              </Link>

              <Link
                href="mailto:aliksant315@gmail.com"
                className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"
              >
                <MdEmail className="w-7 h-7"></MdEmail>
              </Link>
            </motion.div>
          </section>

          <motion.section
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="space-y-8"
          >
            <h2 className="text-3xl font-semibold bg-gradient-to-r from-rose-600 via-indigo-500 to-sky-500 bg-clip-text text-transparent inline-block">
              Experience
            </h2>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    May 2024 - Dec 2024
                  </p>
                  <p className="font-medium">Software Engineer (remote)</p>
                  <p className="text-blue-600 dark:text-blue-400">
                  Union Group
                  </p>
                </div>
              </div>

              <div className="text-gray-600 dark:text-gray-400 text-sm">
                <ul className="ml-4 list-disc space-y-2">
                  <li>
                  
                    Designed and developed a comprehensive booking admin page for
                hotel owners to manage operations.
                  </li>
                  <li>
                  Improved the
                user interface using React.js, TailwindCSS, ensuring a seamless and
                intuitive user experience.
                  </li>
                  <li>
                  Implemented Socket.io for real-time
                  communication, enabling instant messaging between users.
                  </li>
                  <li>
                  Developed robust error handling mechanisms on both the client
                  and server sides for enhanced reliability
                  </li>
                  <li>
                  Improved overall functionality and user experience. Created
                  landing pages and updated the styles of various pages.
                  </li>
                  <li>
                    Integrated APIs for authentication, content delivery, and various services.
                 
                  </li>
                </ul>
           
              </div>
            </div>
            {/* <div className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Sep 2023 - Dec 2023
                  </p>
                  <p className="font-medium">
                    Frontend Engineer
                  </p>
                  <p className="text-blue-600 dark:text-blue-400">
                    Union Group
                  </p>
                </div>
              </div>

              <p className="text-sm text-gray-600 dark:text-gray-400">
           
            
               
              </p>
            </div> */}
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="space-y-8"
          >
            <h2 className="text-3xl font-semibold bg-gradient-to-r from-rose-600 via-indigo-500 to-sky-500 bg-clip-text text-transparent inline-block">
              Education
            </h2>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Sep 2020 - Aug 2024
                  </p>
                  <p className="font-medium">
                    Bachelor of Engineering - Computer Science
                  </p>
                  <p className="text-blue-600 dark:text-blue-400">
                    Sejong University, Seoul South Korea
                  </p>
                </div>
              </div>
              {/* <p className="text-gray-600 dark:text-gray-400 tex-sm">
                Courses: Algorithms, Computer Science, Data Structures, Software
                Development, Artificial Intelligence (AI), C/C++, C#, Web
                Development, and Computer Networks.
              </p> */}
            </div>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="space-y-8"
          >
            <h2 className="text-3xl font-semibold bg-gradient-to-r from-rose-600 via-indigo-500 to-sky-500 bg-clip-text text-transparent inline-block">
              Projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              <Card className="bg-gray-50 dark:bg-zinc-900 border-gray-200 dark:border-zinc-800 transition-transform duration-300 hover:scale-105 cursor-pointer">
                <Link href="https://github.com/alikssant/wantvisit">
                  <CardContent className="p-4">
                    <Image
                      src={image1}
                      alt="image1"
                      className="rounded-lg mb-4"
                    />

                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-medium">Wantvisit</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          (PostgreSQL, Express, React, Node.js) + TailwindCSS +
                          Daisy UI
                        </p>
                      </div>
                      <Button variant="ghost" size="icon">
                        🚀
                      </Button>
                    </div>
                  </CardContent>
                </Link>
              </Card>
              <Card className="bg-gray-50 dark:bg-zinc-900 border-gray-200 dark:border-zinc-800 transition-transform duration-300 hover:scale-105 cursor-pointer">
                <Link href="https://github.com/alikssant/beconnected">
                  <CardContent className="p-4">
                    <Image
                      src={image4}
                      alt="image1"
                      className="rounded-lg mb-4"
                    />

                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-medium">BeConnected</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          Python(Flask), Html, Css, Javascript
                        </p>
                      </div>
                      <Button variant="ghost" size="icon">
                        🚀
                      </Button>
                    </div>
                  </CardContent>
                </Link>
              </Card>
              <Card className="bg-gray-50 dark:bg-zinc-900 border-gray-200 dark:border-zinc-800 transition-transform duration-300 hover:scale-105 cursor-pointer">
                <Link href="https://github.com/alikssant/WriteIt">
                  <CardContent className="p-4">
                    <Image
                      src={image2}
                      alt="image1"
                      className="rounded-lg mb-4"
                    />

                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-medium">WriteIt</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          React, Redux, Firebase
                        </p>
                      </div>
                      <Button variant="ghost" size="icon">
                        🚀
                      </Button>
                    </div>
                  </CardContent>
                </Link>
              </Card>
              <Card className="bg-gray-50 dark:bg-zinc-900 border-gray-200 dark:border-zinc-800 transition-transform duration-300 hover:scale-105 cursor-pointer">
                <Link href="https://github.com/alikssant/tvScout">
                  <CardContent className="p-4">
                    <Image
                      src={image3}
                      alt="image1"
                      className="rounded-lg mb-4"
                    />

                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-medium">tvScout</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          React.js, API, Javascript
                        </p>
                      </div>
                      <Button variant="ghost" size="icon">
                        🚀
                      </Button>
                    </div>
                  </CardContent>
                </Link>
              </Card>
            </div>
            <p className="text-gray-500">@ 2025 Abatov Olloshukur</p>
          </motion.section>
        </main>
      </div>
    </div>
  );
}
