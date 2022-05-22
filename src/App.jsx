import Sidebar from './layouts/Sidebar.jsx';
import Index from './pages/Index.jsx';

function App() {
    return (
        <main className="grid grid-cols-[18rem,1fr] h-screen w-full">
            <Sidebar />
            <div className="bg-gray-200">
                <div className="container px-6 mx-auto">
                    <Index />
                </div>
            </div>
        </main>
    );
}

export default App
