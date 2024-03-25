import { useState } from 'react'
import './App.css'

function App() {
  const [dimg, setimg] = useState('')
  const [loading,setloading] =useState(false)
  const [qrdata,setqrdata]=useState('welcome')
  const [qrsize,setqrsize] = useState('400')
  const [qrheading,setqrheading] = useState(true)
  
  function downloadeqr(){
    fetch(dimg).then((response)=> response.blob()).then((blabdata)=>{
      const Link = document.createElement("a");
      Link.href=URL.createObjectURL(blabdata);
      Link.download="qrcode.png";
      document.body.appendChild(Link);
      Link.click();
      document.body.removeChild(Link);
    }).catch((error)=>{
      console.error("Error is Downloade", error);
    })
  }

  async function handlegenerateQRcode (){
    setloading(true)
    setqrheading(false)
    try{
    //   const Qrlink = document.getElementById('Qrlink').value
    // const QrSize =document.getElementById('QrSize').value
    const url=`https://api.qrserver.com/v1/create-qr-code/?size=${qrsize}x${qrsize}&data=${encodeURIComponent(qrdata)}`;
    setimg(url)
    }
    catch (error){
        console.error(error)
    }
    finally{
      setloading(false)
    }
    

  //  console.log(Qrlink)
  }

  return (
    <>
       {/* <div className='container'>
         <h1>Qr code Generator</h1>
         {loading && <p>please waite...</p>}
         {dimg && <img src={dimg}></img>}
         <div>
            <div>
                <label htmlFor='Qrlink' >Link : </label>
                <input id="Qrlink" type='text' name='Qrlink' value={qrdata}  onChange={(e)=>{
                  setqrdata(e.target.value);
                }}></input>
            </div>
            <div>
                <label htmlFor='QrSize' > Size : </label>
                <input id="QrSize" type='text' name='QrSize' value={qrsize} onChange={(e)=>{
                  setqrsize(e.target.value)
                }}></input>
            </div>
         </div>
         <div>
          <button onClick={()=>handlegenerateQRcode()} disabled={loading}>GenerateQr</button>

          <button onClick={downloadeqr}>Downloade</button>
         </div>
         
       </div> */} 
        <div className=' layerone container rounded-5 '>
           <div className="row">
                <div className=" layertwo container col-12 col-md-6 ">
                    <div className="row p-3">
                        <div className="col-12 col-md-6  p-md-4">   
                          <div class="form-group">
                              <label className='p-2' for="Qrlink">Qr Link</label>
                              <input type="Text" class="form-control p-md-3 inputfield " id="Qrlink" aria-describedby="emailHelp" name='Qrlink' placeholder='Paste Your Link here..'  onChange={(e)=>{
                  setqrdata(e.target.value);
                }} ></input>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 p-md-4">
                         
                          <div class="form-group">
                              <label className='p-2' for="exampleInputEmail1">Qr Size</label>
                              <input  type="text" class="form-control p-md-3 inputfield p-1 " id="QrSize" name='QrSize' value={qrsize} onChange={(e)=>{
                  setqrsize(e.target.value)
                }} aria-describedby="emailHelp" ></input>
                            </div>
                        </div>
                        {/* row two layer */}
                        <div className="row">
                           <div className='p-4'>
                             <p>Discription</p>
                             <div className="container layertwopointone">
                              <ul className='p-4 'style={{color:'rgb(53, 127, 48)'}}>
                                <li>Please give the Link of the QR in input field</li>
                                <li>And give the size of the Qr</li>
                                <li>Generate QR using Generate Button</li>
                                <li> And Downloade Using the downloade button below </li>
                              </ul>
                              <div className="row">
                              <button className='qrbuttons col m-4'onClick={()=>handlegenerateQRcode()} disabled={loading}>Generate QR</button><button className='qrbuttons col m-4' onClick={downloadeqr}>Downloade</button>

                              </div>
                             
                             </div>
                           </div>
                        </div>
                    </div>
                </div>
                <div className=" layerthree container col-12 col-md-6 ">
                     <div className=" container layerthreepointone">
                     {loading && <p>please waite...</p>}
                     {dimg && <div>
                      <img className='imagecon' src={dimg} />
                     </div> } 

                     {qrheading && <div className='company'> <h1 style={{fontFamily:"Pacifico",color:'rgb(17, 42, 70)'}}>Chellry Land 2.1</h1>
                     <p style={{fontWeight:'500', maxWidth:'20rem'}}> Empower your ideas. Generate beautiful, free QR codes in seconds. Connect seamlessly. Create scannable bridges between the physical and digital worlds. </p>
                      <h6>Happy Creation</h6>
                   
                      </div> 
                     }

                     </div>
                </div>
            </div>
          
        </div>
       
    </>
  )
}

export default App
