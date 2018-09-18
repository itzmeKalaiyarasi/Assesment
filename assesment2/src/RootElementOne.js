import React from 'react'
import './bpmSlider.css'
import click3 from './click3.wav'
import click4 from './click4.wav'


class RootElementOne extends React.Component {

    constructor(props){
        super(props);

        this.state ={
            playing :false,
            count:0,
            bpm:100,
            beatsPerMeasure:4
        };

        this.click3 = new Audio(click3);
        this.click4 = new Audio(click4);
    }

    handleBpmChange = event =>{
        const bpm = event.target.value;
        this.setState({bpm});
        if(this.state.playing) {
         
            clearInterval(this.timer);
            this.timer = setInterval(this.playClick, (60 / bpm) * 1000);
        
          
            this.setState({
              count: 0,
              bpm
            });
          } else {
           
            this.setState({ bpm });
          }

    }

    startStop = () => {
        if(this.state.playing) {
          
            clearInterval(this.timer);
            this.setState({
              playing: false
            });
          } else {
       
            this.timer = setInterval(this.playClick, (60 / this.state.bpm) * 1000);
            this.setState({
              count: 0,
              playing: true
            
            }, this.playClick);
          }
      
    }

    playClick = () => {
        const { count, beatsPerMeasure } = this.state;
      
       
        if(count % beatsPerMeasure === 0) {
          this.click4.play();
        } else {
          this.click3.play();
        }
      
        
        this.setState(state => ({
          count: (state.count + 1) % state.beatsPerMeasure
        }));
      }
   
    render() { 
        const {playing,bpm}=this.state

        
        return ( 
            <div className="bpm-main">
                <div className="bpm-slider">
                <div>{bpm} BPM </div>
                <input type="range" min="60" max="240" value={bpm} onChange={this.handleBpmChange}/>
                </div>
                <button onClick ={this.startStop}>
                    {playing ? 'Stop' : 'Start'}

                </button>

            </div>
         );
    }
}
 
export default RootElementOne;