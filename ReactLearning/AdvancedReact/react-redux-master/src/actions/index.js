//actions
const increment = (val) => {
    return {
        type : 'INCREMENT',
        inc : val
    }
}

const decrement = (val) => {
    return {
        type : 'DECREMENT',
        inc : val
    }
}

export default increment;
export {decrement};