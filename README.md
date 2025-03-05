## Steps to follow for installation

1. Make sure that you have both _Python_ and _Node.js_ installed on your machine.
2. Clone the repo to your local device

If your `pip` command is not working try <br>
For windows:
`python -m pip install`
<br>
For mac:
`python3 -m pip install`

### Backend

There are two main directories in the project, `backend` and `frontend`. They are both places in the `\root` directory of the project.

⚠️The first two steps are for activating the venv for a clean environment. <br>
⚠️These steps should be done in the `\root` directory of the project to ensure an isolated environment for the whole project.

1. Create a virtual environment :
For windows:
```
python -m venv venv
```
For mac:
```
python3 -m venv venv
```
2. Activate the virtual environment :
For windows:
```
venv\Scripts\activate
```
For mac:
```
source venv/bin/activate
```
3. Navigate to the backend directory : 
```
cd backend
```
4. Command to run the installation of the necessary python modules :
For windows:
```
pip install -r requirements.txt
```
For mac:
```
pip3 install -r requirements.txt
```

9. To run the backend : 
For windows:
```
python app.py
```
For mac:
```
python3 app.py
```
10. To run flask: 
```
flask run
```

### Frontend

1. Navigate to the frontend directory : 
```
cd frontend
```
2. Run 
```
npm install
```
3. Install necessary packages : 
```
npm install react-router-dom
```
```
npm install --save-dev @types/react-router-dom
```
```
npm install axios
```
```
npm install @mantine/core @mantine/hooks
```
```
npm install @mantine/dates
```

4. To run the frontend : 
```
npm run dev
```


## Code Organization

### Frontend

The directory `frontend/public` will be the directpry that stores any images, svgs, etc.
The directory `frontend/src/components` will store all the components that are used in the frontend.
The directory `frontend/src/api` will store the api calls that are made to the backend. These function will ten be called in the components.

- when implementing an api call funtion the backend api endpoints and their correcponding implementation can be found in the `backend/main.py` file. 
