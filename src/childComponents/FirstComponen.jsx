import '../css/FirstComponen.css'
import ReporterImage from '../images/63dce0db7f0305419632435d_illustration_seo.svg';
import Typewriter from 'typewriter-effect';




function FirstComponen() {
  return (
  <>
  <div className="FirstComponen">

<div className='FirstComponen_firstDiv bg-emerald-200'>

<div className='FirstComponen_firstDiv_left p-6'>
<div className='text-lg font-bold'> 
<h1 className='flex'> <Typewriter
  options={{
    strings: ['Welcome back ' ],
    autoStart: true,
    loop: true,
  }}
/> &#9995;</h1>
<h1> Jaydon Frankie</h1>
</div>
<div>
  <p> If you are going to use a passage or loream ipsum you need to be sure there isn't anything.</p>
</div>
<div>
  <button className='btn bg-emerald-700 hover:bg-emerald-950 focus:outline-none text-white'>  Go Now </button>
</div>

</div>
<div className='FirstComponen_firstDiv_right'>

  <div className='FirstComponen_firstDiv_right_main'>
       <div className='FirstComponen_firstDiv_right_subImage'>
         <img src={ReporterImage} alt="ReporterImage" />
       </div>
  </div>

</div>
</div>
<div className='FirstComponen_secondDiv'>
<div>   <h1 className='text-lg font-bold text-green-700'> RED APP</h1></div>
<div>   <h1 className='text-lg font-bold text-white'> The hidden game of Desktop...</h1>
</div>
<div>   <h1 className='  text-white'> old oak tree stood tall and megistic . It's branches..</h1>
</div>
</div>





  </div>





  
  
  
  
  </>
  )
}

export default FirstComponen