class MdReporter {
  constructor(globalConfig, options) {
    this._globalConfig = globalConfig;
    this._options = options;
  }

  onTestResult(test, result, aggResult) {
    // console.log('=====\n')
    // console.log('Reporter_test', test)
    // console.log('=====\n')
    // console.log('Reporter_res', result)
    // console.log('=====\n')
    // console.log('Reporter_ares', aggResult)
    // // console.log('Hai', result.testResults[0])
    // if (result.testResults[0].status != 'passed') {
    //     console.log(result.testResults[0].failureMessages[0])
    // }
    // onRunComplete(contexts, results) {
    //     console.log('Custom reporter output:');
    //     console.log('GlobalConfig: ', this._globalConfig);
    //     console.log('Options: ', this._options);
    // }
  }
}

module.exports = MdReporter;
