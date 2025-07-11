// Quick script to check stored emails in MongoDB
require('dotenv').config({ path: '.env.local' });
const { MongoClient } = require('mongodb');

async function checkEmails() {
  const uri = process.env.MONGODB_URI;
  
  if (!uri) {
    console.error('MONGODB_URI not found in environment variables');
    return;
  }
  
  const client = new MongoClient(uri);
  
  try {
    await client.connect();
    console.log('Connected to MongoDB!');
    
    const db = client.db('intern_dedo_subscribers');
    const collection = db.collection('emails');
    
    const emails = await collection.find({}).toArray();
    
    console.log(`\n📧 Total subscribers: ${emails.length}`);
    console.log('\n📋 Recent subscribers:');
    emails.forEach((email, index) => {
      console.log(`${index + 1}. ${email.email} - ${new Date(email.subscribedAt).toLocaleString()}`);
    });
    
  } catch (error) {
    console.error('Error:', error);
  } finally {
    await client.close();
  }
}

checkEmails();
