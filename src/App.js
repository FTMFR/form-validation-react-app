import logo from './logo.svg';
import './App.css';

function App() {
  const [userName, setUserName] = useState("");
  const [userFamily, setUserFamily] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [submit, setSubmit] = useState(false);
  const [allValid, setAllValid] = useState(false);

  const userNameHandler = (e) => {
    setUserName(e.nativeEvent.target.value);
  };

  const userFamilyHandler = (e) => {
    setUserFamily(e.nativeEvent.target.value);
  };

  const userEmailHandler = (e) => {
    setUserEmail(e.nativeEvent.target.value);
  };

  const isSubmitHandler = (e) => {
    setSubmit(!submit);
    console.log(e);
    e.preventDefault();

    if (
      userName.length !== 0 &&
      userFamily.length !== 0 &&
      userEmail.length !== 0
    ) {
      setAllValid(true);

      setTimeout(() => {
        setAllValid(false);
      }, 3000);
    } else {
      setAllValid(false);
    }
  };

  return (
    <div className="body">
      <div className="container">
        <form
          onSubmit={isSubmitHandler}
          autoComplete="off"
          className="register-form"
        >
          {allValid && (
            <div className="allValid">
              <p>Your submit was successfully!</p>
            </div>
          )}
          <div className="content">
            <input
              type="text"
              value={userName}
              onChange={(e) => userNameHandler(e)}
              placeholder="First Name"
            />
            {submit && userName.length === 0 && (
              <span>This input can't be empty!</span>
            )}
          </div>

          <div className="content">
            <input
              type="text"
              value={userFamily}
              onChange={(e) => userFamilyHandler(e)}
              placeholder="Last Name"
            />
            {submit && userFamily.length === 0 && (
              <span>This input can't be empty!</span>
            )}
          </div>

          <div className="content">
            <input
              type="text"
              value={userEmail}
              onChange={(e) => userEmailHandler(e)}
              placeholder="Email"
            />
            {submit && userEmail.length === 0 && (
              <span>This input can't be empty!</span>
            )}
          </div>
          <button>Submit</button>
        </form>
      </div>
    </div>
  );

}

export default App;
