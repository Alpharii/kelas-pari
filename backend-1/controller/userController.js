import { users } from "../data/user.js"

export const getUsers = (req, res) => {
    res.json({
        status: 200,
        message: "berhasil get user",
        data: users
    });
};

export const createUser = (req, res) => {
    const data = req.body;

    if (!data || !data.username || !data.password) {
        return res.status(400).json({
            status: 400,
            message: "data gagal dibuat",
            data: {}
        });
    }

    users.push({
        id: users.length + 1,
        username: data.username,
        password: data.password
    });

    res.status(201).json({
        status: 201,
        message: "data berhasil dibuat",
        data: data
    });
};