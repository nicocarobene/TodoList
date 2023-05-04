import { Formik, Form, Field, ErrorMessage } from 'formik'
import './LoginForm.css'
import { useUser } from '../useUser'
import { type ErrorRegister as Error } from '../types'

export default function RegisterForm () {
  const { Register } = useUser()
  return (
        <Formik
            initialValues={{ username: '', name: '', email: '', password: '' }}
            validate={values => {
              const errors: Error = {}
              if (!values.email) {
                errors.email = 'Required'
              } else if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
              ) {
                errors.email = 'Invalid email address'
              }

              if (!values.username) {
                errors.username = 'Required'
              } else if (
                /^[a-zA-Z0-9]$/.test(values.username)
              ) {
                errors.username = 'Invalid username'
              }
              if (!values.name) {
                errors.name = 'Required'
              } else if (
                /^[a-zA-Z0-9]$/.test(values.name)
              ) {
                errors.name = 'Invalid nickname'
              }
              if (!values.password) {
                errors.password = 'Required'
              } else if (
                /^[A-Z0-9._%+-]$/i.test(values.password)
              ) {
                errors.password = 'Invalid password'
              }
              return errors
            }}
            onSubmit={(values, { setSubmitting }) => {
              setSubmitting(false)
              Register(values)
            }}
        >
            {({ errors, isSubmitting }) => (
                <Form className="form">
                    <label className="form__login">Put yout email:
                        <Field type="email" className={errors.email ? 'inputerror' : ''} placeholder='example@email.com' name="email" />
                        <ErrorMessage className="form__loginError" name="email" component="div" />
                    </label>
                    <label className="form__login"> Put you usename:
                        <Field type="text" className={errors.username ? 'inputerror' : ''} placeholder='Username123' name="username" />
                        <ErrorMessage className="form__loginError" name="username" component="div" />
                    </label>
                    <label className="form__login">Put your nickname:
                        <Field type="text" className={errors.name ? 'inputerror' : ''} placeholder='Nico' name="name" />
                        <ErrorMessage className="form__loginError" name="name" component="div" />
                    </label>
                    <label className="form__login">Put your password:
                        <Field type="password" className={errors.password ? 'inputerror' : ''} placeholder='*******' name="password" />
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
