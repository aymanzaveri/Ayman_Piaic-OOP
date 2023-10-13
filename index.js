#!/usr/bin/env node
import inquirer from 'inquirer';
import chalk from 'chalk';
class EmojiPerson {
    constructor() {
        this.emoji = '🧑';
    }
    changeEmoji(mood) {
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
    getEmoji() {
        return this.emoji;
    }
}
class EmojiPersonWithInfo extends EmojiPerson {
    constructor() {
        super(...arguments);
        this.name = '';
    }
    set setName(value) {
        this.name = value;
    }
    get getName() {
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
