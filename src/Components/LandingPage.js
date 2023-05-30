import React from 'react'
import '../App.css'
function LandingPage() {
    return (
        <div id='mobilebiewonly'>


            {/* <div className='banner'>
           <img src='/images/colgatebanner.png'/>
        
          </div> */}

            <div  className='colgate'>
                <div>
                    <img className='banner' src='/images/colgatebanner.png'  />
                </div>
                <img className='colg' src="/images/colgatebackground.png" />

            </div>

           <div  className='justify-content-center'>
            <button className='experience px-4 py-4' data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                Start the Experience
            </button>
           </div>













            {/* <!-- Modal --> */}


{/* <!-- Modal --> */}
<div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div className="modal-dialog  modal-dialog-centered">
    <div className="modal-content ">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="staticBackdropLabel">Modal title</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
        ...
      </div>
      <div className="modal-footer justify-content-center">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        
      </div>
    </div>
  </div>
</div>
        </div>
    )
}

export default LandingPage