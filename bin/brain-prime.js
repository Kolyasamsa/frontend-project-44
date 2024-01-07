#!/usr/bin/env node
import { description, startRound } from '../src/games/prime.js';
import startGame from '../src/index.js';

startGame(description, startRound);
