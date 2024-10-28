import pool from "../db.js";

const model = async () => {
    const query = `INSERT INTO roles (id, roleName) VALUES 
        (1, "User"),
        (2, "Job-Giver"),
        (3, "Admin"),
        (4, "Administrator"),
        (5, "Tester"),
        (6, "Developer")
    `
    try {
        const connection = await pool.getConnection();
        await connection.query(query);
        return {status: true, msg: "Roles Inserted Successfully"}        
    } catch (err) {
        console.error(err);
        return {status: false, msg: "Insertion Of Roles Failed"}
    }
};

export default model;