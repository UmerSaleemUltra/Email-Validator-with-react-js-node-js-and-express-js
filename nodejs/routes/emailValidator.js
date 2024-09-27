// routes/emailValidator.mjs
import { Router } from 'express';
import { body, validationResult } from 'express-validator';

const router = Router();

// Email validation endpoint
router.post('/validate-email', 
  body('email').isEmail().withMessage('Invalid email format'), 
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    return res.status(200).json({ message: 'Valid email address!' });
  }
);

export default router;
