import express from 'express';
import {
    deleteWebList,
    getWebList,
    getWebListCreatedBy,
    setWebList,
    updateWebList
} from '../controller/webListController.js';

const app = express();

app.post('/set-weblist', setWebList);
app.get('/get-weblist', getWebList);
app.patch('/update-weblist/:id', updateWebList);
app.get('/get-weblist/:id', getWebListCreatedBy);
app.delete('/delete-webList/:id', deleteWebList);




export default app;