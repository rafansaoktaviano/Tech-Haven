// import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//     id: 0,
//     fullname: "",
//     email: "",
//     avatar: "",
//     status: "",
//     role: "",
//     is_verified: "",
// };

// const authReducer = createSlice({
//     name: "auth",
//     initialState,
//     reducers: {
//         login: (state, action) => {
//             state.id = action.payload.id;
//             state.fullname = action.payload.fullname;
//             state.email = action.payload.email;
//             state.avatar = action.payload.avatar;
//             state.status = action.payload.status;
//             state.role = action.payload.role;
//             state.is_verified = action.payload.is_verified;
//         },
//         logout: () => {
//             return initialState;
//         },
//     },
// });

// export const { login, logout } = authReducer.actions;

// export default authReducer.reducer;

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    id: 0,
    fullname: "",
    email: "",
    avatar: "",
    status: "",
    role: "",
    is_verified: "",
};

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setId: (initialState, action) => {
            initialState.id = action.payload;
        },
        setFullname: (initialState, action) => {
            initialState.fullname = action.payload;
        },
        setEmail: (initialState, action) => {
            initialState.email = action.payload;
        },
        setAvatar: (initialState, action) => {
            initialState.avatar = action.payload;
        },
        setStatus: (initialState, action) => {
            initialState.status = action.payload;
        },
        setRole: (initialState, action) => {
            initialState.role = action.payload;
        },
        setIsVerified: (initialState, action) => {
            initialState.is_verified = action.payload;
        },
        login: (state, action) => {
            return (state = {
                ...state,
                ...action.payload,
            });
        },
        reset: (state, action) => {
            return initialState;
        },
        logout: (state, action) => {
            return (state = initialState);
        },
    },
});

export const {
    setId,
    setFullname,
    setEmail,
    setAvatar,
    setStatus,
    setRole,
    setIsVerified,
    login,
    reset,
    logout,
} = userSlice.actions;

export default userSlice.reducer;
