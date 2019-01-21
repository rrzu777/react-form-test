export const updateObject = (oldObject, newPropertys) => ({ ...oldObject, ...newPropertys })


export const checkValidity = (value, rules) => {
    let isValid = true;

    if(rules.required) {
        isValid = value.trim() !== '' && isValid;
    }

    if(rules.email) {
        const emailRgx = /\S+@\S+\.\S+/ 
        isValid = emailRgx.test(value)
    }

    if(rules.minLength) {
        isValid = value.length >= 4 && isValid;
    }

    return isValid;
}