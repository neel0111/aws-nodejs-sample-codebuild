const sonarqubeScanner = require('sonarqube-scanner');
     sonarqubeScanner({
       serverUrl: 'http://ec2-3-230-26-162.compute-1.amazonaws.com',
       options : {
       'sonar.sources': '.',
       }
     }, () => {});
