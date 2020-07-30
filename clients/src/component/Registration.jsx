import React, { useState } from "react"


const Registration = (props)=> {
    const [ name, setName ] = useState('')
    const [ email, setEmail ] = useState('')
    const [ phone, setPhone ] = useState('')
    const [ position, setPosition ] = useState('Frontend developer')
    const [ photo, setPhoto ] = useState('')
    const sendDAta = () => {
          
        if(photo && name && email && phone && position) {
            console.log(name, email, phone, position, photo) 
            props.postUserDataThunk({name, email, phone, position, photo})
            setName('')
            setEmail('')
            setPhone('')
            setPhoto('')
        }
    }
    return <div className="body-registation">
            <h1>Register to get a work</h1>
            <h5>Attetion! After successful registration and alert, update the list of users in the block from the top</h5>
            <div className="container col-md-6 ">
                
                <form>
                    <div className="form-group ">
                        <label htmlFor="Name" className="col-sm-2 col-form-label">Name</label>
                        <div className="col-sm-12">
                            <input type="text"
                              value={name}
                              onChange={(e)=>setName(e.target.value)} 
                              className="form-control" id="inputPassword3" placeholder="Name"/>
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email</label>
                        <div className="col-sm-12">
                            <input type="email"
                              value={email}
                              onChange={(e)=>setEmail(e.target.value)}  
                              className="form-control" id="inputEmail3" placeholder="Email"/>
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="inputPassword3" className="col-sm-6 col-form-label">Phone number</label>
                        <div className="col-sm-12">
                            <input type="text"
                              value={phone}
                              onChange={(e)=>setPhone(e.target.value)}  
                              className="form-control" id="inputPassword3" placeholder="+380 XX XXX XX XXX"/>
                            <p>Enter phone number in open format</p>
                        </div>
                    </div>
                    <fieldset className="form-group">
                        <div>
                            <legend className="col-form-label col-sm-4 pt-0">Select your position</legend>
                            <div className="col-sm-10"
                                onChange={(e)=>setPosition(e.target.value)} >
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="Frontend developer" defaultChecked/>
                                    <label className="form-check-label" htmlFor="gridRadios1">
                                    Frontend developer
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="Backend developer"/>
                                    <label className="form-check-label" htmlFor="gridRadios2">
                                        Backend developer
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios3" value="Designer" />
                                    <label className="form-check-label" htmlFor="gridRadios3">
                                        Designer
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios3" value="QA" />
                                    <label className="form-check-label" htmlFor="gridRadios3">
                                        QA
                                    </label>
                                </div>
                            </div>
                        </div>
                    </fieldset>
                    <div className="form-group">
                        <label htmlFor="Name" className="col-sm-2 col-form-label">Photo</label>
                        <div className="col-sm-12">
                            <input type="file"
                              onChange={(e)=>setPhoto(e.target.files[0])}
                              className="form-control-file" id="inputPassword3" placeholder="Upload your photo"/>
                        </div>
                    </div>

                    <div className="form-group">
                        <div className="col-sm-4" style={{margin:"auto"}}>
                            <button type="button"
                            onClick={sendDAta} 
                            className="btn btn-danger btn-md btn-block">Sign in</button>
                        </div>
                    </div>
                </form>
            </div>
            <img src={props.image}/>
    </div>
}

export default Registration