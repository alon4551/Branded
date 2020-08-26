const initState = {
    firstName: '',
    lastname: '',
    email: '',
    birthday: Date.now(),
    gender: '',
    password: ''
}
const fillReducer = (state = initState, action) => {
    switch (action.type) {
        case 'firstName':
            state.firstName = action.payload;
            break;
        case 'lastName':
            state.lastName = action.payload;
            break;
        case 'email':
            state.email = action.payload;
            break;
        case 'birthday':
            state.birthday = action.payload;
            break;
        case 'gender':
            state.gender = action.payload;
            break;
        case 'password':
            state.password = action.payload;
            break;
    }
    return state;
}
export default fillReducer;