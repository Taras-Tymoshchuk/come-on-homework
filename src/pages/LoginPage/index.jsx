import { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import s from "./style.module.scss";
import logo from "../../assets/images/logo.svg";
const LoginSchema = Yup.object().shape({
  username: Yup.string().required("Required"),
  password: Yup.string().required("Required"),
});

export const Login = () => {
  const [error, setError] = useState(false);
  const history = useHistory();

  const onSubmit = async (values) => {
    try {
      const res = await axios.post("http://localhost:3001/login", {
        ...values,
      });
      if (res.data.status === "success") {
        localStorage.setItem("user", JSON.stringify(res.data.player));
        localStorage.setItem("username", values.username);
        history.push("/games");
      } else {
        setError(true);
      }
    } catch (error) {
      setError(true);
      console.log(error);
    }
  };
  return (
    <div className={s.login}>
      <div className={s.logo}>
        <img src={logo} alt="comeon-logo" />
      </div>
      <div className={s.login_form}>
        <Formik
          validationSchema={LoginSchema}
          initialValues={{
            username: "",
            password: "",
          }}
          onSubmit={async (values) => {
            await onSubmit(values);
          }}
        >
          <Form>
            <Field
              className={s.username}
              id="username"
              name="username"
              placeholder="username"
              type="text"
            />
            <Field
              className={s.password}
              id="password"
              name="password"
              placeholder="password"
              type="password"
            />
            <button type="submit">LOGIN</button>
            {error && <p>Player does not exist or wrong password</p>}
          </Form>
        </Formik>
      </div>
    </div>
  );
};
