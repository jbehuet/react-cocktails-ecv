const HTTPCode = {
    success: {
        OK: 200,
        CREATED: 201,
    },

    error: {
        client: {
            BAD_REQUEST: 400,
            UNAUTHORIZED: 401,
            FORBIDDEN: 403,
            NOT_FOUND: 404,
            CONFLICT: 409,
        },
        server: {
            INTERNAL_SERVER_ERROR: 500,
        },
    },
};

export default HTTPCode;
