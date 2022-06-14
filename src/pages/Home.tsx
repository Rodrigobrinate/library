
import { useEffect, useState } from "react"
import { Button, Card } from "react-bootstrap"
import { Link } from "react-router-dom"
import api from "../components/api"
import Header from "../components/Header"





export default function Home() {
 const [msg, setMsg] = useState(null)
 const [book , setBook] = useState([])


  const headers:any = {
        headers: {
        'Content-Type': 'multipart/form-data',
        'x-access-token': localStorage.getItem('token')
        }
    }


 useEffect(() => {
  if (localStorage.getItem("token")) {
    api.get("/books", headers).then((response) => {
    setBook(response.data.map((item:any) => 
        <Card style={{ width: '18rem' }}>
        
        <Card.Body>
          <Card.Title>{item.name}</Card.Title>
         
          <Button variant="primary">
            <Link style={{color: 'black'}} to={'/book/'+item.id}>ler</Link></Button>
        </Card.Body>
      </Card>
      ))
        
    })
  }
  }, [])
  




    function upload(){

     

        var formData = new FormData();
var imagefile:any = document.querySelector('#file');
formData.append("image", imagefile.files[0]);
api.post('/upload', {image: imagefile.files[0]} , headers)
      
    
    }


    return (
        <div>
            <Header />

            <label htmlFor="file"  className="btn btn-primary">
                
            <input type="file" onChange={upload} id="file" className="d-none" />
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAFZJREFUSEtjZKAxYKSx+QyjFhAMYVKD6D/URKL1Ea0QavCoBQTjbOgEEcylBL2EpgAj0eBKRTS3AJfLh04cjPoAHgKDriwiNV+M1miEQ4zUSCZsIpoKAFy0DhnDOA3uAAAAAElFTkSuQmCC"/>
                adicionar livro
            </label>


<div className="d-flex">
            

            {book}
</div>

        </div>
    )
}