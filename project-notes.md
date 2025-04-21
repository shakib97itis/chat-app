# Chat App Frontend Project Notes

## Todo

- [x] Setup a project stracture
- [x] Find all the colors of the project and create a color system
- [x] Figure out values of all the dropshadow of all components, and create a system with it
- [x] Find out all the typography related information
- [x] Figure out responsive breakpoints, what will be the best approach for this project?
- [x] Download and setup all the images and icons.
- [x] Create initial plan for all the sections and reuseable component.

## General Notes

## Design System (Colors, fonts, box shadow, etc)

- Colors

  - #FFFFFF
  - #FCFCFC
  - #F1F1F1
  - #EA6C00
  - #00FF75
  - #5F35F5
  - #4D4D4D
  - #3D3D3D
  - #03014C
  - #000000

- Box Shadow

  - box-shadow: 0px 4px 4px 0px rgba(0,0,0,0.25);

- Typography
  - font-family: 'Poppins', sans-serif;

## Responsive Breakpoints

--breakpoint-sm: 40rem; /_640px_/
--breakpoint-md: 48rem; /_768px_/
--breakpoint-lg: 64rem; /_1024px_/
--breakpoint-xl: 80rem; /_1280px_/
--breakpoint-2xl: 90rem; /_1440px_/

## Pages

### Registration Page

- LogInSignUpTemplate as wrapper (Reuseable component)

- Registration Page
  - Form component that's includes all the registration functionality.
    - indivisual input component (reuseable component)

### Login Page

- Use same reuseable components as registration page
- loginWithThirdPartyServiceButton. (Reuseable component)

### Home Page

- Create a container component for this type of page (Reuseable component)
- navigation bar (Reuseable component)
- search bar (Reuseable component)
- panel list (Reuseable component)

### Message Page

- Will wrap the content inside the main container.
- will have navigation bar in the lift.
- search bar, two panel list.
- and chat functionality. (Plan it later)

### Notification Page

- comming soon

## Settings Page

- comming soon. 

## Reuseable Components

### Container

- container (Reuseable component)

### LogInSignUpTemplate
  
- This component is not the main comtainer.
- This should be the wrapper for login and signup form.
- Also this component will contain images.
- Banner images should be responsive.

### Input
  
- The input component has two varients just diffrent styles.
- Reuseable component
- props: label, placeholder, varient, type.
- type: text, email, password
- varient: one, two
- for the password field there will be password show / hide functionality.
- icons for password field
  AiFillEye
  AiFillEyeInvisible

### LoginSignUpButton

- props: varient, onclick
- The button has twor varient one and two. diffent varient will have diffrent design.
- Clicking this button will submit the form.

### ThirdPartyServiceButton

- props: children, onclick

### Navigation

- This component will have some sub component.
- UserProfile (Reuseable component)
- nav items - will crate on the fly.
- logOutButton - will think about it later.

### Panel list

- this component will fetch data from the server.
- Then loop through the data and render the list.
- panels list item (Reuseable component)