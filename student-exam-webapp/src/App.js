import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import mathgender from './mathgender.png'
import mathlunch from './mathlunch.png'
import mathparents from './mathparents.png'
import mathrace from './mathrace.png'
import mathtest from './mathtest.png'
import readinggender from './readinggender.png'
import readinglunch from './readinglunch.png'
import readingparents from './readingparents.png'
import readingrace from './readingrace.png'
import readingtest from './readingtest.png'
import writinggender from './writinggender.png'
import writinglunch from './writinglunch.png'
import writingparents from './writingparents.png'
import writingrace from './writingrace.png'
import writingtest from './writingtest.png'
import blank from './blank.png' 

function App() {
  const [mathImage, setMathImage] = useState(blank);
  const [readingImage, setReadingImage] = useState(blank);
  const [writingImage, setWritingImage] = useState(blank);

  const displayMathImage = () => {
    if(document.getElementById("math").value === 'gender') {
      setMathImage(mathgender);
    } else if(document.getElementById("math").value === 'race') {
      setMathImage(mathrace);
    } else if(document.getElementById("math").value === 'parents') {
      setMathImage(mathparents);
    } else if(document.getElementById("math").value === 'lunch') {
      setMathImage(mathlunch);
    } else if(document.getElementById("math").value === 'test') {
      setMathImage(mathtest);
    }
  }

  const displayReadingImage = () => {
    if(document.getElementById("reading").value === 'gender') {
      setReadingImage(readinggender);
    } else if(document.getElementById("reading").value === 'race') {
      setReadingImage(readingrace);
    } else if(document.getElementById("reading").value === 'parents') {
      setReadingImage(readingparents);
    } else if(document.getElementById("reading").value === 'lunch') {
      setReadingImage(readinglunch);
    } else if(document.getElementById("reading").value === 'test') {
      setReadingImage(readingtest);
    }
  }

  const displayWritingImage = () => {
    if(document.getElementById("writing").value === 'gender') {
      setWritingImage(writinggender);
    } else if(document.getElementById("writing").value === 'race') {
      setWritingImage(writingrace);
    } else if(document.getElementById("writing").value === 'parents') {
      setWritingImage(writingparents);
    } else if(document.getElementById("writing").value === 'lunch') {
      setWritingImage(writinglunch);
    } else if(document.getElementById("writing").value === 'test') {
      setWritingImage(writingtest);
    }
  }

  return (

    <div className="App">
      <div>
        <h1>Welcome to the Students Performance in Exams Visualization</h1>
        <h3>Created By UIUC Students: Sumedh Vaidyanathan, Shouri Addepally, Sidharth Rajaram, Arpandeep Khatua, Shashank Mahesh</h3>
      </div>
      <div>
      <label for="math">Choose Feature to Display (Math Exam):</label>
      <select id="math" name="math">
        <option value="gender">Gender</option>
        <option value="race">Race / Ethnicity</option>
        <option value="parents">Parental Level of Education</option>
        <option value="lunch">Lunch Plan</option>
        <option value="test">Test Preparation Course</option>
      </select>
      <button type="button" onClick={displayMathImage}>Select</button>
      </div>
      <img src={mathImage} onClick={() => displayMathImage} />

      <div>
      <label for="reading">Choose Feature to Dsiplay (Reading Exam):</label>
      <select id="reading" name="reading">
        <option value="gender">Gender</option>
        <option value="race">Race / Ethnicity</option>
        <option value="parents">Parental Level of Education</option>
        <option value="lunch">Lunch Plan</option>
        <option value="test">Test Preparation Course</option>
      </select>
      <button type="button" onClick={displayReadingImage}>Select</button>
      </div>
      <img src={readingImage} onClick={() => displayReadingImage} />

      <div>
      <label for="writing">Choose Feature to Dsiplay (Writing Exam):</label>
      <select id="writing" name="writing">
        <option value="gender">Gender</option>
        <option value="race">Race / Ethnicity</option>
        <option value="parents">Parental Level of Education</option>
        <option value="lunch">Lunch Plan</option>
        <option value="test">Test Preparation Course</option>
      </select>
      <button type="button" onClick={displayWritingImage}>Select</button>
      </div>
      <img src={writingImage} onClick={() => displayWritingImage} />
    </div>
  );
}

export default App;
