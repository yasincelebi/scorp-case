## Scorp Project With React

##### In this project, features such as changing the language, login, converting the contact form to JSON are used.(Without using libraries as possible.)

### Documentation

##### Clone this repository

`git clone https://github.com/yasincelebi/scorp-case.git`

##### Install dependecies

`yarn install`

##### Start the project

`yarn start`

#### If you want to run with webpack

`yarn webpack-dev`

#### Get build

`yarn webpack-build`
or
`yarn build`

#### Note that

##### Since the login page is a model, if you want to change the language on the login page, it will redirect to the home page.

Remember to rename the .env.example file to .env due to webpack settings. Actually i have set it up, but it's just precautionary.

#### Add language option

Create a languageYouWant.json. Import into languages/index.js file. It will be

```
import tr from './tr.json';
import en from './en.json';
import languageYouWant from './languageYouWant.json'

export const dictionaryList = { en, tr,languageYouWant };
```

and go to line 122 of components/Header/Header.js. You will need to write the language you include as value.

```
<select id="cars" onClick={changeLanguage}>
    <option value="en" selected>
        EN
    </option>
    <option value="tr">TR</option>
    <option value="languageYouWant">languageYouWant
    </option>
</select>
```
