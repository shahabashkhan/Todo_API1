const {Pool}= require('pg')

const pool=new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
    connectionString: process.env.DATABASE_URL,
    // ssl:{
    //     rejectUnauthorized:false,
    // },
})

pool.query('SELECT NOW()', (err, res) => {
    if (err) {
        console.error('Error connecting to the database:', err);
    } else {
        console.log('Database connection successful. Current timestamp:', res.rows[0].now);
    }
    
});

module.exports=pool