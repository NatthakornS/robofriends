import React,{ useState, useEffect } from 'react';
import CardList from './CardList';
// import {robots} from './robots';
import SearchBox from './SearchBox';
import './App.css';
import Scroll from './Scroll';


// class App extends Component {
//     constructor() {
//         super()
//         this.state = {
//             robots: robots,
//             searchfield: ''
//         }
//     }
    
//     onSearchChange = (event) => {
//         this.setState({ searchfield: event.target.value })
//     }

//     render() {
//         const filteredRobots = this.state.robots.filter(robots => {
//             return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
//         })

//         return (
//             <div className='tc'>
//                 <h1>Robofriends</h1>
//                 <SearchBox searchChange={this.onSearchChange}/>
//                 <CardList robots={filteredRobots}/>
//             </div>
//         )
//     }

// }


function App() {
    const [robot, setRobot] = useState([]);
    const [searchfield, setSearchfield] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    
    const onSearchChange = event => {
        setSearchfield(event.target.value);
    };

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(res => res.json())
            .then(
                (users) => {
                    setRobot(users);
                    // setSearchResults(users);

                })
    });
   
    useEffect(() => {
        const results = robot.filter(robot => {
            return robot.name.toLowerCase().includes(searchfield.toLowerCase())
        });
        setSearchResults(results);
        // if(results.lenght > 0 ){
        //     setSearchResults(results);
        // }
        // else{
        //     setSearchResults(robot);
        // }
        console.log(results,searchResults)
    }, [searchfield]);



    return (
        <div className='tc'>
            <h1 className='tc f1'>Hello friends</h1>
            <SearchBox searchChange={onSearchChange}/>
            <Scroll>
                <CardList 
                    robots={searchResults}
                />
            </Scroll>
        </div>
    )
}


export default App;