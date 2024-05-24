const { checkForPermissionsMiddleware } = require("../../middlewarePublic/checkForPermissionsMiddleware");
const { PermissionSet } = require("../../../src/users/data/constants/permissions");
const inactivesystemController = require("./restrictions.controller");
const express = require("express");
const restrictionsController = require("./restrictions.controller");


const router = express.Router();

/**
 * @swagger
 * /api/v2/restrict/insert_InactiveSystem:
 *   post:
 *     tags: [inactivesystemController]
 *     summary: Insert Inactive System
 *     responses:
 *       200:
 *         description: Success
 *       401:
 *         description: Unauthorized
 *       500:
 *         description: Internal Error
 */
router.post("/insert_InactiveSystem", inactivesystemController.insert_InactiveSystem);

/**
 * @swagger
 * /api/v2/restrict/select_InactiveSystem:
 *   get:
 *     tags: [inactivesystemController]
 *     summary: Insert Inactive System
 *     responses:
 *       200:
 *         description: Success
 *       401:
 *         description: Unauthorized
 *       500:
 *         description: Internal Error
 */
router.get("/select_InactiveSystem", inactivesystemController.select_InactiveSystem);


/**
 * @swagger
 * /api/v2/restrict/delete_InactiveSystem/{id}:
 *  delete:
 *      tags: [inactivesystemController]
 *      summary: disable a specific region
 *      security:
 *              - BearerAuth: []
 *      parameters:
 *        - in : path
 *          name : id
 *          type : string
 *      responses:
 *          200: 
 *              description: Success
 *          401:
 *              description: Unauthraize
 *          500:
 *              description: Internal Error
 */
router.delete("/delete_InactiveSystem/:id", inactivesystemController.delete_InactiveSystem);



/**
 * @swagger
 * /api/v2/restrict/update_InactiveSystem/{id}:
 *  put:
 *      tags: [inactivesystemController]
 *      summary: inactivesystemController_update
 *      security:
 *              - BearerAuth: []
 *      parameters:
 *        - in : path
 *          name : id
 *          type : string
 *      requestBody:
 *              required: true
 *              consumes:
 *                  - "application/raw"
 *              content:
 *                  application/json:
 *                      schema:
 *                              type: object
 *                              example: {
 *                                  "title": "...",
 *                                  "status":"",
 *                                  "start_date" : "",
 *                                  "end_date" : "",
 *                                  "inactive_permissions":[]
 *                              }
 *    
 *      responses:
 *          200:
 *              description: Success
 *          401:
 *              description: Unauthraize
 *          500:
 *              description: Internal Error
 */
router.put("/update_InactiveSystem/:id", inactivesystemController.update_InactiveSystem);

module.exports = { inactivesystemRouter: router };
