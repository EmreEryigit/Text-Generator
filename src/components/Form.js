

import React, {useEffect, useState} from 'react'

function Form(props) {

    const [para, setPara] = useState(1)
    const [html, setHtml] = useState("no")
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`https://baconipsum.com/api/?type=all-meat&paras=${para}&format=${html === "no" ? "text" : "html"}`)
            console.log(response)
            const data = await response.text()
            props.textHandler(data, para, html)
        }
        fetchData()
    }, [para, html])
    const handlePara = (e) => {
        setPara(e.target.value)
        
    }
    const handleChange = (e) => {
        setHtml(e.target.checked)
        
    }

  return (
    <React.Fragment>
    <div className="row ">
        <div className="col-md-6 mx-auto my-5">
        <hr />
        <label htmlFor="number" className='form-label'>Paragraphs</label>
        <input onChange={handlePara} value={para} type="number" defaultValue="1" className='form-control'/>
        <label htmlFor="html">Include HTML</label>
        <select value={html} onChange={handleChange} name="html" className='form-select' id="html">
            <option default value="no">No</option>
            <option  value="yes">Yes</option>
        </select>
        </div>
    </div>
        

    </React.Fragment>
  )
}

export default Form
