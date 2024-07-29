import logo from './logo.svg';
import './App.css';
import UserFavoriteAnimals from './components/UserFavoriteAnimals';
import Exercise from './components/Exercise3';

// In the App.js file, display a “Hello World!” message in a paragraph.
// Create a constant variable with JSX const myelement = <h1>I Love JSX!</h1>;, and render it on the page.
// Create a constant variable named sum, which value is 5 + 5. Render on the page, the following sentence "React is <sum> times better with JSX"

function App() {
  const sum = 5 + 5
  const myelement = <h1>I Love JSX!</h1>;
  const user = {
    firstName: 'Bob',
    lastName: 'Dylan',
    favAnimals : ['Horse','Turtle','Elephant','Monkey']
  };

  return (
    <div className="App">
      <section className='exercise1'>
        <p>Hello World!</p>
        {myelement}
        <p>React is {sum} times better with JSX</p>
      </section>
      <section className='exercise2'>
        <h3>{user.firstName}</h3>
        <h3>{user.lastName}</h3>
        <UserFavoriteAnimals favAnimals={user.favAnimals}/>
      </section>
      <section className='exercise3'>
        <Exercise />
      </section>
    </div>
  );
}

export default App;
