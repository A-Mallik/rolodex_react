import React from 'react';
import ReactDOM from 'react-dom';
import {CardList} from './card-list/card-list.component';
import {SearchBox} from './search-box.component'

class Test extends React.Component{
constructor(){
super();

this.state={
    // string: 'Hello, this is a test'
    characters: [ ],
    searchField: ''
};
}

componentDidMount(){
    fetch('http://jsonplaceholder.typicode.com/users')
    .then(response =>   
        // console.log(response)
        response.json() //returns data in a readable json format.
        )
    .then(users =>  // then we take that json data and put it in our setState.
        this.setState({characters: users })
        // console.log(users)
        
        
        )
}

render(){

    const { characters, searchField } = this.state;
    //quicker way to write object destructuring: const characters = this.state.characters

    const filtered = characters.filter(character => 
        character.name.toLowerCase().includes(searchField.toLowerCase())
        )

    return(
        <div className="test">
          

            <SearchBox
            placeholder='Search Character'
            handleChange = { e => this.setState({searchField: e.target.value})}
            />
            {/* //setState is a asynchronous function
            // this is why we are passing a callback function to see the immediate changes. */}
           
            <br></br>
            <br></br>
             {/* <CardList characters = {this.state.characters} /> */}
             <CardList characters = {filtered} />
             {/* onChange is a synthetic event that detects any changes that happen. */}
            
          {/* {this.state.string}
                <button onClick={()=> this.setState({string: "Hello Shosho" })}>My Button</button> */}
            {/* //must use setState because React intercepts user events and changes re-renders the component when state changes */}

            {/* {this.state.characters.map
                (charac => 
                    <h1 key = {charac.name}>{ charac.name}</h1>
                ) 
            } */}

            {/* lifeCycle methods are methods that are called at different stages when a component gets rendered. */}
{/*            
            Keys are used to distinguish components of the same time and to sort of say like "hey, THIS one changed" and to rerender it. */}
          
        </div>
    )
}

}

export default Test;