const sonarqubeScanner = require('sonarqube-scanner');
     sonarqubeScanner({
       serverUrl: 'http://3.230.66.65/',
       options : {
       'sonar.sources': '.',
       }
     }, () => {});
