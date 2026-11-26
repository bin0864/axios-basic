import React, { useEffect, useMemo, useState } from 'react'
import axios from 'axios'

const TodoList = () => {
    const [todos, setTodos] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const [keyword, setKeyword] = useState('')

    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/todos')
        .then((res)=>{
            setTodos(res.data.slice(0,5))
            console.log(res.data)
            setLoading(false)
        })
        .catch((err)=>{
            console.log(err)
            setError('데이터를 가져오지 못했습니다')
            setLoading(false)
        })
    },[])

    const filtered = useMemo(()=>{
        return todos
            .filter((t)=>
                t.title.toLowerCase().includes(keyword.toLowerCase())
            )
            .sort((a,b)=>a.title.localeCompare(b.title))
    },[keyword, todos])

    if(loading) return <p>로딩 중입니다...</p>
    if(error) return <p>{error}</p>

    return (
        <div>
            <h2>할 일 목록</h2>

            <input
                type="text"
                value={keyword}
                onChange={(e)=>setKeyword(e.target.value)}
                placeholder='할 일 검색'
            />

            <ul>
                {filtered.map((todo)=>(
                    <li key={todo.id}>
                        {todo.title}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default TodoList