import React from "react";

export default function Home() {
  return (
    <div className="h-screen bg-zinc-200">
      <div className="h-60 w-4/5 flex items-center justify-center mt-10 pt-10 space-x-6 bg-gray-200 mx-auto rounded-lg">
        <button
          className="relative block w-40 h-16 text-center cursor-pointer select-none"
          type="button"
        >
          <a target="_blank" href="https://3114.fr/" rel="noreferrer">
            <div className="absolute inset-x-0 bottom-10 bg-blue-100 border border-blue-500 rounded-lg" />
            <div className="relative bottom-10 text-xl font-thin leading-none tracking-wider py-4 px-10 bg-blue-100 border border-blue-500 rounded-lg transform hover:translate-y-1 transition duration-200 ease-in-out text-blue-500 font-bold">
              SOS Suicide
            </div>
          </a>
        </button>
        <button
          className="relative block w-40 h-16 text-center cursor-pointer select-none"
          type="button"
        >
          <a
            target="_blank"
            href="https://www.sosenfanceendanger.fr/index.html"
            rel="noreferrer"
          >
            <div className="absolute inset-x-0 bottom-10 bg-blue-100 border border-blue-500 rounded-lg" />
            <div className="relative bottom-10 text-xl font-thin leading-none tracking-wider py-4 px-10 bg-blue-100 border border-blue-500 rounded-lg transform hover:translate-y-1 transition duration-200 ease-in-out text-blue-500 font-bold">
              SOS Enfance
            </div>
          </a>
        </button>
        <button
          className="relative block w-40 h-16 text-center cursor-pointer select-none"
          type="button"
        >
          <a
            target="_blank"
            href="https://arretonslesviolences.gouv.fr/besoin-d-aide"
            rel="noreferrer"
          >
            <div className="absolute inset-x-0 bottom-10 bg-blue-100 border border-blue-500 rounded-lg" />
            <div className="relative bottom-10 text-xl font-thin leading-none tracking-wider py-4 px-10 bg-blue-100 border border-blue-500 rounded-lg transform hover:translate-y-1 transition duration-200 ease-in-out text-blue-500 font-bold">
              SOS Violence
            </div>
          </a>
        </button>
      </div>
      <div />
      <div />
    </div>
  );
}
