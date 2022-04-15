const initialState = {
    reduxCounter: 1
}

//action = {type: "", payload: {}};

const HomeReducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case "RESET":
            return { ...initialState }
        case "INCREMENT":
            return { ...state, ...payload }
        // return { ...state, ...{ reduxCounter: state.reduxCounter + 1 } }
        case "DECREMENT":
            let dataToUpdate = { ...state, ...{ reduxCounter: state.reduxCounter - 1 } };
            console.log("dataToUpdate", dataToUpdate)
            return { ...dataToUpdate }
        default:
            return { ...state }
    }
}

export default HomeReducer;