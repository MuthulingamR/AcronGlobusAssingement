import './index.css'
import {formatDistanceToNow} from 'date-fns'
import { IoEyeOutline } from "react-icons/io5";
import { RiQuestionAnswerLine } from "react-icons/ri";
import { AiOutlineLike } from "react-icons/ai";

const QuestionItem = props => {
    const {questionDetails} = props
    const {
        title, 
        tags, 
        view_count, 
        link, 
        answer_count,
        creation_date,
        score,
    } = questionDetails

    const postDate = new Date(creation_date * 1000)

    return (
        <>
          <li className='question-item-container'>
                <div className='question-title-container'>
                <a className='question-link' href={`${link}`}>
                    <h1 className='question-title'>{title}</h1>
                </a>
                    <ul className='question-tags-ul-container'>
                        {tags.map((each, index) => (
                            <li className='question-tag' key={index}>{each}</li>
                        ))}
                    </ul>
                    <p className='question-post-date'>{formatDistanceToNow(postDate)}</p>
                </div>
                <div className='question-counting-container'>
                    <div className='counting-container'>
                        <p className='counting-para'>{score > 0 ? score : 0}</p>
                        <p className='counting-para'>votes</p>
                        <p className='counting-para'><AiOutlineLike  /></p>
                    </div>
                    <div className='counting-container'>
                        <p className='counting-para'>{answer_count}</p>
                        <p className='counting-para'>answer</p>
                        <p className='counting-para'><RiQuestionAnswerLine /></p>
                    </div>
                    <div className='counting-container'>
                        <p className='counting-para'>{view_count}</p>
                        <p className='counting-para'>views</p>
                        <p className='counting-para'><IoEyeOutline /></p>
                    </div>
                </div>       
            </li>
            <hr />
        </>
    )
}

export default QuestionItem