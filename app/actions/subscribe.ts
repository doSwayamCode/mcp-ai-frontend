"use server"

import { MongoClient } from "mongodb"

const uri = process.env.MONGODB_URI

if (!uri) {
  throw new Error("MONGODB_URI environment variable is not set")
}

const client = new MongoClient(uri)

export async function subscribeEmail(email: string) {
  try {
    // Validate email
    if (!email || !email.includes("@")) {
      return { success: false, error: "Invalid email address" }
    }

    await client.connect()
    const db = client.db("intern_dedo_subscribers")
    const collection = db.collection("emails")

    // Check if email already exists
    const existingEmail = await collection.findOne({ email })
    if (existingEmail) {
      return { success: false, error: "You're already subscribed! Check your inbox for internship updates." }
    }

    // Insert new email
    await collection.insertOne({
      email,
      subscribedAt: new Date(),
      source: "intern_dedo_landing",
      status: "active",
      preferences: {
        internshipTypes: ["all"],
        locations: ["all"],
      },
    })

    console.log(`New Intern Dedo subscriber: ${email}`)

    return { success: true }
  } catch (error) {
    console.error("Error subscribing email:", error)
    return { success: false, error: "Failed to subscribe. Please try again." }
  } finally {
    await client.close()
  }
}
