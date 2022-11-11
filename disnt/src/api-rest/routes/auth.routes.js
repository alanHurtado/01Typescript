"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const use_controlers_1 = require("../controllers/use.controlers");
const router = (0, express_1.Router)();
router.get("/signup", use_controlers_1.signUp);
// router.post("/signin", signIn);
router.get("/signIn", use_controlers_1.signIn);
router.post("/signup", use_controlers_1.signUp);
exports.default = router;
//# sourceMappingURL=auth.routes.js.map