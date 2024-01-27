import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import {
  Alert,
  Button,
  Card,
  Checkbox,
  Label,
  TextInput,
} from "flowbite-react";
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
import { app } from "../Firebase";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const DashboardProfile = () => {
  //initialize global variable
  const { currentUser } = useSelector((state) => state.user);
  const { photoUrl, email, username } = currentUser.rest;

  //refernce for profile pic upload
  const profileImageRef = useRef();

  //variable to store profile image
  const [profileImage, setProfileImage] = useState(null);
  const [imageURL, setImageURL] = useState(null);
  const [imageFileUploadProgress, setImageFileUploadProgress] = useState(null);
  const [imageFileUploadError, setImageFileUploadError] = useState(null);
  const [imageFileUploading, setImageFileUploading] = useState(false);
  const [updateUserSuccess, setUpdateUserSuccess] = useState(null);

  const [formData, setFormData] = useState({});

  const handleProfileImage = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfileImage(e.target.files[0]);
      setImageURL(URL.createObjectURL(file));
    }
  };

  console.log(imageFileUploadProgress);

  useEffect(() => {
    if (profileImage) {
      uploadImage();
    }
  }, [profileImage]);

  const uploadImage = async () => {
    setImageFileUploading(true);
    setImageFileUploadError(null);
    const storage = getStorage(app);
    const fileName = new Date().getTime() + profileImage.name;
    const storageRef = ref(storage, fileName);
    const uploadTask = uploadBytesResumable(storageRef, profileImage);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;

        setImageFileUploadProgress(progress.toFixed(0));
      },
      (error) => {
        setImageFileUploadError(
          "Could not upload image (File must be less than 2MB)"
        );
        setImageFileUploadProgress(null);
        setImageFile(null);
        setImageURL(null);
        setImageFileUploading(false);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setImageURL(downloadURL);
          setFormData({ ...formData, profilePicture: downloadURL });
          setImageFileUploading(false);
        });
      }
    );
  };

  return (
    <>
      <div className="w-full flex items-center justify-center my-5">
        <Card className="w-[70%] md:w-[60%]">
          <form className="flex flex-col gap-4">
            <input
              type="file"
              accept="image/*"
              onChange={handleProfileImage}
              ref={profileImageRef}
              hidden
            />
            <div
              className="flex flex-col items-center relative"
              onClick={() => profileImageRef.current.click()}
            >
              {imageFileUploadProgress && (
                <CircularProgressbar
                  value={imageFileUploadProgress || 0}
                  text={`${imageFileUploadProgress}%`}
                  strokeWidth={5}
                  styles={{
                    root: {
                      width: "100%",
                      height: "100%",
                      position: "absolute",
                      top: 0,
                      left: 0,
                    },
                    path: {
                      stroke: `rgba(62, 152, 199, ${
                        imageFileUploadProgress / 100
                      })`,
                    },
                  }}
                />
              )}
              <img
                alt="Profile Image"
                height="96"
                src={imageURL || photoUrl}
                width="96"
                className="mb-3 rounded-full shadow-lg border-4 dark:border-gray-600"
              />
            </div>
            {imageFileUploadError && (
              <Alert color="failure">{imageFileUploadError}</Alert>
            )}
            <div>
              <div className="mb-2 block">
                <Label htmlFor="email1" value="Your Username" />
              </div>
              <TextInput
                id="username"
                type="text"
                placeholder="username"
                defaultValue={username}
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="email1" value="Your Email" />
              </div>
              <TextInput
                id="email"
                type="email"
                placeholder="name@name.com"
                defaultValue={email}
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="password" value="Your Password" />
              </div>
              <TextInput id="password" type="password" placeholder="password" />
            </div>

            <Button gradientDuoTone={"purpleToPink"} type="submit" outline>
              Update
            </Button>
            <div className="flex items-center justify-between mt-3 text-red-500 font-semibold tracking-wide ">
              <div className="cursor-pointer">Delete Account</div>
              <div className="cursor-pointer">Sign Out</div>
            </div>
          </form>
        </Card>
      </div>
    </>
  );
};

export default DashboardProfile;
