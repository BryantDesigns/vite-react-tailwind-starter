import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';

function App() {
    const [count, setCount] = useState(0);

    // Below is an example of how to use environment variables
    const apiKey = import.meta.env.VITE_API_KEY;
    console.log(apiKey); // Logs the value of VITE_API_KEY from .env
    return (
        <div className="h-screen bg-gray-200 flex justify-center">
            <div className="w-2/3">
                <div className="flex items-center justify-between p-4">
                    <a
                        href="https://vitejs.dev"
                        target="_blank"
                        rel="noreferrer"
                        className="hover:underline"
                    >
                        <img
                            src={viteLogo}
                            className="logo h-12 w-12 transition-transform duration-300 hover:scale-110"
                            alt="Vite logo"
                        />
                    </a>
                    <a
                        href="https://react.dev"
                        target="_blank"
                        rel="noreferrer"
                        className="hover:underline"
                    >
                        <img
                            src={reactLogo}
                            className="logo react h-12 w-12 transition-transform duration-300 hover:scale-110"
                            alt="React logo"
                        />
                    </a>
                </div>
                <h1 className="my-4 text-center text-3xl font-bold">
                    Vite + React + Tailwind
                </h1>
                <p className="text-center text-lg">
                    A streamlined setup for your modern web development needs. Learn
                    more about my work at{' '}
                    <a
                        href="https://tylerbryant.dev/"
                        target="_blank"
                        rel="noreferrer"
                        className="underline"
                    >
                        tylerbryant.dev
                    </a>
                    .
                </p>
                <div className="mx-4 rounded-lg bg-white p-6 shadow-lg">
                    <button
                        onClick={() => setCount((count) => count + 1)}
                        className="rounded bg-blue-500 px-4 py-2 font-bold text-white transition-colors hover:bg-blue-700"
                    >
                        count is {count}
                    </button>
                    <p className="mt-4">
                        Edit{' '}
                        <code className="rounded bg-gray-100 p-1">src/App.jsx</code>{' '}
                        and save to test (
                        <a
                            href="https://vitejs.dev/guide/features.html#hot-module-replacement"
                            target="_blank"
                            rel="noreferrer"
                            className="underline"
                        >
                            Hot Module Replacement - HMR
                        </a>
                        )
                    </p>
                </div>
                <p className="mt-4 text-center">
                    Click on the Vite and React logos to go to their documentation.
                </p>
            </div>
        </div>
    );
}

export default App;
