// import React from 'react'
// import Navbar from './components/Navbar'
// import Men from './components/Men'
// import Women from './components/Women'

// const App = () => {

//   const user1 = {
//     name: "Radha",
//     age: 22,
//     gender: "female"
//   }

//   const user2 = {
//     name: "Krishana",
//     age: 22,
//     gender: "male"
//   }

//   return (
//     <div className='h-screen bg-[#111] w-full text-white p-10'>
//       {/* <Navbar title="Komal" color='red' links={['Home', 'About', 'Projects', 'Contact']}/>
//       <Navbar title="Apple" color='blue' links={['Home', 'Services', 'Product', 'Men', 'Women']}/>
//       <Navbar title="Fruits" color='green' links={['Home', 'Juice', 'Blog', 'Shop', 'Contact']}/> */}

//      {user1.gender === "male" ? <Men /> : <Women />}
//     </div>
//   )
// }

// export default App


import React from 'react'

const App = () => {

  const abc = (a) => {
    console.log("Button Clicked", a);
  }

  return (
    <div className='h-screen bg-[#111] w-full text-white p-10 '>
      <button
      onClick={() => {
        abc(10)
      }}
      className='active:scale-90 cursor-pointer bg-emerald-800 font-semibold text-white px-6 py-3 rounded'>Click me</button>
    </div>
  )
}

export default App