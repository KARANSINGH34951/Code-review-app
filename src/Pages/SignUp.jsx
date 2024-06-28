import { useState,useEffect } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { app } from "../firebase/firebaseconfig";
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { login } from '../feature/userSlice';
import gsap from 'gsap';


const auth = getAuth(app);

const SignUp = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [loading, setLoading] = useState(false);
  const [signIn, setSignIn] = useState(true);
  const [msg, setMsg] = useState("");
  

  const handleClick = () => {
    setMsg("");
    setUsername("")
    setPassword("")
    setEmail("")
    setConfirmPassword("")
    setSignIn(!signIn);
  };

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const createUser = () => {
    if (signIn && (!username || !email || !password || !confirmPassword)) {
      setMsg("All fields are required.");
      return;
    }

    if (!validateEmail(email)) {
      setMsg("Invalid email format.");
      return;
    }

    if (signIn && password !== confirmPassword) {
      setMsg("Passwords do not match.");
      return;
    }

    if (signIn && !acceptedTerms) {
      setMsg("You must accept the terms and conditions.");
      return;
    }

    setLoading(true);
    if (signIn) {
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user);
          setLoading(false);
          dispatch(login({
            name: username,
            email: email,
            password: password,
            loggedIn: true
          }));
          navigate("/");
        })
        .catch((error) => {
          const errorMessage = error.message;
          setLoading(false);
          setMsg(errorMessage);
        });
    } else {
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user);
          dispatch(login({
            name: username,
            email: email,
            password: password,
            loggedIn: true
          }));
          navigate("/");
        })
        .catch((error) => {
          const errorMessage = error.message;
          setMsg(errorMessage);
        });
    }
  };

  // Animation using GSAP (example)
  useEffect(() => {
    gsap.fromTo(".sign-up-container", { opacity: 0, y: -50 }, { opacity: 1, y: 0, duration: 1, ease: "power3.out" });
  }, []);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
      <div className="sign-up-container p-8 bg-white rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-2xl font-bold mb-4 text-center text-gray-800">
          {signIn ? "Sign Up" : "Sign In"}
        </h2>

        {signIn && (
          <input
            type="text"
            id="username"
            onChange={(e) => setUsername(e.target.value)}
            value={username}
            placeholder="Username"
            className="sign-up-input w-full px-4 py-2 mb-4 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-600"
          />
        )}

        <input
          type="text"
          id="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          placeholder="Email"
          className="sign-up-input w-full px-4 py-2 mb-4 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-600"
        />

        <input
          type="password"
          id="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          placeholder="Password"
          className="sign-up-input w-full px-4 py-2 mb-4 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-600"
        />

        {signIn && (
          <input
            type="password"
            id="confirm-password"
            onChange={(e) => setConfirmPassword(e.target.value)}
            value={confirmPassword}
            placeholder="Confirm Password"
            className="sign-up-input w-full px-4 py-2 mb-4 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-600"
          />
        )}

        {signIn && (
          <div className="flex items-center mb-4">
            <input
              type="checkbox"
              id="terms"
              onChange={(e) => setAcceptedTerms(e.target.checked)}
              checked={acceptedTerms}
              className="mr-2"
            />
            <label htmlFor="terms" className="text-gray-700">I accept the terms and conditions</label>
          </div>
        )}

        <span className="text-red-500">{msg}</span>

        <button
          onClick={createUser}
          className={`sign-up-button w-full py-2 bg-purple-600 text-white rounded-lg font-semibold hover:bg-purple-700 transition duration-300 ${loading ? 'cursor-not-allowed' : ''}`}
          disabled={loading}
        >
          {loading ? (
            <div className="flex items-center justify-center">
              <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              <span className="ml-2">{signIn ? "Signing Up..." : "Signing In..."}</span>
            </div>
          ) : (
            signIn ? "SIGN UP" : "SIGN IN"
          )}
        </button>

        <button className="text-center justify-center p-3" onClick={handleClick}>
          {signIn ? "Already a User? Sign In" : "New User? Sign Up Now"}
        </button>

        {/* Engaging Image or Animation */}
        <div className="mt-4 flex justify-center">
          {/* Example of an engaging image */}
          <img src="/path/to/your/image.jpg" alt="Welcome Image" className="max-w-full h-auto" />

          {/* Example of GSAP animation (you can modify based on your GSAP setup) */}
          {/* <div ref={animationRef} className="animation-element">
              Your GSAP animation here
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default SignUp;
