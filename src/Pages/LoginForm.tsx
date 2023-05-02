import { ErrorMessage, Field, Form, Formik } from "formik";
import { useUser } from "../useUser";
import { ErrorLogin as Error } from "../types";

export default function LoginForm() {
    const { Login } = useUser()
    return (
        <Formik
            initialValues={{ username: '', password: '' }}
            validate={values => {
                const errors: Error = {};
                if (!values.username) {
                    errors.username = 'Required';
                } else if (
                    /^[a-zA-Z0-9]$/.test(values.username)
                ) {
                    errors.username = 'Invalid username';
                }
                if (!values.password) {
                    errors.password = 'Required';
                } else if (
                    /^[A-Z0-9._%+-]$/i.test(values.password)
                ) {
                    errors.password = 'Invalid password';
                }
                return errors;
            }}
            onSubmit={(values, { setSubmitting }) => {
                setSubmitting(false)
                Login(values)
            }}
        >
            {({ errors, isSubmitting }) => (
                <Form className="form">
                    <label className="form__login"> Put your usename
                        <Field type="text" className={errors.username ? 'inputerror' : ''} placeholder='Username' name="username" />
                        <ErrorMessage className="form__loginError" name="username" component="div" />
                    </label>
                    <label className="form__login">Put your password
                        <Field type="password" className={errors.password ? 'inputerror' : ''} placeholder='password' name="password" />
                        <ErrorMessage className="form__loginError" name="password" component="div" />
                    </label>
                    <button className="form__submit" type="submit" disabled={isSubmitting}>
                        Submit
                    </button>
                </Form>
            )}
        </Formik>
    )
}