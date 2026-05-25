const express = require('express');
const router = express.Router();

const validUsers = {
    // *53 Family
    '22103053': { name: 'Gagandeep', rollNo: '22103053', photoUrl: '/53.png', mobile: '9465774926', officialEmail: 'gagandeep.cs.22@nitj.ac.in', personalEmail: 'gagansokhal077@gmail.com' },
    '23103053': { name: 'Gagandeep', rollNo: '23103053', photoUrl: '/53.png', mobile: '9465774926', officialEmail: 'gagandeep.cs.23@nitj.ac.in', personalEmail: 'gagansokhal077@gmail.com' },
    '24103053': { name: 'Gagandeep', rollNo: '24103053', photoUrl: '/53.png', mobile: '9465774926', officialEmail: 'gagandeep.cs.24@nitj.ac.in', personalEmail: 'gagansokhal077@gmail.com' },
    '25103053': { name: 'Gagandeep', rollNo: '25103053', photoUrl: '/53.png', mobile: '9465774926', officialEmail: 'gagandeep.cs.25@nitj.ac.in', personalEmail: 'gagansokhal077@gmail.com' },

    // *63 Family
    '22103063': { name: 'Harsh', rollNo: '22103063', photoUrl: '/63.png', mobile: '9592690166', officialEmail: 'harsh.cs.22@nitj.ac.in' },
    '23103063': { name: 'Harsh', rollNo: '23103063', photoUrl: '/63.png', mobile: '9592690166', officialEmail: 'harsh.cs.23@nitj.ac.in' },
    '24103063': { name: 'Harsh', rollNo: '24103063', photoUrl: '/63.png', mobile: '9592690166', officialEmail: 'harsh.cs.24@nitj.ac.in' },

    // *54 Family
    '22103054': { name: 'Gopichand', rollNo: '22103054', photoUrl: '/54.png', mobile: '9056264546', officialEmail: 'gopic.cs.22@nitj.ac.in' },
    '23103054': { name: 'Gopichand', rollNo: '23103054', photoUrl: '/54.png', mobile: '9056264546', officialEmail: 'gopic.cs.23@nitj.ac.in' },
    '24103054': { name: 'Gopichand', rollNo: '24103054', photoUrl: '/54.png', mobile: '9056264546', officialEmail: 'gopic.cs.24@nitj.ac.in' }
};

// Mock Auth Route
router.post('/login', (req, res) => {
    const { rollNo, password } = req.body;
    
    if (validUsers[rollNo] && (password === 'demo123' || password === 'Gagan@1008')) {
        let userObj = { ...validUsers[rollNo] };
        res.json({
            success: true,
            user: userObj
        });
    } else {
        res.status(401).json({ success: false, message: 'Invalid credentials' });
    }
});

module.exports = router;
