import authReducer from '../../reducers/auth'

test("should generate INIT action correctly", () => {

    expect(authReducer(undefined, '@@INIT')).toEqual({})
})

test("should generate login action correctly", () => {
    const uid = "sdfghj345dfghj"
    expect(authReducer(undefined, {
        type: "LOGIN",
        uid
    })).toEqual({ uid })
})

test("should generate logout action correctly", () => {
    expect(authReducer(undefined, { type: "LOGOUT" })).toEqual({})
})