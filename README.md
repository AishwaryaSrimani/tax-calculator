
# Tax Calculator Web Application

This is a simple web application built with Flask that allows users to calculate their overall income after tax deduction based on their gross annual income, extra income, age group, and deductions.



## Features

- Users can input their gross annual income, extra income, age group, and deductions.
- The application calculates the tax based on the provided inputs and displays the overall income after tax deduction.
- Error handling: If any input field is empty or contains invalid data, appropriate error icon '!' within a circle is displayed.
- The application provides an informative tooltip when hovering over the error icons.
- Responsive design: The application is designed to be mobile-friendly.



## Installation

1. To run the application locally, follow these steps:

```bash
  git clone https://github.com/AishwaryaSrimani/tax-calculator.git
```

2. Install the required dependencies:

```bash
pip install -r requirements.txt
```

3. Run the Flask application:

```bash
python calculator.py
```

4. Open your web browser and go to `http://localhost:8000` to access the application.

5. Hosted Web App

To access the hosted version of the web app, visit:

```bash
https://calculate-your-tax.netlify.app/
```



## Usage

1. Open your web browser and go to `http://localhost:8000` and it will access the Home page.
2. Choose the `Calculate Your Tax` option.   
3. A new tab will open. There will be a `calculator` that takes input from users in numbers e.g. `100000`.
4. There is an info sign `?` within a circle, hover over the info icons to view informative tooltips.
5. To know your overall income after tax deduction do the following:
  - Enter your gross annual income, extra income, select your age group, and enter deductions in the respective input fields.
  - Click the "Calculate Tax" button to calculate your overall income after tax deduction.
6. If any input field is empty or contains invalid data, the error icon `!` within a circle will be displayed. Hover over the error icons to view informative tooltips.
8. Once valid inputs are provided, the application will display the overall income after tax deduction in a popup window.



## Test Cases
1. Home Page
   
![Capture](https://github.com/AishwaryaSrimani/PracticeGit/assets/165182404/8fda0f0a-a822-4b2f-b3d9-b313b4f02220)

3. Tax- calculation Page

![blank](https://github.com/AishwaryaSrimani/PracticeGit/assets/165182404/4a883c36-2aa4-4a72-bb82-53fe840c4dc3)

4. Testing with User Input

![with_value](https://github.com/AishwaryaSrimani/PracticeGit/assets/165182404/eef30b01-d857-4c47-843a-681e2d3f68b1)

 
5. Invalid-input or Blank Error Case

 ![error](https://github.com/AishwaryaSrimani/PracticeGit/assets/165182404/803a755d-0613-4c09-a095-1ba0f305b473)
 
6. Informative Tooltip Test

![info](https://github.com/AishwaryaSrimani/PracticeGit/assets/165182404/af2a4889-f609-4310-80f4-ed93035c7bde)
![info2](https://github.com/AishwaryaSrimani/PracticeGit/assets/165182404/bc59ee44-b300-4bb6-9a4a-436ea324578a)


7. Output Page

![alert](https://github.com/AishwaryaSrimani/PracticeGit/assets/165182404/5a302e36-ebb9-41ac-9f8a-5849b8300c4d)

## 🛠 Technologies Used
- Flask:Python web framework
- HTML, CSS, Javascript: Frontend development
- Bootstrap: Frontend framework for responsive design

