
import mirror from "./assets/nightphoto.jpeg";
import tain from "./assets/tain.jpeg";
function App() {
  return (
    <div>

      {/* Hello */}
      <div className="bg-red-500 text-black text-center p-3 font-bold">
        Hello Mamtesh
      </div>

      {/* Main */}
      <div className="min-h-screen bg-gray-100">

        {/* Navbar */}
        <nav className="bg-white shadow px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-blue-600">
            TechZone
          </h1>

          <div className="hidden md:flex gap-6">
            <a href="#" className="hover:text-blue-600">Home</a>
            <a href="#" className="hover:text-blue-600">Courses</a>
            <a href="#" className="hover:text-blue-600">About</a>
          </div>

          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg">
            Login
          </button>
        </nav>

        {/* Hero */}
        <section className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-2 gap-8 items-center">

          <div>
            <h2 className="text-4xl font-bold mb-4">
              Learn Web Development 🚀
            </h2>

            <p className="text-gray-500 mb-6">
              Learn programming and build amazing projects.
            </p>

            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg">
              Start Learning
            </button>
          </div>

          <img
            src={mirror}
            alt="Web Development"
            className="w-full h-64 object-cover rounded-2xl shadow-lg"
          />

        </section>

        {/* Cards */}
        <section className="max-w-6xl mx-auto px-6 py-10">

          <h2 className="text-3xl font-bold text-center mb-8">
            Our Gallery
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

            {/* Card 1 */}
            <div className="bg-white rounded-xl shadow overflow-hidden">
              <img
                src={mirror}
                alt="Mirror"
                className="w-full h-48 object-cover"
              />

              <div className="p-5">
                <h3 className="text-xl font-bold mb-2">
                  Mirror
                </h3>

                <p className="text-gray-500">
                  Beautiful mirror photography.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-xl shadow overflow-hidden">
              <img
                src={tain}
                alt="Train"
                className="w-full h-48 object-cover"
              />

              <div className="p-5">
                <h3 className="text-xl font-bold mb-2">
                  Train
                </h3>

                <p className="text-gray-500">
                  A beautiful train photograph.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-xl shadow overflow-hidden">
              <img
                src={mirror}
                alt="Gallery"
                className="w-full h-48 object-cover"
              />

              <div className="p-5">
                <h3 className="text-xl font-bold mb-2">
                  Gallery
                </h3>

                <p className="text-gray-500">
                  Explore our photo collection.
                </p>
              </div>
            </div>

          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-900 text-white text-center py-6 mt-8">
          <p>© 2026 TechZone | All Rights Reserved</p>
        </footer>

      </div>
    </div>
  );
}

export default App;

