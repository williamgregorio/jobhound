import { readFile, writeFile } from 'fs/promises';

export async function getData() {
  try {
    const response = await fetch("http://localhost:8000/api/v1/resumes/");
    const data = await response.json();
    return data;

  } catch (error) {
    console.error('Error fetching data:', error);
    return [];
  }
}

export async function postData(newResumeData) {
  try {
    await fetch("http://localhost:8000/api/v1/resumes/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newResumeData),
    });

    console.log('Data has been successfully posted.');

  } catch (error) {
    console.error('Error posting data:', error);
  }
}