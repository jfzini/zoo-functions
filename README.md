# Zoo Functions project:

Hi there! This is the repository for the Zoo Functions project. I developed it in march 2023, during Trybe's Web Development course as requirement to get my Certificate in Fundamentals of Web Development. This README is still being written.

<details>
	<summary><strong> 📁 Files provided</strong></summary><br />
	
The data in <strong>./data/zoo_data.js</strong> was provided by Trybe so we, students, could work based on it to develop the functions required.
Trybe also provided the <strong>./src/handlerElephants</strong> and <strong>./src/getOpeningHours</strong> files and respective functions, so the students could implement tests using Jest.
</details><br/>

## Requirements
In order to be approved, the following requirements were met:
<details>
	<summary><strong> ✅ Implement the <code>getSpeciesByIds</code> function</strong></summary><br />

It should search for an animal species by ID and return an array containing all animals of that species.

- [x] Make the getSpeciesByIds function able to receive multiple parameters;<br>
- [x] Return an empty array if the function does not receive an ID;<br>
- [x] Return the following information from the data file:
 - If the function receives only one ID, return the species of the animal corresponding to this ID;
 - If the function receives multiple IDs, return all species corresponding to those IDs. <br>
</details>

<details>
	<summary><strong> ✅ Implement the <code>getAnimalsOlderThan</code> function</strong></summary><br />

It should receive a species and an age as parameters, and then return whether all animals of that species have that age or are older.

- [x] The function, when receiving a species and an age as parameters, should test whether all animals of this species have the specified minimum age and return a boolean value.<br>
 </details>

<details>
	<summary><strong> ✅ Implement the <code>getgetEmployeeName</code> function</strong></summary><br />

It should search for employees by their first or last name.

- [x] The function, when receiving no parameters, should return an empty object.<br>
- [x] The function, when receiving the first or last name of an employee as argument, should return an object in the following format:<br>
```javascript
  {
    id: 'c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1',
    firstName: 'Nigel',
    lastName: 'Nelson',
    managers: ['0e7b460e-acf4-4e17-bcb3-ee472265db83', 'fdb2543b-5662-46a7-badc-93d960fdc0a8'],
    responsibleFor: ['0938aa23-f153-4937-9f88-4858b24d6bce', 'e8481c1d-42ea-4610-8e11-1752cfc05a46'],
  }

```
 </details>

<details>
	<summary><strong> ✅ Implement the <code>getRelatedEmployees</code> function</strong></summary><br />

It should verify if a person is a manager and, if so, which employees they're responsible for.

- [x] The function <code>isManager</code>should return 'true' if it receives a manager id's as argument, or 'false' if not.<br>
- [x] The function <code>getRelatedEmployees</code>should return the employees that the respective manager is responsible for:
- In case the ID passed as argument is from a manager, it should return an array of the related employees.
- In case the ID is not from a manager it should throw an error with the message 'O id inserido não é de uma pessoa colaboradora gerente!'.
<br>
 </details>

 <details>
	<summary><strong> ✅ Implement the <code>countAnimals</code> function</strong></summary><br />

The function should count the number of individuals of a given species in the zoo, based on the argument received.

- [x] It should return the quantity of resident animals per species if no parameter is passed. The return should be an object whose key is the name of each species and the value is the total number of animals (residents) of that species. For example:<br>
```javascript
    {
    lions: 4,
    // [...]
  }
```
- [x] It should return the quantity of resident animals in the zoo of the species passed as argument. For example:
- When receiving the argument { species: 'penguins' }, return only the quantity (number) of penguins that reside in the zoo;
- When passing the argument { species: 'giraffes', sex: 'female' }, return only the quantity (number) of female giraffes that reside in the zoo.":
<br>
 </details>
 
  <details>
	<summary><strong> ✅ Implement the <code>calculateEntry</code> function</strong></summary><br />

The function should calculate the total entrance cost of a group of visitors based on their age, where people under 18 are considered 'children', above or equal to 18 and under 50 are considered 'adults' and above or equal 50 are considered 'seniors'.
<br>
 </details>

 <details>
	<summary><strong> ✅ Obtain at least 80% test coverage for the <code>handlerElephants</code> function</strong></summary><br />

The function was provided by Trybe and I implemented the tests in <strong>./test</strong>.
<br>
 </details>

 <details>
	<summary><strong> ✅ Obtain at least 90% test coverage for the <code>handlerElephants</code> function</strong></summary><br />

The function was provided by Trybe and I implemented the tests in <strong>./test</strong>.
<br>
 </details>
 
  <details>
	<summary><strong> ✅ Obtain at least 100% test coverage for the <code>handlerElephants</code> function</strong></summary><br />

The function was provided by Trybe and I implemented the tests in <strong>./test</strong>.
<br>
 </details>

  <details>
	<summary><strong> ✅ Obtain at least 85% test coverage for the <code>getOpeningHours</code> function</strong></summary><br />

The function was provided by Trybe and I implemented the tests in <strong>./test</strong>.
<br>
 </details>

  <details>
	<summary><strong> ✅ Obtain at least 95% test coverage for the <code>getOpeningHours</code> function</strong></summary><br />

The function was provided by Trybe and I implemented the tests in <strong>./test</strong>.
<br>
 </details>

  <details>
	<summary><strong> ✅ Obtain at least 100% test coverage for the <code>getOpeningHours</code> function</strong></summary><br />

The function was provided by Trybe and I implemented the tests in <strong>./test</strong>.
<br>
 </details>


<!-- Olá, Tryber!
Esse é apenas um arquivo inicial para o README do seu projeto.
É essencial que você preencha esse documento por conta própria, ok?
Não deixe de usar nossas dicas de escrita de README de projetos, e deixe sua criatividade brilhar!
:warning: IMPORTANTE: você precisa deixar nítido:
- quais arquivos/pastas foram desenvolvidos por você;
- quais arquivos/pastas foram desenvolvidos por outra pessoa estudante;
- quais arquivos/pastas foram desenvolvidos pela Trybe.
-->
