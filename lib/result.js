/*jshint esnext: true */
const SUCCESS = 'success',
  FAIL = 'fail',
  ERROR = 'error',
  WARNING = 'warning';

function Result() {
  this.status = undefined;
  this.successes = [];
  this.failures = [];
  this.errors = [];
  this.info = {};
}

Result.prototype.setStatusByStats = function () {
  if (this.errors.length > 0) {
    this.status = ERROR;
  } else if (this.failures.length > 0) {
    this.status = FAIL;
  } else {
    this.status = SUCCESS;
  }
};

Result.prototype.isSuccess = function () {
  return this.status === SUCCESS;
};

Result.prototype.isFail = function () {
  return this.status === FAIL;
};

Result.prototype.isError = function () {
  return this.status === ERROR;
};

Result.prototype.isWarning = function () {
  return this.status === WARNING;
};

Result.prototype.getStatus = function () {
  return this.status;
};

Result.prototype.getSuccesses = function () {
  return this.successes;
};

Result.prototype.getFailures = function () {
  return this.failures;
};

Result.prototype.getErrors = function () {
  return this.errors;
};

Result.prototype.getInfo = function () {
  return this.info;
};

Result.prototype.addSuccess = function (success) {
  this.successes.push(success);
};

Result.prototype.addFailure = function (failure) {
  this.failures.push(failure);
};

Result.prototype.addError = function (error) {
  this.errors.push(error);
};

Result.prototype.addInfo = function (type, info) {
  this.info[type] = info;
};

Result.prototype.addSuccesses = function (successes) {
  this.successes = this.successes.concat(successes);
};

Result.prototype.addFailures = function (failures) {
  this.failures = this.failures.concat(failures);
};

Result.prototype.addErrors = function (errors) {
  this.errors = this.errors.concat(errors);
};

Result.prototype.hasSuccess = function () {
  return this.successes.length > 0;
};

Result.prototype.hasFailure = function () {
  return this.failures.length > 0;
};

Result.prototype.hasError = function () {
  return this.errors.length > 0;
};

Result.prototype.hasInfo = function () {
  return Object.keys(this.info).length > 0;
};

module.exports = Result;