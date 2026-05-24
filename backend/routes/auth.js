const express = require('express');
const router = express.Router();

const validUsers = {
    '22103053': { name: 'Demo Student (2022)', rollNo: '22103053' },
    '23103053': { name: 'Demo Student (2023)', rollNo: '23103053' },
    '24103053': { name: 'Demo Student (2024)', rollNo: '24103053' },
    '25103053': { name: 'Gagandeep', rollNo: '25103053' }
};

// Mock Auth Route
router.post('/login', (req, res) => {
    const { rollNo, password } = req.body;
    
    if (validUsers[rollNo] && (password === 'demo123' || password === 'Gagan@1008')) {
        let userObj = { ...validUsers[rollNo] };
        if (rollNo.endsWith('53')) {
            userObj.photoUrl = '/53.png';
        }
        res.json({
            success: true,
            user: userObj
        });
    } else {
        res.status(401).json({ success: false, message: 'Invalid credentials' });
    }
});

module.exports = router;
