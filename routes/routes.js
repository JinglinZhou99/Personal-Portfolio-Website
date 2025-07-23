const express = require('express');
const fs = require('fs');
const path = require('path');
const router = express.Router();
const { appName } = require('../modules/config');

const getDate = () => new Date().toDateString();
const getData = () => JSON.parse(fs.readFileSync(path.join(__dirname, '../data/profile.json')));

router.get('/', (req, res) => {
  res.render('home', { appName, date: getDate() });
});

router.get('/about', (req, res) => {
  res.render('about', { appName, date: getDate() });
});

router.get('/contact', (req, res) => {
  res.render('contact', { appName, date: getDate() });
});

router.get('/skills', (req, res) => {
  const data = getData();
  res.render('skills', { appName, date: getDate(), skills: data.skills });
});

router.get('/projects', (req, res) => {
  const data = getData();
  res.render('projects', { appName, date: getDate(), projects: data.projects });
});

module.exports = router;

