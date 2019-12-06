const sonarqubeScanner = require('sonarqube-scanner');
     sonarqubeScanner({
       serverUrl: 'http://ec2-3-94-168-153.compute-1.amazonaws.com',
       options : {
       'sonar.sources': '.',
       }
     }, () => {});
