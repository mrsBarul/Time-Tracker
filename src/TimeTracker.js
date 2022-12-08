import { Component } from 'react';
import important from './important.png';
import timeImage from './timeImage.png';

export class TimeTracker extends Component {
    constructor() {
        super()

        this.state = {
            dailyRoutine: '',
            time: '',
            dailyRoutineList: []
        }
    }

    toDoListEvent(e) {
        this.setState({ dailyRoutine: e })
    }

    timeEvent(e) {
        this.setState({ time: e })
    }


    dailyRoutineListPush (input) {
        if (input === '') {
            alert('Please! Write your Dayly Routine')
        } else {
            let listArray = this.state.dailyRoutineList;
            listArray.push(input);
            this.setState({ dailyRoutineList: listArray, time: '', dailyRoutine: ''})
        }
        console.log(input)
    }

    clickedList (event) {
        const li = event.target;
        li.classList.toggle('clicked');
    }

    onFormSubmit(e) {
        e.preventDefault();
    }

    deleteList() {
        let listArray = this.state.dailyRoutineList;
        listArray = [];
        this.setState({ dailyRoutineList: listArray})
    }


    render() {
        return(
            <div className='container'>
                <form onSubmit={ this.onFormSubmit }>
                    <div className='image'>
                        <img className='timeImage' src={ timeImage } alt='timeImage'/>
                    </div>
                    <div className='containerInput'>
                        <div className='timeInput'>
                            <input type='time'
                            min='00:00' max='23:59'
                            onChange={ (e) => { this.timeEvent(e.target.value)}}
                            value={ this.state.time }/>
                        </div>
                        <div className='textInput'>
                            <input type='text'
                            placeholder='what to do today?'
                            onChange={ (e) => { this.toDoListEvent(e.target.value)}}
                            value={ this.state.dailyRoutine }/>
                        </div>
                    </div>
                    <div className='submit'>
                        <button className='btn btn-add'
                        onClick={ () => this.dailyRoutineListPush( `${this.state.time }  ${ this.state.dailyRoutine }`)}
                        >Add</button>
                    </div>
                    <div className='list'>
                        <ul >
                            { this.state.dailyRoutineList.map((item, index) => (
                                <li onClick={ this.clickedList} key={ index }>
                                    <img className='iconImage' src={ important } alt='!'/>
                                    { item }
                                    </li>
                            ))}
                        </ul>
                    </div>
                    <div className='submit'>
                        <button className='btn btn-delete'
                        onClick={() => this.deleteList()}>Delete</button>
                    </div>
                </form>
            </div>
        )
    }
}