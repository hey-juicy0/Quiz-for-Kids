import React, { useState, useEffect } from 'react';
import './Flags.css';
import Nav from './Nav';

const Flags = () => {
  const countries = [
    "미국", "중국", "일본", "독일", "영국", "프랑스", "인도", "브라질", "러시아", 
    "캐나다", "이탈리아", "대한민국", "호주", "스페인", "멕시코", "인도네시아", 
    "튀르키예", "사우디아라비아", "남아프리카 공화국", "아르헨티나", "네덜란드", 
    "스위스", "스웨덴", "폴란드", "벨기에", "노르웨이", "오스트리아", "이스라엘", 
    "싱가포르", "아랍에미리트"
  ];

  const [currentCountryIndex, setCurrentCountryIndex] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [correctAnswer, setCorrectAnswer] = useState('');

  useEffect(() => {
    generateQuestion();
  }, [currentCountryIndex]);

  const generateQuestion = () => {
    const currentCountry = countries[currentCountryIndex];
    const otherCountries = countries.filter(country => country !== currentCountry);
    const shuffledAnswers = getRandomElements([currentCountry, ...getRandomElements(otherCountries, 2)]);
    setCorrectAnswer(currentCountry);
    setAnswers(shuffledAnswers);
  };

  const getRandomElements = (array, number) => {
    const shuffled = [...array].sort(() => Math.random() - 0.5); // Spread operator를 사용해 원본 배열을 변경하지 않음
    return shuffled.slice(0, number);
  };

  const handleAnswerClick = (selectedCountry) => {
    if (selectedCountry === correctAnswer) {
      alert("정답입니다!");
    } else {
      alert(`틀렸습니다. 정답은 ${correctAnswer}입니다.`);
    }
    moveToNextQuestion();
  };

  const moveToNextQuestion = () => {
    if (currentCountryIndex < countries.length - 1) {
      setCurrentCountryIndex(currentCountryIndex + 1);
    } else {
      alert('퀴즈를 모두 완료했습니다! 다시 시작합니다.');
      setCurrentCountryIndex(0);
    }
  };

  return (
    <>
      <Nav />
      <div className='flags_app'>
        <h1>어떤 나라일까요?</h1>
        <p className='flags_number'>{currentCountryIndex + 1} 번째 문제 (전체 {countries.length} 문제)</p>
        {currentCountryIndex < countries.length ? (
          <>
            <div>
            <img src={`/flags/${correctAnswer}.svg`} alt={correctAnswer} />
            </div>
            <div className='flags_container'>
              {answers.map(answer => (
                <button key={answer} onClick={() => handleAnswerClick(answer)}>
                  {answer}
                </button>
              ))}
            </div>
          </>
        ) : (
          <p>퀴즈 종료!</p>
        )}
      </div>
    </>
  );
};

export default Flags;
