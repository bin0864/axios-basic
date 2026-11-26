import React, {useEffect, useState} from 'react'
import axios from 'axios'
import './DummyRecipes.css'

const DummyRecipes=()=> {
    const [recipes, setRecipes]=useState([])
    const [error, setError]=useState(null)
    const [loading, setLoading]=useState(false)

    useEffect(()=>{
        let mounted = true;

        const fetchRecipes = async() => {
            setLoading(true)
            setError(null)

            try {
                const res = await axios.get('https://dummyjson.com/recipes')
                if(mounted) setRecipes(res.data.recipes)
                    console.log(res.data.recipes)
            } catch (error) {
                if(mounted) setLoading(false)
            }
        }

        fetchRecipes()

        return ()=>{
            mounted = false
        }
    }, [])

  return (
    <div className='recipes-wrap'>
        <h2>Recipes</h2>
        <ul>
            {recipes.map((r) => {
                const first = r.products?.[0]
                return(
                    <li key={r.id}>
                        <span>{r.id}</span>
                        <div className="img-wrap">
                            <img src={r.image} alt={r.name} />
                        </div>
                        <h2>{r.name}</h2>
                        <ol>
                            {/* 요리 만드는 순서 나오게 하기 */}
                            {r.instructions.map((step, index)=>(
                                <li key={index}>{step}</li>
                            ))}
                        </ol>
                        {/* tag */}
                        <span>
                            {r.tags.map((tag, index)=>(
                                <span key={index}>#{tag}</span>
                            ))}
                        </span>
                    </li>
                )
            })}
        </ul>
    </div>
  )
}

export default DummyRecipes