export default (state, action) => {
    switch(action.type) {
        case 'DELETE_SNEAKER':
            return {
                ...state,
                sneakers: state.sneakers.filter(sneaker => sneaker.id !==
                action.payload)
            }
        default:
            return state;
    }
}