# Project Name
**0x02. i18n**

## Author's Details
Name: *Wendy Munyasi.*

Email: *wendymunyasi@gmail.com*

Tel: *+254707240068.*

##  Requirements

### Python Scripts
*   Allowed editors: `vi`, `vim`, `emacs`.
*   All your files will be interpreted/compiled on Ubuntu 20.04 LTS using gcc, using python3 (version 3.8.5).
*   All your files should end with a new line.
*   The `main.py` files are used to test your functions, but you don’t have to push them to your repo.
*   The first line of all your files should be exactly `#!/usr/bin/env python3`.
*   Your code should use the pycodestyle (version `2.8.*`).
*   All your files must be executable.
*   The length of your files will be tested using `wc`.
*   All your modules should have a documentation (`python3 -c 'print(__import__("my_module").__doc__)'`).
*   All your classes should have a documentation (`python3 -c 'print(__import__("my_module").MyClass.__doc__)'`).
*   All your functions (inside and outside a class) should have a documentation (`python3 -c 'print(__import__("my_module").my_function.__doc__)`' and `python3 -c 'print(__import__("my_module").MyClass.my_function.__doc__)'`).
*   A documentation is not a simple word, it’s a real sentence explaining what’s the purpose of the module, class or method (the length of it will be verified).
*   All your functions and coroutines must be type-annotated.


## Project Description
Learn how to parametrize Flask templates to display different languages.
Learn how to infer the correct locale based on URL parameters, user settings or request headers.
Learn how to localize timestamp.


* **0. Basic Flask app** - Setup a basic Flask app in `0-app.py`. Create a single `/` route and an `index.html` template that simply outputs “Welcome to Holberton” as page title (`<title>`) and “Hello world” as header (<`h1>`). - `0-app.py`, `templates/0-index.html`.
* **1. Basic Babel setup** - Do a basic babel setup. - `1-app.py`, `templates/1-index.html`.
* **2. Get locale from request** - Create a `get_locale` function with the `babel.localeselector` decorator. Use `request.accept_languages` to determine the best match with our supported languages. - `2-app.py`, `templates/2-index.html`.
* **3. Parametrize templates** - Use the `_` or `gettext` function to parametrize your templates. Use the message IDs `home_title` and `home_header`. - `3-app.py`, `babel.cfg`, `templates/3-index.html`, `translations/en/LC_MESSAGES/messages.po`, `translations/fr/LC_MESSAGES/messages.po`, `translations/en/LC_MESSAGES/messages.mo`, `translations/fr/LC_MESSAGES/messages.mo`.
* **4. Force locale with URL parameter** - Implement a way to force a particular locale by passing the `locale=fr` parameter to your app’s URLs. - `4-app.py`, `templates/4-index.html`.
* **5. Mock logging in** - Creating a user login system is outside the scope of this project. - `5-app.py`, `templates/5-index.html`.
* **6. Use user locale** - Change your `get_locale` function to use a user’s preferred local if it is supported. - `6-app.py`, `templates/6-index.html`.
* **7. Infer appropriate time zone** - Define a `get_timezone` function and use the `babel.timezoneselector` decorator. - `7-app.py`, `templates/7-index.html`.
* **8. Display the current time** - Based on the inferred time zone, display the current time on the home page in the default format. - `app.py`, `templates/index.html`, `translations/en/LC_MESSAGES/messages.po`, `translations/fr/LC_MESSAGES/messages.po`.


## Collaborate

To collaborate, reach me through my email address wendymunyasi@gmail.com.
