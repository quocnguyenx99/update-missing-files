export default function logger(reducer) {
    return (prevState, action, args) => {
        console.group(action)
        console.log('Prev State: ', prevState)
        console.log('Actions arguments: ', args)
        const nextState = reducer(prevState, action, args)

        console.log('Next State: ', nextState)
        console.groupEnd()
        return nextState
    }
}