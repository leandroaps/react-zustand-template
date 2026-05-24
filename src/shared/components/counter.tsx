import { useStore } from "../../store/store";

export default function Counter() {
  const { count, increase, decrease } = useStore() as {
    count: number;
    increase: () => void;
    decrease: () => void;
  };

  return (
    <div className="counter">
      <p className="mt-6 text-lg/8 text-pretty text-gray-300">
        {count}
        <button
          onClick={increase}
          className="mx-2 rounded-md bg-gray-700 px-3.5 py-2.5 text-sm font-semibold text-white inset-ring inset-ring-white/5 hover:bg-gray-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
        >
          one up
        </button>
        <button
          onClick={decrease}
          className="rounded-md bg-gray-700 px-3.5 py-2.5 text-sm font-semibold text-white inset-ring inset-ring-white/5 hover:bg-gray-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
        >
          one down
        </button>
      </p>
    </div>
  );
}
