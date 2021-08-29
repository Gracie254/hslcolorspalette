import React, {useState} from 'react'
import swatches from './colorPicker'
import {RgbTohsl} from './colorConverter'
import {myColors} from './colorValues'


const MyComponent = () => {
    const [palette] = useState(swatches)
   
    
    const [color, setColor] = useState('')
    const generatePalette = (event) => {
        event.preventDefault()
        const singleColor = document.querySelectorAll('#my-palette')
       let values = myColors(color)
       let values2 = values.slice(0, 3)
       console.log(values2)
       const hue = RgbTohsl(values2[0], values2[1], values2[2])
       console.log(hue)
       
       const random = (min, max) => {
           return Math.floor(Math.random() * (max - min + 1) + min)
       }
       
        singleColor.forEach(function(col){
            let finalColor = `hsl(
    ${hue[0]},    
    ${random(hue[1] -50, hue[1]+50)}%, 
    ${random(hue[2] -50, hue[2]+50)}%
  )`
            col.style.background = finalColor
            col.textContent = finalColor
            console.log(col.style.background)
        })
        
    }

    return (
        <>
        
        <form className="myForm" onSubmit={generatePalette}>
            <div id="section">
            <label htmlFor="myInput" ></label>
            <input type="text" id="myInput" name="myInput" value={color} onChange={(e)=>setColor(e.target.value)} placeholder="Enter a color"/>
            <button type="submit">Generate Palette</button>
            </div>
        
        <section className="style-palette">{palette.map((elem)=>{
            const { id, swatch } = elem
            return (
                
                <div id="my-palette" key={id}>{swatch}</div>
               
                
            )
        })}
        </section>
        </form>
        </>
    )
}

export default MyComponent