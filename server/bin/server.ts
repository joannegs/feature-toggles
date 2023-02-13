import { app } from '../src/app'
import * as dotenv from 'dotenv';

dotenv.config();

app.listen(process.env.PORT || 8080, () => {
    console.log(`🚀 Server is running on port ${process.env.PORT} (or 8080)`);
});