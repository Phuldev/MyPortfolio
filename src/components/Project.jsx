import React from "react";
import {Link} from "react-router-dom"
import ProjectData from "../data/project.json";
const Project = () => {
  const datas = ProjectData["project"];
  return (
    <div class="container mx-auto md:px-6">
      <section>
        <h2 class="my-5 text-center text-3xl font-bold">
          My Recently Projects
        </h2>
        <div class="grid gap-6 lg:grid-cols-3">
          {datas.map((data) => (
            <div
              class="zoom relative overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg dark:shadow-black/20 bg-[50%]"
              data-te-ripple-init
              data-te-ripple-color="dark">
              <img src={data["image"]} class="w-full align-middle transition duration-300 ease-linear" alt={data["errroMsg"]} />
              <Link to={data["link"]}>
                <div class="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed bg-[hsla(0,0%,0%,0.3)]">
                  <div class="flex h-full items-end justify-start">
                    <h5 class="m-6 text-lg font-bold text-white">
                      {data["project_name"]}
                    </h5>
                  </div>
                </div>
                <div>
                  <div class="mask absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 bg-[hsla(0,0%,99.2%,0.15)]"></div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Project;
