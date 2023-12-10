const express = require('express');
const bcrypt = require('bcryptjs'); 
const Users = require('./users-model');

const router = express.Router();


// Create a new user
router.post('/', async (req, res) => {
  try {
    const user = req.body;

    // Validate username and password
    if (!user.username || !user.password) {
      return res.status(400).json({ message: 'Username and password are required' });
    }

    // Check if the username is already taken (assuming unique usernames)
    const existingUser = await Users.findByUsername(user.username);
    if (existingUser) {
      return res.status(400).json({ message: 'Username is already in use' });
    }

    // Hash the password
    const hash = bcrypt.hashSync(user.password, 10);
    user.password = hash;

    // Create the new user
    const newUser = await Users.create(user);

    res.status(201).json(newUser);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error creating the user' });
  }
});


// Get all users
router.get('/', async (req, res) => {
  try {
    const users = await Users.getAll();
    res.status(200).json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error retrieving users' });
  }
});

// Get a specific user by ID
router.get('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const user = await Users.findById(id);
    if (user) {
      res.status(200).json(user);
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error retrieving the user' });
  }
});

// Update a user by ID
router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const changes = req.body;
  try {
    const updatedUser = await Users.update(id, changes);
    if (updatedUser) {
      res.status(200).json(updatedUser);
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error updating the user' });
  }
});

// Delete a user by ID
router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const count = await Users.remove(id);
    if (count > 0) {
      res.status(204).end();
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error deleting the user' });
  }
});



//RESUME

router.get('/:user_id/resumes', async (req, res) => {
  try {
      const userId = req.params.user_id;
      // Fetch resumes for the specified user
      const resumes = await Users.getResumesByUserId(userId);
      res.json(resumes);
  } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error retrieving resumes' });
  }
});

// Get a specific resume for a user

router.get('/:user_id/resumes/:resume_id', async (req, res) => {
  try {
    const userId = req.params.user_id;
    const resumeId = req.params.resume_id;

    // Fetch the specific resume for the specified user
    const resume = await Users.getResumeByUserIdAndResumeId(userId, resumeId);

    if (!resume) {
      return res.status(404).json({ message: 'Resume not found' });
    }

    // Parse JSON fields to objects
    resume.education = JSON.parse(resume.education);
    resume.experience = JSON.parse(resume.experience);
    resume.skills = JSON.parse(resume.skills);

    res.json(resume);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error retrieving the resume' });
  }
});


router.post('/:user_id/resumes', async (req, res) => {
  try {
    const userId = req.params.user_id;
    const resumeData = req.body;

    // Create the new resume with JSON fields and the associated user_id
    const newResume = await Users.createResume(userId, {
      ...resumeData,
      education: JSON.stringify(resumeData.education || []),
      experience: JSON.stringify(resumeData.experience || []),
      skills: JSON.stringify(resumeData.skills || []),
    });

    res.status(201).json(newResume);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error creating the resume' });
  }
});

// Update a user's resume by resume_id
router.put('/:user_id/resumes/:resume_id', async (req, res) => {
  try {
    const userId = req.params.user_id;
    const resumeId = req.params.resume_id;
    const changes = req.body;
    
    // Update the user's resume
    const updatedResume = await Users.updateResume(userId, resumeId, changes);
    
    if (updatedResume) {
      res.status(200).json(updatedResume);
    } else {
      res.status(404).json({ message: 'Resume not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error updating the resume' });
  }
});

// Delete a user's resume by resume_id
router.delete('/:user_id/resumes/:resume_id', async (req, res) => {
  try {
    const userId = req.params.user_id;
    const resumeId = req.params.resume_id;
    
    // Delete the user's resume
    const count = await Users.removeResume(userId, resumeId);
    
    if (count > 0) {
      res.status(204).end();
    } else {
      res.status(404).json({ message: 'Resume not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error deleting the resume' });
  }
});


module.exports = router;
