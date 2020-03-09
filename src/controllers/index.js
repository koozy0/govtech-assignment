const api = require('./api');
const students = require('./students');
const teachers = require('./teachers');

const serverWorks = (req, res) => {
  res.json({ message: 'Server works!' });
};

const notFound = (req, res) => {
  res.status(404).json({ message: 'Resource not found' });
};

const methodNotAllowed = (req, res) => {
  res.status(405).json({ message: 'Method not allowed' });
};

module.exports = {
  api,
  students,
  teachers,
  serverWorks,
  notFound,
  methodNotAllowed,
};
