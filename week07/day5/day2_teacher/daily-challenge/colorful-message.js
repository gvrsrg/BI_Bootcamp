import chalk from "chalk";

export const displayColorMessage = (msg) => {
  return chalk.bold.green(msg);
};

export const displayErrorMessage = (msg) => {
  return chalk.bold.red(msg);
};
