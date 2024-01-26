import { Button } from "flowbite-react";
import React from "react";
import { AiFillGoogleCircle } from "react-icons/ai";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { app } from "../../Firebase";
import axios from "axios";
import { useDispatch } from "react-redux";
import { signInSuccess, signInFailure } from "../../redux/user/userSlice";
import { useNavigate } from "react-router-dom";

const OAuth = () => {
  //navigarion const
  const navigate = useNavigate();
  //dispatch variable
  const dispatch = useDispatch();

  const handleGoogleAuth = async () => {
    const provider = new GoogleAuthProvider();
    const auth = getAuth(app);
    provider.setCustomParameters({ prompt: "select_account" });
    try {
      const resultFromGoogle = await signInWithPopup(auth, provider);
      const { displayName, email, photoURL } = resultFromGoogle.user;
      const { data } = await axios.post("/api/user/google", {
        name: displayName,
        email,
        googlePhotoUrl: photoURL,
      });
      console.log(data);
      if (data.success) {
        dispatch(signInSuccess(data));
        navigate("/");
      } else {
        dispatch(signInFailure(data.message));
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="mt-3">
      <Button
        className="w-full"
        gradientDuoTone="pinkToOrange"
        outline
        onClick={handleGoogleAuth}
      >
        <AiFillGoogleCircle className="w-6 h-6 mr-2" />
        Continue With Google
      </Button>
    </div>
  );
};

export default OAuth;
