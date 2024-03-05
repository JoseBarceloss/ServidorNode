const express = require('express');
const teams = require('./data');

const app = express();
const port = 3002;

app.use(express.json());

app.get('/', (req, res) => res.status(200).json(
    { message: 'ola mundooo! :D' },
));

// Minha Query String
// http://localhost:3002/search?name=Barcelos&age=21
app.get('/search', (req, res) => {
    console.log(req.query.name);
    console.log(req.query.age);

    res.status(200).send('Search done!');
});

// Minha Rota!!
// http://localhost:3002/people/1/Barcelos
app.get('/people/:id/:name', (req, res) => {
    console.log(req.params.id);
    console.log(req.params.name);
    
    res.status(200).send('people Ok!');
});

// Minha Tasks, eu fiz um JSON simples para testar :D
app.post('/tasks', (req, res) => {
    console.log(req.body.name);
    console.log(req.body.age);
    
    res.status(200).send('Task ok!');
});

// Minha Rota de Times do arquivo data.js com meu response
app.get('/teams', (req, res) => res.status(200).json(teams));

app.post('/teams', (req, res) => {
    const newTeam = { ...req.body };
    teams.push(newTeam);

    res.status(201).json(newTeam);
});

// atualiza um time pelo ID :D 
app.put('/teams/:id', (req, res) => {
    const { id } = req.params;
    const { name, initials } = req.body;

    const updateTeam = teams.find((team) => team.id === Number(id));

    if (!updateTeam) return res.status(404).json({ message: 'Team not found' });

    updateTeam.name = name;
    updateTeam.initials = initials;
    res.status(200).json(updateTeam);
});

// deleta um time :'(
app.delete('/teams/:id', (req, res) => {
    const { id } = req.params;
    const arrayPosition = teams.findIndex((team) => team.id === Number(id));
    teams.splice(arrayPosition, 1);
  
    res.status(200).end();
  });

module.exports = [app, port];