import { useEffect, useState } from 'react'
import './App.css'
import UserList from './component/UserList'
import TodoList from './component/TodoList'
import UserDtail from './component/UserDtail'
import DummyCart from './component/DummyCart'
import axios from 'axios'
import DummyRecipes from './component/DummyRecipes'

function App() {
  return (
    <>
      {/* <UserList/> */}
      {/* <TodoList/> */}
      {/* <UserDtail/> */}
      {/* <DummyCart/> */}
      <DummyRecipes/>
    </>
  )
}

export default App
