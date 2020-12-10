import Header from './Components/Header';
import CardContainer from './Components/CardContainer';

const images = [
  'https://www.hillspet.com/content/dam/cp-sites/hills/hills-pet/en_us/exported/dog-care/new-pet-parent/images/golden-retriever-puppy-running-outside.jpg',
  'https://www.fox26medford.com/wp-content/uploads/2020/04/AprilShoe-720x399-1.jpg',
  'https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/12231413/Labrador-Retriever-MP.jpg'
]

const App = () => {
  return (
    <div className="App">
      <Header />
      <CardContainer images={images} />
    </div>
  );
}

export default App;
