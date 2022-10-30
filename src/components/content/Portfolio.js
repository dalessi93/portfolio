import '../style/Portfolio.css';
import tictactoe_img from "../files/tictactoe.png";

export function Portfolio(){
    return(
        <div className="portfolio">
            <div className='projects'>
                <h1>My Portfolio</h1>
                <div className='projectLink'>
                    <div id='tictactoe'>
                        <div className='title'>
                            <h3>TicTacToe</h3>
                        </div>
                        <div className='image'>
                            
                        </div>
                        <div className='links'>
                            <a href='https://dalessi93.github.io/Project1-TicTacToe/' target="_blank">Live</a>
                            <a href='https://github.com/dalessi93/Project1-TicTacToe' target="_blank">GitHub</a>
                        </div>
                        
                    </div>

                    <div id='onlypets'>
                        <div className='title'>
                            <h3>Only Pets</h3>
                        </div>
                        <div className='image'>
                            
                        </div>
                        <div className='links'>
                            <a href='https://quiet-ocean-29311.herokuapp.com/login' target="_blank">Live</a>
                            <a href='https://github.com/dalessi93/Only-pets' target="_blank">GitHub</a>
                        </div>
                        
                    </div>

                    <div id='akaizakaya'>
                        <div className='title'>
                            <h3>Aka izakaya</h3>
                        </div>
                        <div className='image'>
                            
                        </div>
                        <div className='links'>
                            <a href='https://aka-izakaya.herokuapp.com/' target="_blank">Live</a>
                            <a href='https://github.com/dalessi93/aka-izakaya' target="_blank">GitHub</a>
                        </div>
                        
                    </div>

                    <div id='taskmaster'>
                        <div className='title'>
                            <h3>Task Master</h3>
                        </div>
                        <div className='image'>
                            
                        </div>
                        <div className='links'>
                            <a href='https://task-master-sei.herokuapp.com/' target="_blank">Live</a>
                            <a href='https://github.com/dalessi93/Task-Master' target="_blank">GitHub</a>
                        </div>
                        
                    </div>
                </div>

            </div>
        </div>
    )
}