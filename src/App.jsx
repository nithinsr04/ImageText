import { useEffect, useImperativeHandle, useState } from 'react'
import { createWorker } from 'tesseract.js'
import './App.css'

function App() {
  
  const [selectedImage,setSelectedImage] = useState(null);
  const [textResult,setTextResult] = useState("");
  const [loading,setLoading] = useState(false);

  const handleChangeImage = (e) =>{
    if(e.target.files[0]){
      setLoading(true);
      setSelectedImage(e.target.files[0]);

    }else{
      setSelectedImage(null);
      setTextResult("");
    } 
  }

  

  const convertImageToText = async () =>{

    const worker = await createWorker("eng");
    const { data } = await worker.recognize(selectedImage);
    setLoading(false);
    setTextResult(data.text);
  }

  useEffect(()=>{
    convertImageToText();
  },[selectedImage])
  

  return (
    <div className="App">
      <h1>ImageText</h1>
      <p>Gets Words in Image!</p>
      <div className="input-wrapper">
        <label htmlFor="upload">Upload image</label>
        <input type="file" id="upload"  accept="image/*" onChange={handleChangeImage}/>
      </div>

      <div className="result">
        { selectedImage && 
        <div className="box-image">
          <img src={URL.createObjectURL(selectedImage)} alt="thumb*" />
        </div> }
        { loading && <div className="pop-up"><div className="spinner"></div> <p>processing image..</p> </div> }
        { textResult && 
        <div className="box-p">
          <p>{textResult}</p>
        </div> }
      </div>
    </div>
  )
}

export default App
