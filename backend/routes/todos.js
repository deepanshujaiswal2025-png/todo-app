import {Router} from 'express';

const router = Router();

router.post('/', async (req, res) => {
    try{
        const {description, completed} = req.body;
        const newTodo = await pool.query("INSERT INTO todo (description, completed) VALUES ($1, $2) RETURNING *",
             [description, completed || false]);
        res.json(newTodo, rows[0]);
    }catch(er){
        console.error(er.message);
        res.status(500).send('Server down :(');
    }
});
