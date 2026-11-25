require('dotenv').config();
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const User = require('./src/models/User');

const EMAIL = 'admin@disasterrelief.local';
const NEW_PASSWORD = 'Admin@12345';

async function resetAdminPassword() {
  try {
    const mongoUri = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/disaster_relief_db';
    await mongoose.connect(mongoUri);

    let admin = await User.findOne({ email: EMAIL });

    if (!admin) {
      admin = new User({
        name: 'System Administrator',
        email: EMAIL,
        phone: 'N/A',
        address: 'Chattogram, Bangladesh',
        nid: 'ADMIN000001',
        role: 'Admin',
        password: await bcrypt.hash(NEW_PASSWORD, 12)
      });
    } else {
      admin.name = 'System Administrator';
      admin.role = 'Admin';
      admin.password = await bcrypt.hash(NEW_PASSWORD, 12);
      if (!admin.phone) admin.phone = 'N/A';
      if (!admin.address) admin.address = 'Chattogram, Bangladesh';
      if (!admin.nid) admin.nid = 'ADMIN000001';
    }

    await admin.save();

    console.log('\\nAdmin account is ready.');
    console.log('Email: ' + EMAIL);
    console.log('Password: ' + NEW_PASSWORD);
    console.log('Role: ' + admin.role);
    console.log('\\nNow sign in at http://localhost:5000/login');
  } catch (error) {
    console.error('Admin password reset failed:', error.message);
    process.exitCode = 1;
  } finally {
    await mongoose.disconnect().catch(() => {});
  }
}

resetAdminPassword();
