import { Formik, Form, Field,ErrorMessage } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object({
    username: Yup.string().required("Username is required"),
    email: Yup.string().email("invalid email").required("Email is required"),
    password: Yup.string().min(6, "Password too short").required("Password is required")
});

const RegistrationForm = () => {
    return(
        <Formik
            initialValues={{username: "", email: "", password: ""}}
            validationSchema={validationSchema}
            onSubmit={(values) => console.log("Form Submitted", values)}
        >
            <Form style={{display: "flex", flexDirection: "column", gap: "5px", width: "300px"}}>
                <label>Username</label>
                <Field type="text" name="username" placeholder="Username"/>
                <ErrorMessage name="username" component="p" style={{color: "red"}}/>

                <label>Email</label>
                <Field type="email" name="email" placeholder="Email"/>
                <ErrorMessage name="email" component="p" style={{color: "red"}}/>

                <label>Password</label>
                <Field type="password" name="password" placeholder="Password" />
                <ErrorMessage name="password" component="p" style={{color: "red"}}/>

                <button type="submit" style={{ padding: "10px", color: "white", backgroundColor: "green", border: "none" }}>
                    Submit
                </button>

            </Form>

        </Formik>
    )
}

  
export default RegistrationForm;