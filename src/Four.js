import { useEffect, useState } from 'react';
import data from './Four.json';
import Nav from './Nav';
import './Four.css';
import { FaCircleCheck } from "react-icons/fa6";
import { MdCancel } from "react-icons/md";


const Four = () => {
    const [words] = useState(data);
    const [random, setRandom] = useState({});
    const [isHint, setIsHint] = useState(false);
    const [isCorrect, setIsCorrect] = useState(false);
    const [isWrong, setIsWrong] = useState(false);
    const [userAnswer, setUserAnswer] = useState("");
    const [showAnswer, setShowAnswer] = useState(false);


    const selectRandomWord = () => {
        const getRandom = Math.floor(Math.random() * words.length);
        setRandom(words[getRandom]);
    };

    useEffect(() => {
        selectRandomWord();
    }, []);

    useEffect(() => {
        if(userAnswer.length == 4){
            if (userAnswer === random.사자성어) {
                setIsCorrect(true);
                setIsWrong(false);
    
                const timer = setTimeout(() => {
                    setIsCorrect(false);
                    setIsWrong(false);
                    selectRandomWord(); 
                    setUserAnswer(""); 
                }, 1000);
    
                return () => clearTimeout(timer); 
            }
            else{
                setIsWrong(true);
                setIsCorrect(false);
                const timer = setTimeout(() => {
                    setIsWrong(false);
                    setIsCorrect(false);
                    setUserAnswer(""); 
                }, 1000);
    
                return () => clearTimeout(timer); 
            }
        }
        else{
            setIsCorrect(false);
            setIsWrong(false);
        }
    }, [userAnswer, random.사자성어]);

    return (
        <>
            <Nav />
            <div className="four_app">
                <h1>사자성어</h1>
                <div className="four_main">
                    <div className='four_title'>다음 뜻에 해당하는 사자성어는 무엇일까요?</div>
                    <div className='four_question'>
                        {random.뜻}
                    </div>
                    <div onClick={() => setIsHint(!isHint)} className='four_hint'>{isHint ? `힌트 숨기기`: `힌트 보기`}</div>
                    {isHint &&
                        <div className='four_example'>
                            {random.예시}
                        </div>
                    }
                    {isHint &&
                        <div className='four_showAnswer' onClick={() => setShowAnswer(true)}>
                            정답 보기
                        </div>
                    }
                    {isHint && showAnswer && 
                    <div className='four_answer'>
                        정답: {random.사자성어}
                    </div>
                    }
                </div>
                <div className='four_bottom'>
                    {isCorrect &&
                        <div className='four_correct'>
                            <FaCircleCheck />
                            정답입니다!
                        </div>}
                    {isWrong &&
                        <div className='four_wrong'>
                            <MdCancel />
                            틀렸습니다! 다시 시도하세요!
                        </div>}
                    <input
                        className='four_square'
                        onChange={(e) => setUserAnswer(e.target.value)}
                        value={userAnswer}
                    />
                </div>
            </div>
        </>
    );
};

export default Four;
