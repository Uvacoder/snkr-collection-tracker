export default (state, action) => {
    switch(action.type) {
        case 'DELETE_SNEAKER':
            return {
                ...state,
                sneakers: state.sneakers.filter(sneaker => sneaker.id !==
                action.payload)
            }
            case 'ADD_SNEAKER':
                return {
                    ...state,
                    sneakers: [action.payload, ...state.sneakers]
                }
        default:
            return state;
    }
}