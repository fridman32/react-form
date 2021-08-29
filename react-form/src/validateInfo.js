export default function validateInfo(values) {
    let errors = {}
    //Email regex validation
    const Evalidation = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (!values.username.trim()) {
        errors.username = "Username required"
    }

    if (!values.email) {
        errors.email = "Email required"
        //if value is not an email address
    } else if (!Evalidation.test(values.email)) {
        errors.email = "Email address is invalid"
    }

    if (!values.password) {
        errors.password = "Password is required"
    } else if (values.password.length < 6) {
        errors.password = "Password need to be 6 characters or more"
    }

    if (!values.password2) {
        errors.password2 = "confirm Password is required"
    } else if (values.password2 !== values.password) {
        errors.password2 = "Password do not match"
    }

    return errors;
}