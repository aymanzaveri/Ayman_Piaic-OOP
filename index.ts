#!/usr/bin/env node

import inquirer from 'inquirer';
import chalk from 'chalk';

class EmojiPerson {
  private emoji: string;

  constructor() {
    this.emoji = '🧑';
  }

  changeEmoji(mood: string) {
    switch (mood) {
      case 'happy':
        this.emoji = '😄';
        break;
      case 'sad':
        this.emoji = '😢';
        break;
      case 'excited':
        this.emoji = '🎉';
        break;
      case 'relaxed':
        this.emoji = '😌';
        break;
      default:
        this.emoji = '🤔';
    }
  }

  getEmoji(): string {
    return this.emoji;
  }
}

class EmojiPersonWithInfo extends EmojiPerson {
  private name: string = '';

  set setName(value: string) {
    this.name = value;
  }

  get getName(): string {
    return this.name;
  }
}

async function main() {
  const questions = [
    {
      type: 'input',
      name: 'name',
      message: 'What is your name?',
    },
    {
      type: 'list',
      name: 'mood',
      message: 'How are you feeling today?',
      choices: ['happy', 'sad', 'excited', 'relaxed'],
    },
  ];

  const answers = await inquirer.prompt(questions);
  const person = new EmojiPersonWithInfo();

  person.setName = answers.name;
  person.changeEmoji(answers.mood);

  console.log(chalk.green("Hello, "), chalk.greenBright.bold(`${person.getName}`), chalk.green('!'));
  console.log(chalk.blue("Today, your mood is: "), chalk.greenBright.bold(`${person.getEmoji()}`));
}

main();

