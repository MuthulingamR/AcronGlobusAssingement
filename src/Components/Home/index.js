import {Component} from 'react'
import QuestionItem from '../QuestionItem'
import { IoIosSearch } from "react-icons/io";
import { IoGlobeOutline } from "react-icons/io5";
import { MdOutlineMonitor } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";


import './index.css'

class Home extends Component{
    state ={
        questionsList : [],
        searchText: ''
    }

    componentDidMount() {
        this.getQuestionsDetails()
    }

    getQuestionsDetails = async () => {
        const apiUrl = "https://api.stackexchange.com/2.3/questions?order=desc&sort=activity&site=stackoverflow"
        const response = await fetch(apiUrl)
        if (response.ok){
            const data = await response.json()
            this.setState({questionsList: data.items})
        }
    }

    onChangeSearchText = event => {
        this.setState({searchText: event.target.value})
    }

    getSearchQuestionDetails = async () => {
        const {searchText} = this.state
        const apiUrl = `https://api.stackexchange.com/2.3/similar?order=desc&sort=activity&title=${searchText}&site=stackoverflow`
        const response = await fetch(apiUrl)
        if (response.ok){
            const data = await response.json()
            this.setState({questionsList: data.items})
        }
    }

    onPressEnter = event => {
        if (event.key === 'Enter'){
            this.getSearchQuestionDetails()
        }
    }

    render(){
        const {questionsList, searchText} = this.state
        if (searchText === ""){
            this.getQuestionsDetails()
        }
        return(
            <div className='home-container'>
                <div className='home-header'>
                    <div className='input-container'>
                        <IoIosSearch className='search-icon' />
                        <input
                            className="search-text"
                            type="text"
                            placeholder="search"
                            onKeyUp={this.onPressEnter}
                            value={searchText}
                            onChange={this.onChangeSearchText}
                        />
                    </div> 
                    <div className='header-profile-container'>
                        <p className='home-header-para'><IoGlobeOutline /> Help</p>
                        <p className='home-header-para'><MdOutlineMonitor /> Tour</p>
                        <p className='home-header-para'><FaRegUser /> User</p>
                    </div>
                </div>
                  
                <h1 className='home-heading'>Questions</h1> 
                <div className='features-container'>
                    <p className='features-para selected-features'>intresting</p>
                    <p className='features-para'>featured</p>
                    <p className='features-para'>hot</p>
                    <p className='features-para'>week</p>
                    <p className='features-para'>month</p>
                </div>
            
                {questionsList.length === 0 ? <p className='no-question-found'>No question found</p> :
                    <ul className='home-ul-container'>
                    {questionsList.map(each => (
                        <QuestionItem key={each.question_id} questionDetails={each} />
                ))}
                </ul>}
            </div>
          
            
        )
    }
}

export default Home