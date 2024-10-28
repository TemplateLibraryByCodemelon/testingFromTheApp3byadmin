import pool from "../db.js";
import rowsCreation from "./createRoles.js"

const model = async () => {
    try {
        const query = `CREATE TABLE IF NOT EXISTS roles 
        (
            id INT PRIMARY KEY,
            roleName VARCHAR(255)
        )`
        const connection = await pool.getConnection();
        await connection.query(query);
        const [rows] = await connection.query(`SELECT COUNT(*) AS count FROM roles`);
        if (rows[0].count == 0) {
            const status = await rowsCreation();
            if (!status.status) {
                console.error(status.msg);
            } else {
                console.log(status.msg);
            }
        }
        return {status: true, msg: "Table Created Successfully"}
    } catch (err) {
        console.error(err);
        return {status: false, msg: "Internal Error While Creating The Table"}
    }
};

console.error(await model());

export default model;