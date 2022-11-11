import { app } from './src/api-rest';

app.listen(app.get('port'));
console.log('Servidor en puerto', app.get('port'));
