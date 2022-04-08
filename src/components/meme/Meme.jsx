import style from "./Meme.module.css"
import { useEffect, useState } from "react"
import cx from 'classnames'

const Meme = () => {

    const [allmem, setAllmem] = useState([]);
    const [memImage, setMeme] = useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg"

    });

    const changeHandler = (e) => {
        const { name, value } = e.target
        setMeme(prevvalue => ({
            ...prevvalue,
            [name]: value
        }))
    }

    useEffect(()=>{
        fetch("https://api.imgflip.com/get_memes")
        .then(res=>res.json())
        .then(data=>setAllmem(data.data.memes))
    },[])

         

    const getmemImage = () => {
        const randomNumber = Math.floor(Math.random() * allmem.length)
        const url = allmem[randomNumber].url
        setMeme(previmage => ({
            ...previmage,
            randomImage: url
        }))
    }

    return (
        <main>
            <div className={style.form}>
                <input type="text"
                    placeholder="Top text "
                    name="topText"
                    value={memImage.topText}
                    onChange={changeHandler} />

                <input type="text"
                    placeholder="Bottom text"
                    name="bottomText"
                    value={memImage.bottomText}
                    onChange={changeHandler} />

                <button onClick={getmemImage}>Get a new meme image</button>

            </div>
            <div>
                <img src={memImage.randomImage} alt={""} />
                <h2 className={cx(style.memetext, style.top)}>{memImage.topText}</h2>
                <h2 className={cx(style.memetext, style.bottom)}>{memImage.bottomText}</h2>

            </div>
        </main>
    )
}
export default Meme;