import { useForm, Controller } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import studentBigImage from "../../assets/Svgs/StudentBigImage.svg";
import teacherBIgImage from "../../assets/Svgs/teacherBIgImage.svg";
import eyeIcone from "../../assets/Svgs/eyeIcone.svg";
import mailIcon from "../../assets/Svgs/mailIcon.svg";
import studentImage from "../../assets/Svgs/student.svg";
import teacherImage from "../../assets/Svgs/teacher.svg";
import { Box } from "@mui/material";

import "./Login.css";
import { useState } from "react";
import { Link } from "react-router-dom";
const schema = yup.object().shape({
  email: yup.string(),
  password: yup.string(),
});

const StudentLogin = () => {
  const [password, setPassword] = useState(false);
  const handelPassword = () => {
    setPassword(!password);
  };
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data) => {
    console.log(data);
  };
  const [student, setStudent] = useState(true);
  console.log("value", student);
  //   const [teacher, setTeacher] = useState(false);
  const handleStudentClick = () => {
    setStudent(true);
  };

  const handleTeacherClick = () => {
    setStudent(false);
  };
  return (
    <>
      <div className="auth-container">
        <div className="big-image">
          <img
            src={student ? studentBigImage : teacherBIgImage}
            alt="big image"
          />
        </div>
        <div className="auth-content">
          {/* <AuthShared></AuthShared> */}
          <div className="auth-icons">
            <img
              src={studentImage}
              alt="Student"
              className={student ? "active" : "grey"}
              onClick={handleStudentClick}
            />
            <img
              src={teacherImage}
              alt="Teacher"
              className={student ? "grey" : "active"}
              onClick={handleTeacherClick}
            />
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <h1>{student ? "Student's" : "Teacher's"} Platform</h1>
            <h3>Login to your account to continue</h3>
            <div
              style={{
                gap: "10px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Controller
                name="email"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <input
                    className="contact-input auth-input"
                    {...field}
                    placeholder="Email"
                  />
                )}
              />
              <img src={mailIcon} alt="icon" className="mail-icon" />
              <p>{errors.email?.message}</p>
            </div>
            <div>
              <Controller
                name="password"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <input
                    type={password ? "text" : "password"}
                    className="contact-input auth-input"
                    {...field}
                    placeholder="Password"
                  />
                )}
              />
              <img
                src={eyeIcone}
                onClick={handelPassword}
                alt="icon"
                className="eye-icon"
              />
              <p>{errors.password?.message}</p>
            </div>
            <p style={{ padding: "20px 7px" }}>I forgot my password !</p>

            <Box display={"flex"} justifyContent={"center"}>
              <button type="submit" className="primary-btn">
                <Link
                  to={student ? "/welcome" : "/AdultDashboard"}
                  style={{
                    textDecoration: "none",
                    color: "#000",
                  }}
                >
                  Login
                </Link>
              </button>
            </Box>
          </form>
          <p className="last-p">I don t have an account !</p>
        </div>
      </div>
    </>
  );
};

export default StudentLogin;
