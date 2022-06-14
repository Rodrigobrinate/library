import {useState, useEffect} from 'react'

// Import Worker
import { Worker } from '@react-pdf-viewer/core';
// Import the main Viewer component
import { Viewer } from '@react-pdf-viewer/core';
import { HorizontalScrollingIcon, VerticalScrollingIcon, WrappedScrollingIcon } from '@react-pdf-viewer/scroll-mode';
// Import the styles
import '@react-pdf-viewer/core/lib/styles/index.css';
// default layout plugin
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
// Import styles of default layout plugin
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
import api from '../components/api';
import { useParams } from 'react-router-dom';

function App() {

  let {id} = useParams();

  // creating new plugin instance
  const defaultLayoutPluginInstance = defaultLayoutPlugin();

  // pdf file onChange state
  const [pdfFile, setPdfFile]=useState('');
  const [numPages, setNumPages]=useState(1);
  const [where_stop , setWhereStop] = useState(1);

  let headers:any = {
    headers: {
    'Content-Type': 'multipart/form-data',
    'x-access-token': localStorage.getItem('token')
    }
}


  // pdf file error state
  const [pdfError, setPdfError]=useState('');

  useEffect(() => {

    let headers: any = {
      headers: {
      'Content-Type': 'application/json',
      'x-access-token': localStorage.getItem('token')
      }
  }
  api.get("/books/"+id, headers).then((response) => {
  //handleFile(response.data.data)
  
  setWhereStop(parseInt(response.data.book.where_stpped)-1)
  setPdfFile(response.data.data)
  })

setInterval(() => {
  const a: any = document.querySelector('.rpv-core__textbox')
  //console.log(a.value)

  api.post("/books/"+id, {where_stpped: a.value}, headers).then((response) => {
  //handleFile(response.data.data)
  //setWhereStop(response.data.book.where_stpped)
  })

}, 3000);


 

  }, [])

  

function b(){
  const a: any = document.querySelector('.rpv-core__textbox')
  console.log(a.value)

}




  // handle file onChange event
  const allowedFiles = ['application/pdf'];
  const handleFile = (e: any) =>{
    let selectedFile = e.target.files[0];
    // console.log(selectedFile.type);
    //if(selectedFile){
     // if(selectedFile&&allowedFiles.includes(selectedFile.type)){
        let reader = new FileReader();
        reader.readAsDataURL(selectedFile);
        reader.onloadend=(e:any)=>{
          setPdfError('');
          setPdfFile(e);
         // console.log(e);
        }
     // }
     // else{
    //    setPdfError('Not a valid pdf: Please select only PDF');
    //    setPdfFile('');
    //  }
    //}
   // else{
    //  console.log('please select a PDF');
    //}
  }

  return (
    <div className="container w-100">

      {/* Upload PDF */}
      <form>

       

        {/* we will display error message in case user select some file
        other than pdf */}
        {pdfError&&<span className='text-danger'>{pdfError}</span>}

      </form>

      {/* View PDF */}
      <h5>View PDF</h5>
      <div style={{position: 'fixed',
    height: '90vh',
    top: '0pc',
    width: '100vw',
    left: '0pc'}} className="viewer">

        {/* render this if we have a pdf file */}
        {pdfFile&&(
          <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.12.313/build/pdf.worker.min.js">
            <Viewer
            initialPage={where_stop}
            fileUrl={pdfFile}
            
            plugins={[defaultLayoutPluginInstance]}></Viewer>
          </Worker>
        )}

        {/* render this if we have pdfFile state null   */}
        {!pdfFile&&<>No file is selected yet</>}

      </div>

    </div>
  );
}

export default App;