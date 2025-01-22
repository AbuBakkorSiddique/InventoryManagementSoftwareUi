
import '../css/SecondComponent.css'
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';
import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt';
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import CountUp from 'react-countup';




function SecondComponent() {
  return (
<>

<div className="SecondComponent mt-6">

    <div className='SecondComponent_DivOne rounded-lg shadow-md p-1 hover:shadow-lg'>

        <div className='SecondComponent_DivOne_left'>

            <div className='SecondComponent_DivOne_left_one'>
              <h1> Total Active Users</h1>
            </div> 
            <div className='SecondComponent_DivOne_left_two'>
            <h1> <span className='text-cyan-600'> <KeyboardDoubleArrowUpIcon/></span> +2.6% </h1>
            </div>
            <div className='SecondComponent_DivOne_left_three'>
              <h1 className='text-lg font-bold'> <CountUp start={0} end={18785} delay={10}>
  {({ countUpRef }) => (
    <div>
      <span ref={countUpRef} />
    </div>
  )}
</CountUp></h1>
            </div>

        </div>
        <div className='SecondComponent_DivOne_right'>
            <span className='text-cyan-400' style={{fontSize:60}}> <SignalCellularAltIcon/></span>
        </div>
   

    </div>





    <div className='SecondComponent_DivTwo rounded-lg shadow-md p-1 hover:shadow-lg'>

        <div className='SecondComponent_DivTwo_left'>

            <div className='SecondComponent_DivTwo_left_one'>
           <h1> Total Installed</h1>
            </div>
            <div className='SecondComponent_DivTwo_left_two'>
            <h1> <span className='text-cyan-600'> <KeyboardDoubleArrowUpIcon/></span> +0.2% </h1>
            </div>
            <div className='SecondComponent_DivTwo_left_three'>
            <h1 className='text-lg font-bold'>
            <CountUp start={0} end={  4876} delay={5}>
  {({ countUpRef }) => (
    <div>
      <span ref={countUpRef} />
    </div>
  )}
</CountUp>
              
              
             </h1>
            </div>

        </div>
        <div className='SecondComponent_DivTwo_right'>
        <span className='text-cyan-400' style={{fontSize:60}}> <SignalCellularAltIcon/></span>
        </div>

    </div>






    <div className='SecondComponent_DivThree rounded-lg shadow-md p-1 hover:shadow-lg'>
    <div className='SecondComponent_DivThree_left'>
      <div className='SecondComponent_DivThree_left_one'>
      <h1> Total Downloads</h1>
      </div>
      <div className='SecondComponent_DivThree_left_two'>
      <h1> <span className='text-orange-700'> <KeyboardDoubleArrowDownIcon/></span> -0.1% </h1>
      </div>
      <div className='SecondComponent_DivThree_left_three'>
      <h1 className='text-lg font-bold'>
      <CountUp start={0} end={678} delay={3}>
  {({ countUpRef }) => (
    <div>
      <span ref={countUpRef} />
    </div>
  )}
</CountUp>
        
         </h1>
      </div>
    </div>
    <div className='SecondComponent_DivThree_right'>
    <span className='text-orange-700' style={{fontSize:60}}> <SignalCellularAltIcon/></span>
    </div>
    </div>

</div>





</>
  )
}

export default SecondComponent