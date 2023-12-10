const db = require('../../data/db-config');

module.exports = {
  create,
  findByUsername,
  findById,
  getAll,
  update,
  remove,
  getResumesByUserId,
  getResumeByUserIdAndResumeId,
  createResume, // Add the createResume function here
};

function create(user) {
  return db('users')
    .insert(user)
    .returning('*');
}

function findByUsername(username) {
  return db('users')
    .where({ username })
    .first();
}

function findById(id) {
  return db('users')
    .where({ user_id: id })
    .first();
}

async function getAll() {
  const users = await db('users');
  // Parse JSON fields to objects for each user's resumes
  for (const user of users) {
    for (const resume of user.resumes) {
      resume.education = JSON.parse(resume.education);
      resume.experience = JSON.parse(resume.experience);
      resume.skills = JSON.parse(resume.skills);
    }
  }
  return users;
}

function update(id, changes) {
  return db('users')
    .where({ user_id: id })
    .update(changes)
    .returning('*');
}

function remove(id) {
  return db('users')
    .where({ user_id: id })
    .del();
}

function getResumesByUserId(userId) {
  return db('resumes').where({ user_id: userId });
}

async function getResumeByUserIdAndResumeId(userId, resumeId) {
  const resume = await db('resumes')
      .where({ user_id: userId, resume_id: resumeId })
      .first();

  if (!resume) {
      return null;
  }

  // Parse JSON fields to objects
  resume.education = JSON.parse(resume.education);
  resume.experience = JSON.parse(resume.experience);
  resume.skills = JSON.parse(resume.skills);

  return resume;
}

// Define the createResume function


// Define the createResume function
function createResume(userId, resumeData) {
  // Ensure the resume is associated with the specified user
  resumeData.user_id = userId;

  // Stringify the education, experience, and skills fields
  resumeData.education = JSON.stringify(resumeData.education || []);
  resumeData.experience = JSON.stringify(resumeData.experience || []);
  resumeData.skills = JSON.stringify(resumeData.skills || []);

  return db('resumes')
    .insert(resumeData)
    .returning('*');
}