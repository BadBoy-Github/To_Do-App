import React from 'react'

import Todo from './components/Todo'
import Footer from './components/Footer'

const App = () => {
  return (
    <>
      <div className="bg-stone-900 grid py-4 min-h-max h-screen items-end">
        <Todo />
        <Footer />
      </div>
      
    </>
  );
}

export default App