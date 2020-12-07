const CONFIG = {
    jwt: {
        secret: process.env.TOKEN_SECRET || 'monsecret',
        options: { expiresIn: (Number(process.env.TOKEN_TIME) || 30) * 60 },
        reset_options: { expiresIn: 120 * 60 }
    },
}

export default CONFIG;