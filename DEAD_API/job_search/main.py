import requests
from bs4 import BeautifulSoup

# Define the URL
url = "https://www.indeed.com/jobs?q=customer+service+representative&l=Newburgh%2C+NY&from=searchOnHP&vjk=0b7a44142e80abfd"

# Define a User-Agent header to mimic a web browser
headers = {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36"
}

# Send an HTTP GET request to the URL with headers
response = requests.get(url, headers=headers)

# Check if the request was successful (status code 200)
if response.status_code == 200:
    # Parse the HTML content using BeautifulSoup
    soup = BeautifulSoup(response.text, 'html.parser')

    # Now, you can scrape and extract data from the parsed HTML.
    # For example, let's find and print the job titles:
    job_titles = soup.find_all('div', class_='jobsearch-SerpJobCard-title')
    
    for title in job_titles:
        print(title.text.strip())  # .strip() removes leading/trailing whitespace

else:
    print("Failed to retrieve the page. Status code:", response.status_code)
