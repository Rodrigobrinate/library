
import { Alert } from 'react-bootstrap';
import api from '../components/api';
import '../styles/Register.css';

export default function Register() {





    function register(){
        
        var email:any = document.querySelector('#emailr');
        var password:any = document.querySelector('#senhar');
        var name:any = document.querySelector('#namer');
        

        api.post("/register",{
            email: email.value,
            password: password.value,
            name: name.value,
        }).then((response) => {
            response.data.st == 1 ?
            window.location.href = '/login' :
             setMsg(<Alert  variant="danger" >{response.data.msg}</Alert>)}
        )
    }

   



    function validate(val: number, type: string) {
       let v1: any = document.getElementById("fname");
       let v2: any = document.getElementById("lname");
       let v3: any = document.getElementById("email");
       let v4: any = document.getElementById("mob");
       let v5: any = document.getElementById("job");
       //let v6: any = document.getElementById("ans");

       

         
    
       let flag1 = true;
       let flag2 = true;
       let flag3 = true;
       let flag4 = true;
       let flag5 = true;
       let flag6 = true;




     if (type == 'register') {
         
         if(val>=1 || val==0) {
            if(v1.value == "") {
                v1.style.borderColor = "red";
                flag1 = false;
            }
            else {
                v1.style.borderColor = "green";
                flag1 = true;
            }
        }

        if(val>=3 || val==0) {
            if(v3.value == "") {
                v3.style.borderColor = "red";
                flag3 = false;
            }
            else {
                v3.style.borderColor = "green";
                flag3 = true;
            }
        }

        if(val>=5 || val==0) {
            if(v5.value == "") {
                v5.style.borderColor = "red";
                flag5 = false;
            }
            else {
                v5.style.borderColor = "green";
                flag5 = true;
            }
        }

        let flag: any = flag1 && flag2 && flag3 && flag4 && flag5 ;
    
        return flag;

        }else if (type == 'login') {

        




       
    
        if(val>=2 || val==0) {
            if(v2.value == "") {
                v2.style.borderColor = "red";
                flag2 = false;
            }
            else {
                v2.style.borderColor = "green";
                flag2 = true;
            }
        }
       
        if(val>=4 || val==0) {
            if(v4.value == "") {
                v4.style.borderColor = "red";
                flag4 = false;
            }
            else {
                v4.style.borderColor = "green";
                flag4 = true;
            }
        }
        let flag: any = flag1 && flag2 && flag3 && flag4 && flag5 ;
    
        return flag;
        
        }
    
       
}



    return (
        <div className='register'>
<div className="container-fluid px-1 py-5 mx-auto">
    <div className="row d-flex justify-content-center">
        <div className="col-xl-7 col-lg-8 col-md-9 col-11 text-center">
            <h3 style={{backgroundColor: '#e9e9e963'}}>Registrar-se ou fazer login</h3>
            
            <div className="card">
                <h5 className="text-center mb-4">Powering world-className companies</h5>
                <form className="form-card" >
                    <div className="row justify-content-between text-left">

                        <div className="form-group col-sm-6 flex-column d-flex"> 
                            <label className="form-control-label px-3">
                                Nome<span className="text-danger"> 
                                *</span>
                            </label>
                            <input type="text" id="namer" name="namer" placeholder="digite seu nome"onBlur={() => {validate(1,'register')}} />
                        </div>



                        
                    </div>




                    <div className="row justify-content-between text-left">
                        <div className="form-group col-sm-6 flex-column d-flex"> 
                        <label className="form-control-label px-3">
                            E-mail<span className="text-danger"> 
                            *</span>
                        </label>
                        <input 
                        type="text" 
                        id="emailr" 
                        name="emailr" 
                        placeholder="" 
                        onBlur={() => {validate(3, 'regiter')}} />
                    </div>



                    
                    </div>



                    <div className="row justify-content-between text-left">
                        <div className="form-group col-sm-6 flex-column d-flex">
                            <label className="form-control-label px-3">
                                Senha<span className="text-danger"> 
                                *</span>
                            </label> 
                            <input 
                            type="password"
                            id="senhar" 
                            name="senhar" 
                            placeholder="" 
                            onBlur={() => {validate(5, 'register')}} /> 
                            </div>
                    </div>



                    

                    <div className="row justify-content-start">
                      <div className="form-group col-sm-6"> 
                        <button 
                        type="button" 
                        onClick={register} 
                        className="btn-block btn-primary">
                            Registre-se</button>
                      </div>
                    </div>
                    
                   

                </form>
            </div>
        </div>
    </div>
</div>
        </div>
    )
}

function setMsg(arg0: JSX.Element) {
    throw new Error('Function not implemented.');
}
