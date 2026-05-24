import Counter from "../shared/components/counter";

function App() {
  return (
    <div className="bg-gray-900">
      <div className="mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="relative isolate overflow-hidden bg-gray-800 px-6 pt-16 after:pointer-events-none after:absolute after:inset-0 after:inset-ring after:inset-ring-white/10 sm:rounded-3xl sm:px-16 after:sm:rounded-3xl md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
          <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
            <h2 className="text-3xl font-semibold tracking-tight text-balance text-white sm:text-4xl">
              Vite Template Folder, a React state management library built on
              top of Zustand with Persistant Storage and Tailwind CSS.
            </h2>

            <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
              <Counter />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
