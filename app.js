const express = require('express');
const path = require('path');
const sequelize = require('./configuration/database'); 
const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');
require('dotenv').config();

const app = express();
app.use(express.json());


app.use('/user', authRoutes);
app.use('/users', userRoutes);

sequelize.sync().then(() => {
    console.log('Database synced');

   
    const port = process.env.PORT || 3000;
    app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
    });
})
