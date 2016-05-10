import 'isomorphic-fetch'

function matchery(region, summoner) {

    return fetch(`${window.location.protocol}//${window.location.host}:${window.location.port}/matchery/${region}/${summoner}`)
        .then(response =>
            response.json().then(json => ({ json, response }))
        ).then(({ json, response }) => {
            if (!response.ok) {
                return Promise.reject(json)
            }
            return Object.assign({},
                json
            )
        })
}

export const CALL_API = Symbol('Call API')

export default store => next => action => {
    function actionWith(data) {
        const finalAction = Object.assign({}, action, data)
        delete finalAction[CALL_API]
        return finalAction
    }

    const [ requestType, successType, failureType ] = types
    next(actionWith({ type: requestType }))

    return matchery("na", "orlyzomg").then(
        response => next(actionWith({
            response,
            type: successType
        })),
        error => next(actionWith({
            type: failureType,
            error: error.message || 'Something bad happened'
        }))
    )
}