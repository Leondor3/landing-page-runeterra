import React from "react";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";

export function Menu() {
  let els = document.getElementsByClassName("classeDosElementos");

  return (
    <div
      className="h-20 
        w-full flex  justify-between items-center
      bg-[#111] z-10 relative border-b-[1px]
      border-b-zinc-800"
    >
      <div className="flex max-w-[1344px] justify-between">
        <div className="flex gap-8 items-center">
          <div className="">
            <img
              className=""
              src="https://purepng.com/public/uploads/thumbnail/riot-games-new-logo-ust.png"
            />
          </div>
          <DropdownMenu.Root className="hack">
            <DropdownMenu.Trigger asChild>
              <button className="absolute left-[190px]">
                <svg
                  width="32"
                  height="32"
                  fill="#fff"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="m6 9 6 6 6-6H6Z"></path>
                </svg>
              </button>
            </DropdownMenu.Trigger>
            <DropdownMenu.Portal className="">
              <DropdownMenu.Content
                className="bg-white left-0 w-screen h-96 mt-4 p-16 flex justify-start gap-16 z-10"
                sideOffset={5}
              >
                <DropdownMenu.Item className="w-60">
                  <div className="bg-[rgba(186,186,186,.1)] rounded p-2">
                    <span className="font-semibold text-[14px] tracking-[.08em] font-[Marven-Pro] leading-[120%] text-left uppercase">
                      Jogos
                    </span>
                  </div>
                  <div className="flex flex-col gap-4 p-2">
                    <div className="font-extralight text-[13px] leading-[120%] uppercase font-[Marven-Pro]">
                      League of Legends
                    </div>
                    <div className="font-extralight text-[13px] leading-[120%] uppercase font-[Marven-Pro]">
                      League of Legends
                    </div>{" "}
                    <div className="font-extralight text-[13px] leading-[120%] uppercase font-[Marven-Pro]">
                      League of Legends
                    </div>
                  </div>
                </DropdownMenu.Item>
                <DropdownMenu.Item className="w-60">
                  <div className="bg-[rgba(186,186,186,.1)] rounded p-2">
                    <span className="font-semibold text-[14px] tracking-[.08em] font-[Marven-Pro] leading-[120%] text-left uppercase">
                      Forge
                    </span>
                  </div>
                  <div className="flex flex-col gap-4 p-2">
                    <div className="font-extralight text-[13px] leading-[120%] uppercase font-[Marven-Pro]">
                      League of Legends
                    </div>
                    <div className="font-extralight text-[13px] leading-[120%] uppercase font-[Marven-Pro]">
                      League of Legends
                    </div>{" "}
                    <div className="font-extralight text-[13px] leading-[120%] uppercase font-[Marven-Pro]">
                      League of Legends
                    </div>
                  </div>
                  <DropdownMenu.Item className="w-60">
                    <div className="bg-[rgba(186,186,186,.1)] rounded p-2">
                      <span className="font-semibold text-[14px] tracking-[.08em] font-[Marven-Pro] leading-[120%] text-left uppercase">
                        Esports
                      </span>
                    </div>
                    <div className="flex flex-col gap-4 p-2">
                      <div className="font-extralight text-[13px] leading-[120%] uppercase font-[Marven-Pro]">
                        League of Legends
                      </div>
                      <div className="font-extralight text-[13px] leading-[120%] uppercase font-[Marven-Pro]">
                        League of Legends
                      </div>{" "}
                      <div className="font-extralight text-[13px] leading-[120%] uppercase font-[Marven-Pro]">
                        League of Legends
                      </div>
                    </div>
                  </DropdownMenu.Item>
                </DropdownMenu.Item>
                <DropdownMenu.Item className="w-60">
                  <div className="bg-[rgba(186,186,186,.1)] rounded p-2">
                    <span className="font-semibold text-[14px] tracking-[.08em] font-[Marven-Pro] leading-[120%] text-left uppercase">
                      Entretenimentos
                    </span>
                  </div>
                  <div className="flex flex-col gap-4 p-2">
                    <div className="font-extralight text-[14px] uppercase">
                      League of Legends
                    </div>
                    <div className="font-extralight text-[14px] uppercase">
                      League of Legends
                    </div>{" "}
                    <div className="font-extralight text-[14px] uppercase">
                      League of Legends
                    </div>
                  </div>
                  <DropdownMenu.Item className="w-60">
                    <div className="bg-[rgba(186,186,186,.1)] rounded p-2">
                      <span className="font-semibold text-[14px] tracking-[.08em] font-[Marven-Pro] leading-[120%] text-left uppercase">
                        Negócios
                      </span>
                    </div>
                    <div className="flex flex-col gap-4 p-2">
                      <div className="font-extralight text-[13px] leading-[120%] uppercase font-[Marven-Pro]">
                        League of Legends
                      </div>
                      <div className="font-extralight text-[13px] leading-[120%] uppercase font-[Marven-Pro]">
                        League of Legends
                      </div>{" "}
                      <div className="font-extralight text-[13px] leading-[120%] uppercase font-[Marven-Pro]">
                        League of Legends
                      </div>
                    </div>
                  </DropdownMenu.Item>
                </DropdownMenu.Item>
                <DropdownMenu.Item>
                  <div className="h-96 w-[600px]">
                    <div className="w-full flex justify-end max-h-60 h-full ">
                      <img
                        className="object-cover w-full block h-full"
                        src="https://images.contentstack.io/v3/assets/blt0eb2a2986b796d29/bltec61b41b43cdd8c1/615a859d1be8434dc3bd0813/lol.jpg??&format=pjpg&quality=85"
                      />
                    </div>
                  </div>
                </DropdownMenu.Item>
              </DropdownMenu.Content>
            </DropdownMenu.Portal>
          </DropdownMenu.Root>
          <ul className="flex gap-6 items-center">
            <li className="p-2 hover:bg-zinc-700 hover:p-2 hover:rounded-lg">
              <a className="text-slate-200 leading-[120%] text-sm font-semibold uppercase">
                Noticias
              </a>
            </li>
            <li className="p-2 hover:bg-zinc-700 hover:p-2 hover:rounded-lg">
              <a className="text-slate-200 leading-[120%] text-sm font-semibold uppercase">
                Suporte
              </a>
            </li>
            <li className="p-2 hover:bg-zinc-700 hover:p-2 hover:rounded-lg">
              <a className="text-slate-200 leading-[120%] text-sm font-semibold uppercase">
                Competitivo
              </a>
            </li>
            <DropdownMenu.Root className="">
              <DropdownMenu.Trigger asChild>
                <span className="text-slate-200 leading-[120%] text-sm font-semibold uppercase flex p-2 hover:bg-zinc-700 hover:p-2 hover:rounded-lg">
                  Comunidade
                  <svg
                    className="ml-2"
                    width="12"
                    height="12"
                    fill="#d1d1d1"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="m6 9 6 6 6-6H6Z"></path>
                  </svg>
                </span>
              </DropdownMenu.Trigger>
              <DropdownMenu.Portal className="">
                <DropdownMenu.Content
                  className="bg-zinc-800 w-40 before:content: '' mt-6 before:absolute before:h-2 before:bg-orange-500 before:w-full"
                  sideOffset={5}
                >
                  <DropdownMenu.Item className="w-full h-full">
                    <div className="flex flex-col gap-8 p-4">
                      <div className="font-extralight text-[#f9f9f9] text-[13px] leading-[120%] capitalize font-[Marven-Pro]">
                        Discord
                      </div>
                      <div className="font-extralight text-[#f9f9f9] text-[13px] leading-[120%] capitalize font-[Marven-Pro]">
                        Fórum
                      </div>{" "}
                      <div className="font-extralight text-[#f9f9f9] text-[13px] leading-[120%] capitalize font-[Marven-Pro]">
                        Torneios de Comunidade
                      </div>
                      <div className="font-extralight text-[#f9f9f9] text-[13px] leading-[120%] capitalize font-[Marven-Pro]">
                        link-Programa de Apoio a Torneios de Comunidade
                      </div>
                    </div>
                  </DropdownMenu.Item>
                </DropdownMenu.Content>
              </DropdownMenu.Portal>
            </DropdownMenu.Root>
          </ul>
        </div>
        <div className="absolute right-16 flex gap-4 bottom-5 items-center">
          <svg
            width="24"
            height="24"
            fill="none"
            stroke="#fff"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z"></path>
            <path d="M3.6 9h16.8"></path>
            <path d="M3.6 15h16.8"></path>
            <path d="M11.5 3a17 17 0 0 0 0 18"></path>
            <path d="M12.5 3a17 17 0 0 1 0 18"></path>
          </svg>
          <li className="text-white list-none">
            <button className="p-4 flex items-center rounded-lg h-10 bg-zinc-800">
              Iniciar Sessão
            </button>
          </li>
          <li className="text-black list-none">
            <button className="p-4 flex items-center rounded-lg h-10 bg-yellow-700">
              Jogar agora
            </button>
          </li>
        </div>
      </div>
    </div>
  );
}
