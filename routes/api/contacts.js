const express = require("express");

const ctrl = require("../../controllers/contacts");

const { validateBody } = require("../../midlwares");

const { schemes } = require("../../models/contact");

const router = express.Router();

router.get("/", ctrl.getAllContacts);

// router.get("/:contactId", ctrl.getContactById);

router.post("/", validateBody(schemes.addSchema), ctrl.addContact);

// router.delete("/:contactId", ctrl.removeContact);

// router.put("/:contactId", validateBody(addSchema), ctrl.updateContact);

module.exports = router;

//! router.post("/", validateBody(addSchema), ctrl.addContact);
