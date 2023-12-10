import { useFormik } from "formik";

const LoginForm = () => {
    // Pass the useFormik() hook initial form values and a submit function that will
    // be called when the form is submitted
    // he hook then returns form state and helper methods in a variable we call formik
    // Helper Methods:
    //      handleSubmit: A submission handler
    //      handleChange: A change handler to pass to each <input>, <select>, or <textarea>
    //      values: Our form’s current values
    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
        },
        onSubmit: (values) => {
            console.log(JSON.stringify(values));
        },
    });

    // pass an id and name HTML attribute that matches the property defined in initialValues

    return (
        <form onSubmit={formik.handleSubmit}>
            <label htmlFor="email">Email</label>
            <input
                type="text"
                name="email"
                id="emai"
                onChange={formik.handleChange}
                value={formik.values.email}
            />

            <label htmlFor="password">Password</label>
            <input
                type="password"
                name="password"
                id="password"
                onChange={formik.handleChange}
                value={formik.values.password}
            />

            <button type="submit">Submit</button>
        </form>
    );
};

export default LoginForm;
