"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const api_rest_1 = require("./src/api-rest");
api_rest_1.app.listen(api_rest_1.app.get('port'));
console.log('Servidor en puerto', api_rest_1.app.get('port'));
//# sourceMappingURL=app.js.map