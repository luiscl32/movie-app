import { RouterProvider } from "react-router"

import Router from "./presentation/pages/router"

function App() {


  return (
    <>
      <div className="bg-gray-700" >
        <section className="max-w-7xl mx-auto">
          <RouterProvider router={Router} />
        </section>

      </div>
    </>
  )
}

export default App
